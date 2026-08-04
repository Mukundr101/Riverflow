import HeroSection from "./components/HeroSection";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";
import Link from "next/link";

const Page = async () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroSection />

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-10">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
              <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-500/20">
                Empower your dev community
              </span>
              <div className="mt-6 space-y-6">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Ask better questions, get faster answers, and grow your coding confidence.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  RiverFlow brings developers together with focused Q&A, curated knowledge, and a modern collaboration experience built for real-world engineering.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link href="/questions" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                    Explore questions
                  </Link>
                  <Link href="/questions/ask" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-100">
                    Ask your first question
                  </Link>
                </div>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Fast answers", value: "Real community help", description: "Connect instantly to active developer discussions." },
                  { label: "Smart tagging", value: "Search friendly", description: "Find the right answers with clear tags and content." },
                  { label: "Trusted authors", value: "Reputation driven", description: "Reward great contributors and surface useful posts." },
                ].map(item => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{item.label}</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{item.value}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Built for developers</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Community-first Q&A that feels modern</h2>
                <p className="mt-4 text-slate-300">
                  Submit questions, add tags, upload images, and discover answers from people who’ve solved problems like yours.
                </p>
                <div className="mt-8 grid gap-4">
                  {[
                    { title: "Write a clear question", description: "Create searchable, high-value posts with tags and attachments." },
                    { title: "Explore trending topics", description: "Browse the latest developer questions in one place." },
                  ].map(item => (
                    <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-slate-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Why RiverFlow</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">A home for thoughtful answers</h2>
                <div className="mt-8 space-y-4">
                  {[
                    "Less noise, more signal — every question is tagged and searchable.",
                    "Beautiful, responsive UI with fast navigation and rich previews.",
                    "Reward experts and learn from high-quality answers.",
                  ].map(text => (
                    <p key={text} className="text-slate-400">{text}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Active contributors</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Top contributors</h2>
                </div>
                <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">Live</span>
              </div>
              <div className="mt-6">
                <TopContributers />
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Quick start</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Get involved in minutes</h2>
              <div className="mt-6 space-y-4 text-slate-400">
                <p>Browse existing questions and upvote helpful answers.</p>
                <p>Ask your own question with tags, content, and optional image upload.</p>
                <p>Follow users and build reputation through quality contributions.</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Latest activity</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Recent questions from the community</h2>
            </div>
            <Link href="/questions" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-100">
              View all questions
            </Link>
          </div>
          <div className="mt-8">
            <LatestQuestions />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Page;
