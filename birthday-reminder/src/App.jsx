
import { Cake, Heart, CalendarDays } from "lucide-react";

function App() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">

      <section className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 text-center">

        <div className="flex justify-center mb-6">
          <div className="bg-indigo-100 p-5 rounded-2xl">
            <Cake className="w-12 h-12 text-indigo-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          Birthday Reminder
        </h1>

        <p className="text-slate-600 leading-relaxed mb-6">
          Never miss an important birthday again.
          Organize your contacts, track upcoming celebrations
          and prepare thoughtful birthday wishes.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">

          <div className="bg-indigo-50 rounded-xl p-4">
            <CalendarDays className="w-6 h-6 text-indigo-600 mx-auto mb-2" />

            <p className="font-semibold text-slate-800">
              Stay Organized
            </p>

            <p className="text-xs text-slate-500 mt-1">
              Keep birthdays together
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl p-4">
            <Heart className="w-6 h-6 text-orange-500 mx-auto mb-2" />

            <p className="font-semibold text-slate-800">
              Celebrate People
            </p>

            <p className="text-xs text-slate-500 mt-1">
              Never forget special days
            </p>
          </div>

        </div>

        <div className="border-t border-slate-100 pt-5">

          <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Project initialized successfully
          </span>

          <p className="text-xs text-slate-400 mt-3">
            Sprint 1 · Project Foundation
          </p>

        </div>

      </section>

    </main>
  );
}

export default App;
