import Link from "next/link";
import Image from "next/image";
import { BookOpen, CheckCircle, Video, PlayCircle, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-900 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight lowercase">agrani</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="#programs" className="hover:text-blue-500 transition-colors">Programs</Link>
            <Link href="#free-classes" className="hover:text-blue-500 transition-colors">Free Classes</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-blue-500 transition-colors hidden sm:block">
              Log In
            </Link>
            <Link href="/signup" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-all">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
            
            {/* Floating Teacher Image */}
            <div className="relative mb-12 flex flex-col items-center animate-[bounce_4s_ease-in-out_infinite]">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-b from-blue-600/20 to-transparent p-1">
                <Image 
                  src="/nazrul.png" 
                  alt="Nazrul Sir" 
                  fill
                  className="object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                />
              </div>
              <p className="mt-4 text-xl font-medium tracking-wide text-zinc-300">nazrul sir</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-4xl">
              Learn skills, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">master your future.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
              Join thousands of students learning in-demand skills from an industry expert. Enroll in premium courses or access free live classes to kickstart your journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-full font-medium text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/50">
                Enroll Now <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-white rounded-full font-medium border border-zinc-800 hover:border-zinc-700 transition-all">
                <PlayCircle className="w-5 h-5" /> Watch Free Classes
              </button>
            </div>
          </div>
        </section>

        {/* Free Classes Section */}
        <section id="free-classes" className="py-20 px-6 bg-zinc-950 border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  Stream free classes
                </h2>
                <p className="text-lg text-zinc-400">
                  Start learning right away with our comprehensive free class library.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Intro to Modern Web Dev", time: "45 mins", category: "Web" },
                { title: "UI/UX Fundamentals", time: "1 hour", category: "Design" },
                { title: "JavaScript Crash Course", time: "2 hours", category: "Programming" }
              ].map((course, i) => (
                <div key={i} className="group bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all cursor-pointer">
                  <div className="aspect-video bg-zinc-800 flex items-center justify-center relative">
                    <Video className="w-10 h-10 text-zinc-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/50 px-2 py-1 rounded-md">{course.category}</span>
                      <span className="text-sm text-zinc-500">{course.time}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{course.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Courses Section */}
        <section id="programs" className="py-24 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Premium Enrollments
              </h2>
              <p className="text-lg text-zinc-400">
                Take your skills to the next level with structured, deep-dive courses designed to make you industry-ready.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Full-Stack Bootcamp", desc: "From zero to deployed applications. Learn everything you need to become a full-stack developer.", price: "$199" },
                { title: "Advanced Frontend Frameworks", desc: "Master React, Next.js, and modern state management across large-scale apps.", price: "$149" }
              ].map((course, i) => (
                <div key={i} className="flex flex-col p-8 rounded-3xl border border-zinc-800 hover:border-blue-900/50 bg-zinc-900/50 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
                  <p className="text-zinc-400 mb-6 flex-grow">{course.desc}</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" /> Full lifetime access
                    </li>
                    <li className="flex items-center gap-3 text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" /> 1-on-1 mentorship sessions
                    </li>
                  </ul>
                  <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
                    <span className="text-3xl font-bold text-white">{course.price}</span>
                    <button className="px-6 py-2.5 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors">
                      Enroll
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}