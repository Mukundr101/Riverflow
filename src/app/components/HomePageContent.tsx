"use client";

import { motion } from "framer-motion";
import Particles from "@/components/magicui/particles";
import Meteors from "@/components/magicui/meteors";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import NumberTicker from "@/components/magicui/number-ticker";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { MagicCard } from "@/components/magicui/magic-card";
import Link from "next/link";

interface HomePageContentProps {
  latestQuestions: React.ReactNode;
  topContributers: React.ReactNode;
}

export default function HomePageContent({ latestQuestions, topContributers }: HomePageContentProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Background atmospheric effects */}
      <div className="fixed inset-0 -z-10">
        <Particles
          className="opacity-30"
          quantity={60}
          color="#06b6d4"
          size={1.5}
          staticity={80}
          ease={80}
        />
        <AnimatedGridPattern
          className="opacity-10"
          numSquares={20}
          maxOpacity={0.3}
          duration={8}
          repeatDelay={2}
        />
      </div>

      {/* Hero Section with more breathing room */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4">
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-50">
          <Meteors number={15} />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center py-20"
          >
            <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-500/20 mb-6">
              Empower your dev community
            </span>
            <h1 className="max-w-4xl mx-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
              Ask better questions, get faster answers, and grow your coding confidence.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-8 text-slate-300">
              RiverFlow brings developers together with focused Q&A, curated knowledge, and a modern collaboration experience built for real-world engineering.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/questions/ask"
                className="w-full sm:w-auto"
              >
                <ShimmerButton className="w-full px-8 py-4 text-base font-semibold">
                  <span className="relative z-10">Ask Your First Question</span>
                </ShimmerButton>
              </Link>
              <Link
                href="/questions"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 shrink-0"
              >
                Explore Questions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Animated counters */}
      <section className="py-24 px-4 relative">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {[
              { label: "Questions Asked", value: 12400, suffix: "+", delay: 0 },
              { label: "Answers Given", value: 38200, suffix: "+", delay: 0.1 },
              { label: "Active Developers", value: 8900, suffix: "+", delay: 0.2 },
              { label: "Solutions Found", value: 95, suffix: "%", delay: 0.3 },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stat.delay + 0.2, duration: 0.6 }}
                className="text-center group"
              >
                <div className="mb-4 flex items-end justify-center gap-1">
                  <NumberTicker
                    value={stat.value}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
                    delay={stat.delay}
                  />
                  <span className="text-cyan-400 font-bold text-3xl md:text-4xl mb-2">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-slate-400 text-sm md:text-base font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
                <motion.div
                  className="mt-3 h-px w-0 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"
                  whileInView={{ width: "60px" }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay + 0.5, duration: 0.5 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content with generous spacing */}
      <main className="mx-auto max-w-7xl px-4 pb-32 pt-8 sm:px-6 lg:px-8">
        {/* Features Section */}
        <section className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-500/20 mb-6">
              Core Features
            </span>
            <h2 className="max-w-3xl mx-auto text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Everything you need for modern Q&A
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-lg leading-8 text-slate-300">
              Built for developers who value clarity, speed, and community-driven knowledge.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                icon: "💬",
                title: "Rich Discussions",
                description: "Threaded comments, mentions, and real-time updates keep conversations flowing naturally.",
                features: ["Markdown support", "Code syntax highlighting", "Image attachments"],
              },
              {
                icon: "🏷️",
                title: "Smart Tagging",
                description: "Hierarchical tags with synonyms and watch lists help you find exactly what you need.",
                features: ["Auto-suggest tags", "Tag hierarchies", "Watch/follow tags"],
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Edge-optimized with Appwrite backend for sub-100ms response times globally.",
                features: ["Global CDN", "Edge functions", "Optimistic UI"],
              },
              {
                icon: "🎯",
                title: "Reputation System",
                description: "Earn trust through quality contributions. Unlock privileges as you grow.",
                features: ["Badges & achievements", "Privilege tiers", "Peer recognition"],
              },
              {
                icon: "🔍",
                title: "Powerful Search",
                description: "Full-text search with filters, operators, and AI-powered semantic matching.",
                features: ["Advanced filters", "Saved searches", "Search history"],
              },
              {
                icon: "🌙",
                title: "Beautiful Themes",
                description: "Multiple curated themes with custom CSS variables for personalization.",
                features: ["Dark/light modes", "Custom accents", "Accessibility first"],
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <MagicCard
                  className="h-full p-8 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
                  size={500}
                  spotlightColor="rgba(6,182,212,0.08)"
                  borderColor="rgba(6,182,212,0.2)"
                >
                  <div className="relative z-10 space-y-6">
                    <span className="text-4xl md:text-5xl block">{feature.icon}</span>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-7">
                      {feature.description}
                    </p>
                    <ul className="space-y-2 pt-4 border-t border-white/5">
                      {feature.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Interactive CTA Section */}
        <section className="mt-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[3rem] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
            <div className="absolute inset-0">
              <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.4}
                duration={6}
                repeatDelay={1}
                className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
              />
            </div>
            <Particles
              className="absolute inset-0 opacity-40"
              quantity={40}
              color="#06b6d4"
              size={2}
              staticity={60}
            />
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 lg:py-32 text-center">
              <h2 className="max-w-3xl mx-auto text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                Ready to join the community?
              </h2>
              <p className="mt-6 max-w-xl mx-auto text-lg leading-8 text-slate-300">
                Start asking questions, sharing knowledge, and building your reputation today.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/questions/ask" className="w-full sm:w-auto">
                  <ShimmerButton className="w-full px-8 py-4 text-base font-semibold">
                    <span className="relative z-10">Ask Your First Question</span>
                  </ShimmerButton>
                </Link>
                <Link
                  href="/questions"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 shrink-0"
                >
                  Browse Questions
                </Link>
              </div>
              <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Free forever for individuals
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  Cancel anytime
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Community Activity Section */}
        <section className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-500/20 mb-4">
                Live Activity
              </span>
              <h2 className="max-w-2xl text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Recent questions from the community
              </h2>
            </div>
            <Link
              href="/questions"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-100 shrink-0"
            >
              View all questions
              <svg
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {latestQuestions}
              </motion.div>
            </div>

            {/* Top Contributors Sidebar */}
            <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Active contributors</p>
                      <h2 className="mt-3 text-2xl font-semibold text-white">Top contributors</h2>
                    </div>
                    <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">Live</span>
                  </div>
                  <div className="mt-6">
                    {topContributers}
                  </div>
                </div>
              </motion.div>
            </aside>
          </div>
        </section>
      </main>

      {/* Footer spacing */}
      <div className="h-20 lg:h-32" />
    </div>
  );
}