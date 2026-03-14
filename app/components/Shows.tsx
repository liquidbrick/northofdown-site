const shows = [
  { date: { month: "JAN", day: "00", year: "2025" }, venue: "Venue Name", city: "City, ST", ticketUrl: "#", soldOut: false },
  { date: { month: "FEB", day: "00", year: "2025" }, venue: "Venue Name", city: "City, ST", ticketUrl: "#", soldOut: false },
  { date: { month: "MAR", day: "00", year: "2025" }, venue: "Venue Name", city: "City, ST", ticketUrl: "#", soldOut: true },
];

export default function Shows() {
  return (
    <section id="shows" className="relative py-28 px-6 bg-[#05030f] overflow-hidden">
      <div className="orb w-80 h-80 bg-[#d946ef] opacity-10 top-0 right-20" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-raleway)] text-[#d946ef] tracking-[0.5em] text-xs uppercase mb-4">
            ✦ Live ✦
          </p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-5xl md:text-6xl text-[#f0e6ff]">Tour Dates</h2>
          <div className="w-16 h-px bg-gradient-to-r from-[#d946ef] to-[#06b6d4] mx-auto mt-6" />
        </div>

        <div className="space-y-2">
          {shows.map((show, i) => (
            <div key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-6 border border-[#f0e6ff]/5 hover:border-[#7c3aed]/40 hover:bg-[#7c3aed]/5 transition-all gap-4 group">
              <div className="flex items-baseline gap-3 min-w-[100px]">
                <span className="font-[family-name:var(--font-cinzel)] text-3xl font-bold shimmer-text">
                  {show.date.day}
                </span>
                <div>
                  <p className="font-[family-name:var(--font-raleway)] text-xs text-[#06b6d4]/70 tracking-widest uppercase">
                    {show.date.month}
                  </p>
                  <p className="font-[family-name:var(--font-raleway)] text-xs text-[#f0e6ff]/25 tracking-widest">
                    {show.date.year}
                  </p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-gradient-to-b from-[#d946ef]/20 to-[#06b6d4]/20" />

              <div className="flex-1 sm:px-6">
                <p className="font-[family-name:var(--font-cinzel)] text-lg text-[#f0e6ff] group-hover:text-[#d946ef] transition-colors">
                  {show.venue}
                </p>
                <p className="font-[family-name:var(--font-raleway)] text-sm text-[#f0e6ff]/40 tracking-widest uppercase mt-1">
                  {show.city}
                </p>
              </div>

              {show.soldOut ? (
                <span className="font-[family-name:var(--font-raleway)] text-xs text-[#f0e6ff]/20 tracking-widest uppercase border border-[#f0e6ff]/10 px-5 py-2.5 text-center">
                  Sold Out
                </span>
              ) : (
                <a href={show.ticketUrl}
                  className="font-[family-name:var(--font-raleway)] text-xs font-semibold text-white bg-gradient-to-r from-[#7c3aed] to-[#d946ef] hover:opacity-90 tracking-widest uppercase px-5 py-2.5 transition-opacity text-center glow-magenta">
                  Tickets
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="text-center font-[family-name:var(--font-raleway)] text-[#f0e6ff]/20 text-xs tracking-widest uppercase mt-10">
          ✦ More dates manifesting soon ✦
        </p>
      </div>
    </section>
  );
}
