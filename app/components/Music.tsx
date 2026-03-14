const tracks = [
  { title: "Add Your Song Title", album: "Album Name", year: "2024", spotifyUrl: "#", appleMusicUrl: "#" },
  { title: "Add Your Song Title", album: "Album Name", year: "2024", spotifyUrl: "#", appleMusicUrl: "#" },
  { title: "Add Your Song Title", album: "Album Name", year: "2024", spotifyUrl: "#", appleMusicUrl: "#" },
];

export default function Music() {
  return (
    <section id="music" className="relative py-28 px-6 bg-[#05030f] overflow-hidden">
      <div className="orb w-96 h-96 bg-[#4f46e5] opacity-10 top-10 right-[-80px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-raleway)] text-[#06b6d4] tracking-[0.5em] text-xs uppercase mb-4">
            ✦ Listen ✦
          </p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-5xl md:text-6xl text-[#f0e6ff]">Music</h2>
          <div className="w-16 h-px bg-gradient-to-r from-[#d946ef] to-[#06b6d4] mx-auto mt-6" />
        </div>

        {/* Spotify embed placeholder */}
        <div className="mb-16 border border-[#d946ef]/20 glow-magenta overflow-hidden">
          <div className="bg-[#0d0520] p-10 text-center">
            <p className="font-[family-name:var(--font-raleway)] text-[#f0e6ff]/40 text-sm tracking-widest uppercase mb-2">
              Spotify Player
            </p>
            <p className="font-[family-name:var(--font-raleway)] text-[#f0e6ff]/20 text-xs">
              Paste your Spotify embed code here — Share → Embed
            </p>
            <div className="mt-6 h-24 border border-dashed border-[#d946ef]/20 rounded flex items-center justify-center">
              <span className="shimmer-text font-[family-name:var(--font-cinzel)] text-xs tracking-widest">SPOTIFY EMBED</span>
            </div>
          </div>
        </div>

        {/* Track list */}
        <div className="space-y-1">
          {tracks.map((track, i) => (
            <div key={i}
              className="flex items-center justify-between px-6 py-5 border border-[#f0e6ff]/5 hover:border-[#d946ef]/30 hover:bg-[#d946ef]/5 transition-all group">
              <div className="flex items-center gap-5">
                <span className="font-[family-name:var(--font-cinzel)] text-[#d946ef]/40 text-sm w-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-[family-name:var(--font-cinzel)] text-[#f0e6ff] text-base group-hover:text-[#d946ef] transition-colors">
                    {track.title}
                  </p>
                  <p className="font-[family-name:var(--font-raleway)] text-[#f0e6ff]/35 text-xs tracking-widest uppercase">
                    {track.album} · {track.year}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <a href={track.spotifyUrl}
                  className="font-[family-name:var(--font-raleway)] text-xs text-[#f0e6ff]/25 hover:text-[#1db954] transition-colors tracking-widest uppercase">
                  Spotify
                </a>
                <a href={track.appleMusicUrl}
                  className="font-[family-name:var(--font-raleway)] text-xs text-[#f0e6ff]/25 hover:text-[#fc3c44] transition-colors tracking-widest uppercase">
                  Apple
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="font-[family-name:var(--font-raleway)] text-[#f0e6ff]/30 text-xs tracking-widest uppercase mb-6">Available On</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["Spotify", "Apple Music", "Amazon Music", "YouTube Music"].map((p) => (
              <a key={p} href="#"
                className="font-[family-name:var(--font-raleway)] text-sm text-[#f0e6ff]/40 hover:text-[#06b6d4] transition-colors tracking-widest uppercase">
                {p}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
