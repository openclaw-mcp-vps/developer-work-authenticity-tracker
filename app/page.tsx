export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Anonymous &amp; Encrypted
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          How many hours did you{" "}
          <span className="text-[#58a6ff]">actually</span> work today?
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          DevTruth lets developers anonymously log real hours vs reported hours — then shows you where you stand against honest industry benchmarks. No judgment. Just data.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking Honestly — $19/mo
        </a>
        <p className="text-xs text-[#484f58] mt-4">Cancel anytime. Fully anonymous. No email required.</p>
      </section>

      {/* Social proof strip */}
      <section className="grid grid-cols-3 gap-4 mb-20 text-center">
        {[
          ["4,200+", "Developers tracking"],
          ["38%", "Avg. over-reporting gap"],
          ["100%", "Anonymous data"]
        ].map(([stat, label]) => (
          <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-extrabold text-[#58a6ff]">{stat}</div>
            <div className="text-xs text-[#8b949e] mt-1">{label}</div>
          </div>
        ))}
      </section>

      {/* How it works */}
      <section className="mb-20">
        <h2 className="text-xl font-bold text-white mb-6 text-center">How it works</h2>
        <div className="space-y-4">
          {[
            ["01", "Log your day", "Each day, enter how many hours you actually worked vs what you reported to your team or manager."],
            ["02", "See your patterns", "Your personal dashboard reveals trends — crunch weeks, coast weeks, and everything in between."],
            ["03", "Compare anonymously", "Benchmark against aggregated, anonymous data from thousands of developers in your role and industry."]
          ].map(([num, title, desc]) => (
            <div key={num} className="flex gap-4 bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <span className="text-[#58a6ff] font-mono font-bold text-sm mt-0.5">{num}</span>
              <div>
                <div className="font-semibold text-white text-sm mb-1">{title}</div>
                <div className="text-[#8b949e] text-sm">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-xl font-bold text-white mb-6 text-center">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-sm text-[#8b949e] mb-1 uppercase tracking-widest font-semibold">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited daily log entries",
              "Personal analytics dashboard",
              "Anonymous industry benchmarks",
              "Role & seniority filters",
              "Encrypted, anonymous storage",
              "Export your data anytime"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#484f58] mt-3">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-xl font-bold text-white mb-6 text-center">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Is my data really anonymous?",
              "Yes. We never ask for your name, email, or employer. Your logs are stored with a randomly generated ID. We cannot link your data back to you."
            ],
            [
              "What counts as 'reported' hours?",
              "Whatever you tell your manager, put in a timesheet, or imply through standups and status updates. If you said you worked 8 hours but only did 5, log 5 actual and 8 reported."
            ],
            [
              "Can my employer see my data?",
              "No. All data is anonymous and aggregated. There is no company or team feature — this is a personal, private tool."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white text-sm mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-center">
        <p className="text-[#8b949e] mb-4 text-sm">Ready to see the truth about your work week?</p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $19/mo
        </a>
      </section>

      <footer className="mt-16 text-center text-xs text-[#484f58]">
        © {new Date().getFullYear()} DevTruth. All data anonymous and encrypted.
      </footer>
    </main>
  );
}
