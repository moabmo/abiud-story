import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BriefcaseBusiness, Heart, Home, Sparkles, UserRound, X } from "lucide-react";

const chapters = [
  { title: "Birth & Beginning", icon: UserRound, text: "A personal story of beginnings, identity, roots, and early experiences that shaped Abiud Monyoro Mong'are." },
  { title: "Education", icon: BookOpen, text: "Learning, discipline, curiosity, confidence, pressure, and resilience." },
  { title: "Family", icon: Home, text: "The people, values, expectations, support, and silent lessons that shaped the person behind the name." },
  { title: "Regrets", icon: Heart, text: "Missed chances, hard lessons, and reflections that became part of growth." },
  { title: "Simping Chats", icon: Heart, text: "A private archive of emotional messages, overexplaining, late-night paragraphs, unsent drafts, and painful conversations involving Woman 1 and Woman 2." },
  { title: "What Hurt the Most", icon: Sparkles, text: "The season that almost broke everything, what made him give up, and how the story slowly began to change." },
  { title: "Work & Purpose", icon: BriefcaseBusiness, text: "Systems, people, pressure, problem-solving, and the will to keep showing up." },
];

const simpingChats = [
  ["Abiud", "Please talk to me.", "me"],
  ["Abiud", "I honestly miss you so much.", "me"],
  ["Abiud", "I know I have sent many messages, but I just need one honest reply.", "me"],
  ["Woman 1", "Okay.", "them"],
  ["Abiud", "That okay has hurt more than you know.", "me"],
  ["Abiud", "I keep checking my phone hoping you have replied properly.", "me"],
  ["Abiud", "I know I am overdoing it, but my heart is not calm.", "me"],
  ["Abiud", "I care about you more than I can explain.", "me"],
  ["Woman 1", "I’m busy.", "them"],
  ["Abiud", "I understand, but even one kind message would mean a lot.", "me"],
  ["Abiud", "I wait for your replies more than I should.", "me"],
  ["Abiud", "I keep rereading our old chats and wondering what changed.", "me"],
  ["Abiud", "I hate that I still care this much.", "me"],
  ["Woman 1", "You’re overthinking.", "them"],
  ["Abiud", "Maybe I am, but I did not become like this from nowhere.", "me"],
  ["Abiud", "I just wanted to feel important to you.", "me"],
  ["Abiud", "I love you more than I should honestly.", "me"],
  ["Abiud", "I don’t even know why I keep begging for bare minimum attention.", "me"],
  ["Woman 1", "Sleep.", "them"],
  ["Abiud", "I wish it was that easy.", "me"],
  ["Abiud", "I typed a whole paragraph then deleted it because I didn’t want to look desperate.", "me"],
  ["Abiud", "But here I am still typing anyway.", "me"],
  ["Abiud", "I just wanted you to choose me without me begging.", "me"],
  ["Abiud", "I wanted to be loved loudly, not tolerated silently.", "me"],
  ["Woman 2", "Ok.", "them"],
  ["Abiud", "That ok has finished me today.", "me"],
  ["Abiud", "I am tired of pretending your silence does not affect me.", "me"],
  ["Abiud", "I gave you soft parts of me and now I feel foolish.", "me"],
  ["Abiud", "I kept explaining myself to someone who had already stopped listening.", "me"],
  ["Abiud", "I am not angry. I am just tired.", "me"],
  ["Abiud", "I miss the version of you that made me feel safe.", "me"],
  ["Abiud", "I wish I could stop caring on command.", "me"],
  ["Abiud", "I know this is too much, but it is what I felt.", "me"],
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
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="mt-6 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#064b96]" />
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
          <span className="font-bold text-red-600">why he is emotionally exhausted.</span>
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 pb-24 md:grid-cols-2 lg:grid-cols-3 md:px-10">
        {chapters.map((chapter) => {
          const Icon = chapter.icon;
          return (
            <div key={chapter.title} onClick={() => setSelectedChapter(chapter)} className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/40 bg-white/70 p-7 shadow-[0_10px_40px_rgba(2,6,23,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(2,6,23,0.15)]">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#ffd200] via-[#064b96] to-[#00843d]" />
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#ffd200]/10 blur-3xl transition-all duration-500 group-hover:bg-[#064b96]/10" />
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#064b96] to-[#0b6bc2] text-white shadow-lg shadow-blue-200 transition-transform duration-500 group-hover:scale-110">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-bold tracking-tight">{chapter.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{chapter.text}</p>
              <p className="mt-5 text-sm font-bold text-[#064b96]">Click to read more →</p>
            </div>
          );
        })}
      </section>

      {selectedChapter && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-6 backdrop-blur-sm">
          <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white p-8 shadow-2xl">
            <button onClick={() => setSelectedChapter(null)} className="absolute right-5 top-5 rounded-full bg-slate-100 p-2 text-slate-700 hover:bg-slate-200"><X size={20} /></button>
            <h2 className="text-4xl font-bold">{selectedChapter.title}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{selectedChapter.text}</p>

            {selectedChapter.title === "Simping Chats" && (
              <div className="mt-8 space-y-3">
                {simpingChats.map(([sender, message, type], index) => (
                  <div key={index} className={type === "me" ? "ml-auto max-w-[85%] rounded-3xl rounded-br-md bg-[#064b96] px-4 py-3 text-white" : "mr-auto max-w-[75%] rounded-3xl rounded-bl-md bg-slate-100 px-4 py-3 text-slate-700"}>
                    <p className={type === "me" ? "text-xs font-bold text-white/70" : "text-xs font-bold text-slate-400"}>{sender}</p>
                    <p>{message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
