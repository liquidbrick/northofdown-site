const tracks = [
  {
    title: "Add Your Song Title",
    album: "Album Name",
    year: "2024",
    spotifyUrl: "#",
    appleMusicUrl: "#",
  },
  {
    title: "Add Your Song Title",
    album: "Album Name",
    year: "2024",
    spotifyUrl: "#",
    appleMusicUrl: "#",
  },
  {
    title: "Add Your Song Title",
    album: "Album Name",
    year: "2024",
    spotifyUrl: "#",
    appleMusicUrl: "#",
  },
];

export default function Music() {
  return (
    <section id="music" className="py-28 px-6 bg-[#1a1209]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-lato)] text-[#c8872a] tracking-[0.4em] text-xs uppercase mb-4">
            Listen
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#f5efe6]">
            Music
          </h2>
          <div className="w-16 h-px bg-[#c8872a] mx-auto mt-6" />
        </div>

        {/* Spotify Embed Placeholder */}
        <div className="mb-16 rounded-sm overflow-hidden amber-glow border border-[#c8872a]/20">
          <div className="bg-[#2a1a0a] p-10 text-center">
            <p className="font-[family-name:var(--font-lato)] text-[#f5efe6]/40 text-sm tracking-widest uppercase mb-3">
              Spotify Player
            </p>
            <p className="font-[family-name:var(--font-lato)] text-[#f5efe6]/25 text-xs">
              Paste your Spotify embed code here — Settings → Share → Embed
            </p>
            {/* Replace the div below with your Spotify iframe embed */}
            <div className="mt-6 h-24 border border-dashed border-[#c8872a]/20 rounded flex items-center justify-center">
              <span className="text-[#c8872a]/40 text-xs tracking-widest">SPOTIFY EMBED</span>
            </div>
          </div>
        </div>

        {/* Track List */}
        <div className="space-y-1">
          {tracks.map((track, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-6 py-5 border border-[#f5efe6]/5 hover:border-[#c8872a]/30 hover:bg-[#c8872a]/5 transition-all group"
            >
              <div className="flex items-center gap-5">
                <span className="font-[family-name:var(--font-lato)] text-[#c8872a]/40 text-sm w-5">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-[#f5efe6] text-lg group-hover:text-[#c8872a] transition-colors">
                    {track.title}
                  </p>
                  <p className="font-[family-name:var(--font-lato)] text-[#f5efe6]/40 text-xs tracking-widest uppercase">
                    {track.album} · {track.year}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={track.spotifyUrl}
                  className="font-[family-name:var(--font-lato)] text-xs text-[#f5efe6]/30 hover:text-[#1db954] transition-colors tracking-widest uppercase"
                >
                  Spotify
                </a>
                <a
                  href={track.appleMusicUrl}
                  className="font-[family-name:var(--font-lato)] text-xs text-[#f5efe6]/30 hover:text-[#fc3c44] transition-colors tracking-widest uppercase"
                >
                  Apple
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Streaming Links */}
        <div className="mt-14 text-center">
          <p className="font-[family-name:var(--font-lato)] text-[#f5efe6]/40 text-xs tracking-widest uppercase mb-6">
            Available On
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Spotify", "Apple Music", "Amazon Music", "YouTube Music"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="font-[family-name:var(--font-lato)] text-sm text-[#f5efe6]/50 hover:text-[#c8872a] transition-colors tracking-widest uppercase border-b border-transparent hover:border-[#c8872a]"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
