"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, Video, ArrowRight, PlayCircle, CheckCircle, Sparkles, Users, Clock } from "lucide-react";
import { useState, useEffect } from "react";

/* ─── data ───────────────────────────────────────────── */
const FREE_CLASSES = [
  { title: "উচ্চতর গণিত — অধ্যায় ১: সেট ও ফাংশন", duration: "55 min", category: "গণিত",     students: "3.2k" },
  { title: "পদার্থবিজ্ঞান — নিউটনের গতিসূত্র",      duration: "1 hr",   category: "পদার্থ",   students: "2.7k" },
  { title: "ইংরেজি — Paragraph & Composition",       duration: "45 min", category: "English",   students: "4.1k" },
];

const COURSES = [
  {
    title: "SSC সম্পূর্ণ বিজ্ঞান প্যাকেজ",
    desc:  "পদার্থ, রসায়ন, জীববিজ্ঞান — তিনটি বিষয় একসাথে। SSC পরীক্ষায় A+ পাওয়ার জন্য সম্পূর্ণ গাইড।",
    price: "৳2,499",
    tag:   "সবচেয়ে জনপ্রিয়",
    features: [
      "সব অধ্যায়ের ভিডিও লেকচার",
      "অধ্যায়ভিত্তিক MCQ ও CQ প্র্যাকটিস",
      "লাইভ ডাউট সেশন প্রতি সপ্তাহে",
      "PDF নোট ও সৃজনশীল প্রশ্নের সমাধান",
    ],
  },
  {
    title: "গণিত মাস্টারক্লাস (শ্রেণি ৯–১০)",
    desc:  "বীজগণিত, জ্যামিতি, ত্রিকোণমিতি — ভয় দূর করে গণিতকে ভালোবাসতে শেখো।",
    price: "৳1,499",
    tag:   null,
    features: [
      "১০০+ সমাধান করা উদাহরণ",
      "বোর্ড পরীক্ষার প্রশ্ন বিশ্লেষণ",
      "সাপ্তাহিক মডেল টেস্ট",
      "সার্টিফিকেট অব কমপ্লিশন",
    ],
  },
];

const SUBJECTS = [
  { icon: "📐", label: "গণিত" },
  { icon: "⚛️", label: "পদার্থবিজ্ঞান" },
  { icon: "🧪", label: "রসায়ন" },
  { icon: "🌿", label: "জীববিজ্ঞান" },
  { icon: "📖", label: "বাংলা" },
  { icon: "🔤", label: "English" },
];

const STATS = [
  { value: "15k+", label: "শিক্ষার্থী" },
  { value: "98%",  label: "সন্তুষ্টির হার" },
  { value: "4.9★", label: "গড় রেটিং" },
];

/* ─── component ──────────────────────────────────────── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen text-[var(--text-primary)]"
      style={{ background: "var(--background)", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── NAV ──────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(12,12,14,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--accent)" }}>
              <BookOpen size={16} color="#fff" />
            </div>
            <span className="font-display text-lg tracking-tight">ogroni</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
            {[["বিষয়সমূহ", "#subjects"], ["ফ্রি ক্লাস", "#free-classes"], ["কোর্স", "#programs"]].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onMouseEnter={() => setActiveNav(href)}
                onMouseLeave={() => setActiveNav("")}
                className="relative py-1 transition-colors duration-200"
                style={{ color: activeNav === href ? "var(--text-primary)" : "var(--text-secondary)" }}
              >
                {label}
                <span
                  className="absolute bottom-0 left-0 h-px w-full transition-transform duration-300 origin-left"
                  style={{ background: "var(--accent)", transform: activeNav === href ? "scaleX(1)" : "scaleX(0)" }}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:block text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
            >
              লগ ইন
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
              style={{ background: "var(--text-primary)", color: "var(--background)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              শুরু করো
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative pt-24 pb-28 px-6 overflow-hidden dot-grid">
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            aria-hidden
          >
            <div style={{
              width: 700, height: 700, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(91,106,247,0.13) 0%, transparent 70%)",
            }} />
          </div>

          <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 animate-fade-up"
              style={{ border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-secondary)" }}
            >
              <Sparkles size={12} style={{ color: "var(--accent)" }} />
              নবম–দশম শ্রেণির সেরা অনলাইন প্ল্যাটফর্ম
            </div>

            {/* Teacher avatar */}
            <div className="relative mb-10 animate-float">
              {[1, 2].map(n => (
                <span
                  key={n}
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "1px solid var(--accent-glow)",
                    animation: `pulse-ring 2.4s ease-out ${n * 0.8}s infinite`,
                  }}
                />
              ))}
              <div
                className="relative w-36 h-36 rounded-full overflow-hidden"
                style={{ border: "1.5px solid var(--border-hover)", boxShadow: "0 0 60px var(--accent-glow)" }}
              >
                <Image src="/nazrul.png" alt="Nazrul Sir" fill className="object-cover" priority />
              </div>
            </div>

            {/* Badge under avatar */}
            <div
              className="flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-8"
              style={{ background: "var(--surface-2)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
            >
              <span style={{ color: "var(--accent)" }}>●</span> নজরুল স্যার — ১৫+ বছরের অভিজ্ঞতা
            </div>

            {/* Headline */}
            <h1
              className="font-display text-5xl md:text-7xl leading-[1.08] tracking-tight mb-6 animate-fade-up delay-100"
              style={{ maxWidth: 820 }}
            >
              SSC–তে A+{" "}
              <em className="text-shimmer not-italic">পাওয়াটা এখন সহজ।</em>
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed mb-10 animate-fade-up delay-200"
              style={{ color: "var(--text-secondary)", maxWidth: 520 }}
            >
              নবম–দশম শ্রেণির সকল বিষয় — স্পষ্ট ভিডিও লেকচার, বোর্ড প্রশ্ন বিশ্লেষণ ও লাইভ ডাউট সেশন।
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center animate-fade-up delay-300">
              <a
                href="#programs"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{ background: "var(--accent)", color: "#fff", boxShadow: "0 0 30px var(--accent-glow)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px var(--accent-glow)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px var(--accent-glow)"; }}
              >
                কোর্স দেখো <ArrowRight size={16} />
              </a>
              <a
                href="#free-classes"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{ border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text-primary)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
              >
                <PlayCircle size={16} /> ফ্রি ক্লাস দেখো
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 sm:gap-12 animate-fade-up delay-400">
              {STATS.map(s => (
                <div key={s.label} className="flex flex-col items-center gap-0.5">
                  <span className="font-display text-2xl">{s.value}</span>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ height: 1, background: "var(--border)" }} />

        {/* ── SUBJECTS ─────────────────────────────────────── */}
        <section id="subjects" className="py-16 px-6" style={{ background: "var(--surface)" }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-xs font-semibold uppercase tracking-widest mb-10" style={{ color: "var(--text-muted)" }}>
              যে বিষয়গুলো পড়ানো হয়
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {SUBJECTS.map((s) => (
                <div
                  key={s.label}
                  className="card-hover flex flex-col items-center gap-3 py-6 px-4 rounded-2xl cursor-pointer"
                  style={{ border: "1px solid var(--border)", background: "var(--surface-2)" }}
                >
                  <span className="text-3xl">{s.icon}</span>
                  <span className="text-xs font-medium text-center" style={{ color: "var(--text-secondary)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ height: 1, background: "var(--border)" }} />

        {/* ── FREE CLASSES ─────────────────────────────────── */}
        <section id="free-classes" className="py-24 px-6" style={{ background: "var(--background)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div style={{ maxWidth: 480 }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>ফ্রি কন্টেন্ট</p>
                <h2 className="font-display text-3xl md:text-4xl leading-tight">
                  আজই শুরু করো,<br />একদম বিনামূল্যে।
                </h2>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)", maxWidth: 280 }}>
                ভর্তির আগেই আমাদের পড়ানোর স্টাইল দেখো। শত শত ঘণ্টার ফ্রি কন্টেন্ট।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FREE_CLASSES.map((c, i) => (
                <div
                  key={i}
                  className="group card-hover rounded-2xl overflow-hidden cursor-pointer"
                  style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
                >
                  <div
                    className="aspect-video flex items-center justify-center relative overflow-hidden"
                    style={{ background: "var(--surface-2)" }}
                  >
                    <div className="absolute inset-0 dot-grid opacity-50" />
                    <div
                      className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ background: "var(--accent-soft)", border: "1px solid var(--accent)" }}
                    >
                      <PlayCircle size={22} style={{ color: "var(--accent)" }} />
                    </div>
                    <div
                      className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
                      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", color: "var(--text-secondary)" }}
                    >
                      <Clock size={11} />{c.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                        style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                      >
                        {c.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
                        <Users size={11} />{c.students}
                      </span>
                    </div>
                    <h3 className="font-medium leading-snug text-sm" style={{ color: "var(--text-primary)" }}>{c.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ height: 1, background: "var(--border)" }} />

        {/* ── COURSES ──────────────────────────────────────── */}
        <section id="programs" className="py-24 px-6" style={{ background: "var(--surface)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" style={{ maxWidth: 560, margin: "0 auto 64px" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>প্রিমিয়াম কোর্স</p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
                গভীরে পড়ো। বোর্ডে জ্বলো।
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                বোর্ড পরীক্ষার কথা মাথায় রেখে তৈরি কোর্স — শুধু ভিডিও নয়, পুরো প্রস্তুতি।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COURSES.map((c, i) => (
                <div
                  key={i}
                  className="card-hover relative flex flex-col p-8 rounded-2xl"
                  style={{
                    border: i === 0 ? "1px solid rgba(91,106,247,0.35)" : "1px solid var(--border)",
                    background: i === 0
                      ? "linear-gradient(135deg, var(--surface-2) 0%, rgba(91,106,247,0.07) 100%)"
                      : "var(--surface-2)",
                  }}
                >
                  {c.tag && (
                    <div
                      className="absolute -top-3.5 left-8 text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: "var(--accent)", color: "#fff" }}
                    >
                      {c.tag}
                    </div>
                  )}
                  <h3 className="font-display text-2xl mb-3">{c.title}</h3>
                  <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: "var(--text-secondary)" }}>{c.desc}</p>

                  <ul className="space-y-2.5 mb-8">
                    {c.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                        <CheckCircle size={15} style={{ color: "var(--accent)", flexShrink: 0 }} />{f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-6" style={{ borderTop: "1px solid var(--border)" }}>
                    <div>
                      <span className="font-display text-3xl">{c.price}</span>
                      <span className="text-xs ml-1" style={{ color: "var(--text-muted)" }}>এককালীন</span>
                    </div>
                    <button
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                      style={
                        i === 0
                          ? { background: "var(--accent)", color: "#fff", boxShadow: "0 4px 20px var(--accent-glow)" }
                          : { border: "1px solid var(--border)", background: "transparent", color: "var(--text-primary)" }
                      }
                      onMouseEnter={e => {
                        if (i === 0) (e.currentTarget as HTMLElement).style.opacity = "0.85";
                        else (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                      }}
                      onMouseLeave={e => {
                        if (i === 0) (e.currentTarget as HTMLElement).style.opacity = "1";
                        else (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      }}
                    >
                      ভর্তি হও <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ───────────────────────────────────── */}
        <section className="py-20 px-6" style={{ background: "var(--background)", borderTop: "1px solid var(--border)" }}>
          <div
            className="max-w-3xl mx-auto text-center rounded-2xl py-16 px-8 relative overflow-hidden"
            style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse at 50% 120%, rgba(91,106,247,0.15) 0%, transparent 70%)" }}
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
                প্রস্তুত?
              </p>
              <h2 className="font-display text-3xl md:text-4xl mb-5">
                তোমার SSC যাত্রা শুরু হোক আজ থেকেই।
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                ফ্রি ক্লাস, বিশেষজ্ঞ শিক্ষক ও হাজারো শিক্ষার্থীর কমিউনিটি — সবই এক জায়গায়।
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{ background: "var(--text-primary)", color: "var(--background)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                ফ্রি অ্যাকাউন্ট খোলো <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="py-8 px-6" style={{ borderTop: "1px solid var(--border)", background: "var(--background)" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "var(--accent)" }}>
              <BookOpen size={12} color="#fff" />
            </div>
            <span className="font-display text-sm" style={{ color: "var(--text-secondary)" }}>ogroni</span>
          </div>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Ogroni. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center gap-6 text-xs" style={{ color: "var(--text-muted)" }}>
            <Link href="#" className="hover:text-[var(--text-secondary)] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[var(--text-secondary)] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
