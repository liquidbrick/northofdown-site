const shows = [
  {
    date: { month: "JAN", day: "00", year: "2025" },
    venue: "Venue Name",
    city: "City, ST",
    ticketUrl: "#",
    soldOut: false,
  },
  {
    date: { month: "FEB", day: "00", year: "2025" },
    venue: "Venue Name",
    city: "City, ST",
    ticketUrl: "#",
    soldOut: false,
  },
  {
    date: { month: "MAR", day: "00", year: "2025" },
    venue: "Venue Name",
    city: "City, ST",
    ticketUrl: "#",
    soldOut: true,
  },
];

export default function Shows() {
  return (
    <section id="shows" className="py-28 px-6 bg-[#1a1209]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-lato)] text-[#c8872a] tracking-[0.4em] text-xs uppercase mb-4">
            Live
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#f5efe6]">
            Tour Dates
          </h2>
          <div className="w-16 h-px bg-[#c8872a] mx-auto mt-6" />
        </div>

        {/* Show list */}
        <div className="space-y-2">
          {shows.map((show, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-6 border border-[#f5efe6]/5 hover:border-[#c8872a]/20 hover:bg-[#c8872a]/5 transition-all gap-4"
            >
              {/* Date */}
              <div className="flex items-baseline gap-3 min-w-[100px]">
                <span className="font-[family-name:var(--font-playfair)] text-3xl text-[#c8872a] font-bold">
                  {show.date.day}
                </span>
                <div>
                  <p className="font-[family-name:var(--font-lato)] text-xs text-[#f5efe6]/60 tracking-widest uppercase">
                    {show.date.month}
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-xs text-[#f5efe6]/30 tracking-widest">
                    {show.date.year}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-[#f5efe6]/10" />

              {/* Venue info */}
              <div className="flex-1 sm:px-6">
                <p className="font-[family-name:var(--font-playfair)] text-xl text-[#f5efe6]">
                  {show.venue}
                </p>
                <p className="font-[family-name:var(--font-lato)] text-sm text-[#f5efe6]/50 tracking-widest uppercase mt-1">
                  {show.city}
                </p>
              </div>

              {/* Ticket button */}
              {show.soldOut ? (
                <span className="font-[family-name:var(--font-lato)] text-xs text-[#f5efe6]/30 tracking-widest uppercase border border-[#f5efe6]/10 px-5 py-2.5 text-center">
                  Sold Out
                </span>
              ) : (
                <a
                  href={show.ticketUrl}
                  className="font-[family-name:var(--font-lato)] text-xs text-[#1a1209] bg-[#c8872a] hover:bg-[#d99a3a] tracking-widest uppercase px-5 py-2.5 transition-colors text-center font-bold"
                >
                  Tickets
                </a>
              )}
            </div>
          ))}
        </div>

        {/* No shows fallback */}
        <p className="text-center font-[family-name:var(--font-lato)] text-[#f5efe6]/25 text-sm tracking-widest uppercase mt-10">
          More dates coming soon — check back often
        </p>
      </div>
    </section>
  );
}
