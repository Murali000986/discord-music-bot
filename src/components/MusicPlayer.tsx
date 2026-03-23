import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Music, ChevronDown } from "lucide-react";

const TRACKS = [
  {
    title: "Lofi Chill Beats",
    artist: "NEON Radio",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
  },
  {
    title: "Midnight Drive",
    artist: "NEON Radio",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    title: "Ambient Space",
    artist: "NEON Radio",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
];

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [isExpanded, setIsExpanded] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const track = TRACKS[trackIndex];

  useEffect(() => {
    const audio = new Audio(track.src);
    audio.loop = false;
    audio.volume = volume;
    audioRef.current = audio;

    audio.addEventListener("ended", () => {
      setTrackIndex((prev) => (prev + 1) % TRACKS.length);
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [trackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (!hasInteracted) setHasInteracted(true);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const bars = Array.from({ length: 5 });

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 glass-panel rounded-2xl p-4 w-64 border border-primary/20 shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
          >
            {/* Track info */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 box-glow-primary">
                <Music className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-white font-bold text-sm truncate">{track.title}</p>
                <p className="text-muted-foreground text-xs">{track.artist}</p>
              </div>
              {/* Mini equalizer */}
              <div className="flex items-end gap-0.5 h-5 shrink-0">
                {bars.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 rounded-full bg-primary transition-all ${isPlaying ? "animate-eq" : "h-1"}`}
                    style={isPlaying ? {
                      animation: `waveform ${0.6 + i * 0.15}s ease-in-out infinite`,
                      animationDelay: `${i * 0.1}s`,
                      height: "100%"
                    } : { height: "4px" }}
                  />
                ))}
              </div>
            </div>

            {/* Track list */}
            <div className="space-y-1 mb-4">
              {TRACKS.map((t, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (i !== trackIndex) {
                      audioRef.current?.pause();
                      setIsPlaying(false);
                      setTrackIndex(i);
                    }
                  }}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all flex items-center gap-2 ${
                    i === trackIndex
                      ? "bg-primary/20 text-primary font-bold"
                      : "text-muted-foreground hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] shrink-0 ${i === trackIndex ? "bg-primary text-white" : "bg-white/10"}`}>
                    {i === trackIndex && isPlaying ? "▶" : i + 1}
                  </span>
                  {t.title}
                </button>
              ))}
            </div>

            {/* Volume */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-muted-foreground hover:text-white transition-colors shrink-0"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(Number(e.target.value));
                  setIsMuted(false);
                }}
                className="w-full h-1 accent-primary rounded-full cursor-pointer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main player button */}
      <div className="flex items-center gap-2 justify-end">
        {/* Collapse/expand toggle */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-8 h-8 rounded-full glass-panel border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white transition-colors"
          whileTap={{ scale: 0.9 }}
        >
          <motion.div animate={{ rotate: isExpanded ? 0 : 180 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>

        {/* Play/pause button */}
        <motion.button
          onClick={togglePlay}
          whileTap={{ scale: 0.9 }}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying
              ? "bg-gradient-to-r from-primary to-accent shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
              : "bg-gradient-to-r from-primary/80 to-accent/80 shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
          }`}
        >
          {/* Pulsing ring when playing */}
          {isPlaying && (
            <>
              <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              <span className="absolute inset-[-4px] rounded-full border border-primary/30 animate-pulse" />
            </>
          )}
          {isPlaying
            ? <Pause className="w-6 h-6 text-white relative z-10" />
            : <Play className="w-6 h-6 text-white relative z-10 ml-0.5" />
          }
        </motion.button>
      </div>

      {/* Tooltip on first load */}
      {!hasInteracted && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-full right-0 mb-2 whitespace-nowrap text-xs text-white/70 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10"
        >
          🎵 Click to play ambient music
        </motion.div>
      )}
    </motion.div>
  );
}
