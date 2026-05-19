import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BriefcaseBusiness, Heart, Home, Sparkles, UserRound, X } from "lucide-react";

const chapters = [
  { title: "Birth & Beginning", icon: UserRound, text: "A personal story of beginnings, identity, roots, and the early experiences that shaped Abiud Monyoro Mong'are." },
  { title: "Education", icon: BookOpen, text: "A journey of learning, discipline, curiosity, and the moments that built both confidence and resilience." },
  { title: "Family", icon: Home, text: "The people, values, expectations, support, and silent lessons that shaped the person behind the name." },
  { title: "Regrets", icon: Heart, text: "The decisions, missed chances, hard lessons, and reflections that became part of the growth story." },
  { title: "Simping Chats", icon: Heart, text: "A private archive of desperate messages, emotional overexplaining, late-night paragraphs, unsent drafts, and painful conversations involving two women whose identities will remain concealed." },
  { title: "What Hurt the Most", icon: Sparkles, text: "The season that almost broke everything, what made him give up, and how the story slowly began to change." },
  { title: "Work & Purpose", icon: BriefcaseBusiness, text: "A professional path shaped by systems, people, pressure, problem-solving, and the will to keep showing up." },
];

export default function App() {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("abiud-auth") === "true");
  const [password, setPassword] = useState("");

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f9fc] px-6">
        <form onSubmit={(e) => { e.preventDefault(); if (password === "abiud2026") { localStorage.setItem("abiud-auth", "true"); setIsAuthenticated(true); } }} className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#064b96]">Private Story</p>
          <h1 className="mt-3 text-3xl font-bold">Abiud Monyoro Mong'are</h1>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="mt-6 w-full rounded-2xl border border-slate-300 px-4 py-3" />
          <button className="mt-6 w-full rounded-2xl bg-[#064b96] px-5 py-3 font-semibold text-white">Unlock Story</button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-900">
      <button onClick={() => { localStorage.removeItem("abiud-auth"); setIsAuthenticated(false); }} className="fixed right-5 top-5 z-50 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#064b96] shadow-md">Logout</button>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#002b5c] via-[#064b96] to-[#0b6bc2] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:px-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium">Abiud’s Story</p>
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Abiud Monyoro Mong'are</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">A personal digital story about beginnings, education, family, pain, lessons, work, and the quiet strength to rebuild.</p>
            <a href="#story" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ffd200] px-5 py-3 font-semibold text-[#002b5c]">Read the story <ArrowRight size={18} /></a>
          </motion.div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl">
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-900">
              <p className="text-sm font-semibold text-[#064b96]">Current Chapter</p>
              <h2 className="mt-3 text-3xl font-bold">Still becoming.</h2>
              <p className="mt-4 leading-7 text-slate-600">This page is intentionally built with placeholders so the real details can be added carefully, honestly, and beautifully.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#064b96]">The Overview</p>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl">A human story, not a perfect one.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          This is a living story. The details will change as the truth becomes clearer: where Abiud came from, what shaped him, what hurt him, what he regrets, and{" "}
          <span className="font-bold text-red-600">why he can't take it anymore.</span>
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3 md:px-10">
        {chapters.map((chapter) => {
          const Icon = chapter.icon;
          return (
            <div key={chapter.title} onClick={() => setSelectedChapter(chapter)} className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/40 bg-white/70 p-7 shadow-[0_10px_40px_rgba(2,6,23,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(2,6,23,0.15)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#064b96] to-[#0b6bc2] text-white shadow-lg shadow-blue-200 transition-transform duration-500 group-hover:scale-110"><Icon size={22} /></div>
              
<div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#ffd200]/10 blur-3xl transition-all duration-500 group-hover:bg-[#064b96]/10" /><div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#ffd200] via-[#064b96] to-[#00843d]" />

<h3 className="text-xl font-bold tracking-tight">{chapter.title}</h3>

              <p className="mt-3 leading-7 text-slate-600">{chapter.text}</p><p className="mt-5 text-sm font-bold text-[#064b96]">Click to read more →</p>
            </div>
          );
        })}
      </section>
    {selectedChapter && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-6 backdrop-blur-sm">
          <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white p-8 shadow-2xl">
            <button
              onClick={() => setSelectedChapter(null)}
              className="absolute right-5 top-5 rounded-full bg-slate-100 p-2 text-slate-700 hover:bg-slate-200"
            >
              <X size={20} />
            </button>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#064b96]">
              Story Chapter
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-950">
              {selectedChapter.title}
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {selectedChapter.text}
            </p>

            <div className="mt-8 rounded-3xl bg-[#f7f9fc] p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Notes to add later
              </h3>

              <ul className="mt-4 space-y-3 text-slate-600">
                <li>• Key people involved</li>
                <li>• Important dates and places</li>
                <li>• What actually happened</li>
                <li>• What it taught Abiud</li>
                <li>• What changed after that chapter</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
