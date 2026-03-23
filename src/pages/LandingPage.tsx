import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Navbar } from "@/components/Navbar";
import { Visualizer } from "@/components/Visualizer";
import { MusicPlayer } from "@/components/MusicPlayer";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TerminalShowcase } from "@/components/TerminalShowcase";
import { 
  Headphones, 
  ListMusic, 
  AudioWaveform, 
  FolderSync, 
  FileText, 
  Zap,
  ArrowRight,
  Bot,
  Mic2,
  Music,
  Disc,
  Music2,
  SlidersHorizontal,
  LayoutList,
  Settings2
} from "lucide-react";

const DISCORD_INVITE = "https://discord.com/oauth2/authorize?client_id=1245562269480517716&permissions=393079767976704&scope=bot%20applications.commands";
const FOUNDER_LINK = "https://discord.com/channels/@me/1442015786745991289";

export default function LandingPage() {
  const BASE_URL = import.meta.env.BASE_URL;

  const features = [
    {
      title: "High Quality Audio",
      desc: "Crystal clear 320kbps streaming with zero buffering or lag. Your ears will thank you.",
      icon: <Headphones className="w-8 h-8 text-primary" />,
      delay: 0.1
    },
    {
      title: "Smart Queue",
      desc: "Manage unlimited songs, shuffle, loop, and save your queues for later sessions.",
      icon: <ListMusic className="w-8 h-8 text-accent" />,
      delay: 0.2
    },
    {
      title: "Effects & Filters",
      desc: "Apply real-time effects like Bassboost, Nightcore, Vaporwave, and Reverb.",
      icon: <AudioWaveform className="w-8 h-8 text-primary" />,
      delay: 0.3
    },
    {
      title: "Import Playlists",
      desc: "Seamlessly import from Spotify, YouTube, SoundCloud, and Apple Music.",
      icon: <FolderSync className="w-8 h-8 text-accent" />,
      delay: 0.4
    },
    {
      title: "Synchronized Lyrics",
      desc: "Sing along with real-time lyrics that sync perfectly with the current playing track.",
      icon: <FileText className="w-8 h-8 text-primary" />,
      delay: 0.5
    },
    {
      title: "24/7 Uptime",
      desc: "Always online, always ready. Premium servers ensure Neon never misses a beat.",
      icon: <Zap className="w-8 h-8 text-accent" />,
      delay: 0.6
    }
  ];

  const steps = [
    { num: "01", title: "Add Bot", desc: "Invite Neon to your Discord server with one click.", icon: <Bot className="w-6 h-6" /> },
    { num: "02", title: "Join Voice", desc: "Hop into any voice channel with your friends.", icon: <Mic2 className="w-6 h-6" /> },
    { num: "03", title: "Play Music", desc: "Type /play and let the music take over.", icon: <Music className="w-6 h-6" /> }
  ];

  const commandCategories = [
    {
      title: "Music Selection",
      emoji: "🎵",
      icon: <Music2 className="w-5 h-5" />,
      color: "primary",
      commands: [
        { name: "play", desc: "Play a song or playlist from URL or search query" },
        { name: "playnext", desc: "Add a song to the front of the queue" },
        { name: "grab", desc: "Save the current song to your DMs" },
      ]
    },
    {
      title: "Player Controls",
      emoji: "🎛️",
      icon: <SlidersHorizontal className="w-5 h-5" />,
      color: "accent",
      commands: [
        { name: "pause", desc: "Pause the current track" },
        { name: "resume", desc: "Resume a paused track" },
        { name: "stop", desc: "Stop playback and clear the queue" },
        { name: "skip", desc: "Skip to the next song in queue" },
        { name: "skipto", desc: "Skip to a specific position in the queue" },
        { name: "jump", desc: "Jump to a timestamp in the current track" },
        { name: "seek", desc: "Seek to a specific time in the track" },
        { name: "volume", desc: "Adjust the playback volume (0–100)" },
        { name: "shuffle", desc: "Shuffle the current queue randomly" },
        { name: "loop", desc: "Loop the current track or entire queue" },
        { name: "nowplaying", desc: "Show info about the currently playing track" },
        { name: "filter", desc: "Apply audio filters like bassboost, nightcore, vaporwave" },
      ]
    },
    {
      title: "Queue Management",
      emoji: "📋",
      icon: <LayoutList className="w-5 h-5" />,
      color: "primary",
      commands: [
        { name: "queue", desc: "View the current song queue" },
        { name: "clearqueue", desc: "Clear all songs from the queue" },
        { name: "remove", desc: "Remove a specific song from the queue" },
        { name: "move", desc: "Move a song to a different position in queue" },
      ]
    },
    {
      title: "Information & Settings",
      emoji: "⚙️",
      icon: <Settings2 className="w-5 h-5" />,
      color: "accent",
      commands: [
        { name: "help", desc: "Display all available commands and usage" },
        { name: "ping", desc: "Check the bot's response latency" },
        { name: "stats", desc: "View bot statistics and performance data" },
        { name: "uptime", desc: "See how long the bot has been running" },
        { name: "support", desc: "Get a link to the support server" },
        { name: "invite", desc: "Get the bot invite link for your server" },
        { name: "shards", desc: "View information about active shards" },
        { name: "nodes", desc: "Show Lavalink node information" },
        { name: "prefix", desc: "Change the bot prefix for your server" },
        { name: "247", desc: "Toggle 24/7 mode to keep bot in voice channel" },
      ]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <MusicPlayer />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 z-[-1] opacity-30">
          <img 
            src={`${BASE_URL}images/hero-bg.png`} 
            alt="Deep space abstract background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-sm font-medium text-white/80 tracking-wide uppercase">Neon v3.0 is live</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 text-glow-primary mb-2"
          >
            NEON
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-6 tracking-widest"
          >
            MUSIC
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium"
          >
            The Ultimate Discord Music Experience. Elevate your server with crystal clear audio, endless filters, and immersive vibes.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
              Add to Discord
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#commands" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-center">
              View Commands
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-48 md:h-64 opacity-40 pointer-events-none">
          <Visualizer bars={typeof window !== 'undefined' && window.innerWidth > 768 ? 64 : 32} className="h-full w-full" />
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 border-y border-white/5 bg-black/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Servers", value: 500000, suffix: "+" },
              { label: "Songs Played", value: 10000000, suffix: "+" },
              { label: "Users", value: 1500000, suffix: "+" },
              { label: "Uptime", value: 99.9, suffix: "%" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 text-glow-accent">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-muted-foreground uppercase tracking-wider text-sm font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Perfection</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Everything you need to turn your Discord server into a virtual concert hall.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <TiltCard key={i} delay={feature.delay}>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 box-glow-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Commands Showcase - Terminal */}
      <section className="py-20 relative z-10 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
                Command with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Absolute Power</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Neon Music uses modern Discord slash commands for a seamless, interactive experience. Autocomplete, buttons, and detailed menus make controlling the music effortless.
              </p>
              <ul className="space-y-4 mb-8">
                {['Intuitive slash commands', 'Interactive player buttons', 'Rich embeds with album art'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#commands" className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2">
                View all commands <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <TerminalShowcase />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Commands Reference Section */}
      <section id="commands" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wider uppercase mb-4"
            >
              <Disc className="w-3.5 h-3.5 animate-spin-slow" />
              Premium Commands
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              NEON MUSIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">HELP</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Welcome to NEON MUSIC! Here is a categorized list of all available slash commands to enhance your listening experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commandCategories.map((category, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="glass-panel rounded-2xl overflow-hidden"
              >
                {/* Category Header */}
                <div className={`px-6 py-4 border-b border-white/5 flex items-center gap-3 ${category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                  <span className="text-2xl">{category.emoji}</span>
                  <div className={`p-1.5 rounded-lg ${category.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white tracking-wide">{category.title}</h3>
                  <span className="ml-auto text-xs font-bold text-muted-foreground bg-white/5 px-2 py-0.5 rounded-full">
                    {category.commands.length} cmds
                  </span>
                </div>

                {/* Commands List */}
                <div className="p-4 space-y-1">
                  {category.commands.map((cmd, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.05 + i * 0.04 }}
                      className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <span className={`font-mono font-bold text-sm mt-0.5 shrink-0 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                        /{cmd.name}
                      </span>
                      <span className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                        {cmd.desc}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add to Discord CTA under commands */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] hover:-translate-y-1 transition-all duration-300 group">
              Add NEON MUSIC to Discord
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 relative z-10 bg-black/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-white">Three Steps to <span className="text-primary">Neon</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/4 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 z-0" />
            
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center text-accent mb-6 box-glow-primary relative group">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    {step.num}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section id="cta" className="py-32 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-12 md:p-20 rounded-3xl border border-primary/30 box-glow-primary relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Ready to Upgrade Your Server?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Join thousands of servers enjoying the premium Neon Music experience. Free forever.
            </p>
            <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="px-10 py-5 rounded-xl font-bold text-xl bg-white text-background hover:bg-primary hover:text-white hover:shadow-[0_0_50px_hsl(var(--primary))] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto inline-block mb-10">
              Add NEON MUSIC to Discord
            </a>

            <div className="relative pt-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-8">Trusted by top communities</p>
              <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
                {[
                  "https://images-ext-1.discordapp.net/external/PH4vjl7834sW0aEq1qin26cb2goPXfWxmQXP9TTSuXE/https/cdn.discordapp.com/icons/1483859974659506208/82f1d92b89d8ad7d5807d08c1ed957d8.webp?format=webp&width=160&height=160",
                  "https://images-ext-1.discordapp.net/external/K_OryAtSLBQ1XP1S8IBlvvjhdSLpZSoMsGRSQFSym64/https/cdn.discordapp.com/icons/1018058595016912908/81c46d47808848d9e7d159932d798422.webp?format=webp&width=160&height=160",
                  "https://images-ext-1.discordapp.net/external/Z0wNXf_h1_ehFHlaohFD8V0CBCZCUZrCjBUylEBvf0I/https/cdn.discordapp.com/icons/1127451377547870399/858290902f422d9af5a4db4020dac796.webp?format=webp&width=160&height=160"
                ].map((url, i) => (
                  <a 
                    key={i}
                    href={DISCORD_INVITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative h-16 md:h-20 w-16 md:w-20 rounded-2xl bg-white/5 border border-white/10 p-0.5 overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                      <img 
                        src={url} 
                        alt={`Community Logo ${i + 1}`} 
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0c11] py-12 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
            <div className="flex items-center gap-2">
              <Disc className="w-6 h-6 text-primary animate-spin-slow" />
              <div>
                <span className="font-display font-bold tracking-wider text-xl text-white">NEON MUSIC</span>
                <p className="text-muted-foreground text-xs mt-0.5">Premium Discord Music Bot</p>
              </div>
            </div>
            
            <div className="flex justify-center gap-6 flex-wrap">
              <a href="#commands" className="text-muted-foreground hover:text-primary transition-colors text-sm">Commands</a>
              <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Invite Bot</a>
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors text-sm">Features</a>
              <a href="#stats" className="text-muted-foreground hover:text-primary transition-colors text-sm">Stats</a>
            </div>

            <div className="text-right">
              <p className="text-muted-foreground text-xs mb-1">Created with ❤️ by</p>
              <a
                href={FOUNDER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-bold text-lg font-display tracking-wider hover:opacity-80 transition-opacity"
              >
                <span className="text-primary">✦</span> RIZZ <span className="text-accent">✦</span>
              </a>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 text-center">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Neon Music Bot. Not affiliated with Discord, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
