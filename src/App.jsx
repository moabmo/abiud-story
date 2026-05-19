import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BriefcaseBusiness, Heart, Home, Sparkles, UserRound } from "lucide-react";

const chapters = [
  {
    title: "Birth & Beginning",
    icon: UserRound,
    text: "A personal story of beginnings, identity, roots, and the early experiences that shaped Abiud Monyoro Mong'are.",
  },
  {
    title: "Education",
    icon: BookOpen,
    text: "A journey of learning, discipline, curiosity, and the moments that built both confidence and resilience.",
  },
  {
    title: "Family",
    icon: Home,
    text: "The people, values, expectations, support, and silent lessons that shaped the person behind the name.",
  },
  {
    title: "Regrets",
    icon: Heart,
    text: "The decisions, missed chances, hard lessons, and reflections that became part of the growth story.",
  },

  {
    title: "Simping Era",
    icon: Heart,
    text: "The chapter of giving too much, caring too deeply, overexplaining, chasing validation, and learning difficult lessons about attachment, boundaries, and self-worth.",
  },


  {
    title: "Simping Chats",
    icon: Heart,
    text: "A private archive of desperate messages, emotional overexplaining, late-night paragraphs, unsent drafts, and painful conversations. It reflects moments of vulnerability, attachment, heartbreak, and emotional exhaustion caused by experiences involving two women whose identities will remain concealed. <span style={{color: '#dc2626', fontWeight: 'bold'}}>Why he feels like he cannot take it anymore.</span>",
  },

  {
    title: "What Hurt the Most",
    icon: Sparkles,
    text: "The season that almost broke everything, what made him give up, and how the story slowly began to change.",
  },
  {
    title: "Work & Purpose",
    icon: BriefcaseBusiness,
    text: "A professional path shaped by systems, people, pressure, problem-solving, and the will to keep showing up.",
  },
];

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("abiud-auth") === "true"
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (password === "abiud2026") {
      localStorage.setItem("abiud-auth", "true");
      setIsAuthenticated(true);
      setError("");
      return;
    }

    setError("Wrong password. Try again.");
  }

  function handleLogout() {
    localStorage.removeItem("abiud-auth");
    setIsAuthenticated(false);
    setPassword("");
  }

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f9fc] px-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#064b96]">
            Private Story
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Abiud Monyoro Mong&apos;are
          </h1>

          <p className="mt-3 text-slate-600">
            Enter password to continue.
          </p>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mt-6 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#064b96]"
          />

          {error && (
            <p className="mt-3 text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-[#064b96] px-5 py-3 font-semibold text-white transition hover:bg-[#002b5c]"
          >
            Unlock Story
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <button
        onClick={handleLogout}
        className="fixed right-5 top-5 z-50 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#064b96] shadow-md backdrop-blur hover:bg-white"
      >
        Logout
      </button>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#002b5c] via-[#064b96] to-[#0b6bc2] text-white">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#ffd200]/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#00843d]/25 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              Abiud’s Story
            </p>

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              Abiud Monyoro Mong'are
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              A personal digital story about beginnings, education, family,
              pain, lessons, work, and the quiet strength to rebuild.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#story"
                className="inline-flex items-center gap-2 rounded-full bg-[#ffd200] px-5 py-3 font-semibold text-[#002b5c] shadow-lg transition hover:scale-[1.02]"
              >
                Read the story <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-6 text-slate-900">
                <p className="text-sm font-semibold text-[#064b96]">
                  Current Chapter
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                  Still becoming.
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  This page is intentionally built with placeholders so the
                  real details can be added carefully, honestly, and beautifully.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#064b96]">
            The Overview
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            A human story, not a perfect one.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            This is a living story. The details will change as the truth becomes clearer:
            where Abiud came from, what shaped him, what hurt him, what he regrets,
            and why he cant take it anymore.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter, index) => {
            const Icon = chapter.icon;

            return (
              <motion.div
                key={chapter.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <div className="h-full rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#064b96] text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-bold">
                    {chapter.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {chapter.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        Built for Abiud Monyoro Mong'are — a story still being written.
      </footer>
    </main>
  );
}
