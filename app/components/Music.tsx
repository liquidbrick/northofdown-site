"use client";

import { useRef, useState } from "react";

const tracks = [
  {
    title: "North of Down",
    album: "Smile",
    year: "2022",
    spotifyUrl: "#",
    appleMusicUrl: "#",
    bandcampUrl: "https://liquidbrickproductions.bandcamp.com/track/north-of-down-2",
    purchasePrice: null,
    isFeatured: true,
  },
  { title: "Love's Light", album: "Smile", year: "2022", spotifyUrl: "#", appleMusicUrl: "#", bandcampUrl: "https://liquidbrickproductions.bandcamp.com/track/loves-light", purchasePrice: null, isFeatured: false },
  { title: "Dizzy", album: "Smile", year: "2022", spotifyUrl: "#", appleMusicUrl: "#", bandcampUrl: "https://liquidbrickproductions.bandcamp.com/track/dizzy", purchasePrice: null, isFeatured: false },
  { title: "Obsession", album: "Smile", year: "2022", spotifyUrl: "#", appleMusicUrl: "#", bandcampUrl: "https://liquidbrickproductions.bandcamp.com/track/obsession", purchasePrice: null, isFeatured: false },
  { title: "Smile", album: "Smile", year: "2022", spotifyUrl: "#", appleMusicUrl: "#", bandcampUrl: "https://liquidbrickproductions.bandcamp.com/track/smile", purchasePrice: null, isFeatured: false },
  { title: "Endless Blue", album: "Smile", year: "2022", spotifyUrl: "#", appleMusicUrl: "#", bandcampUrl: "https://liquidbrickproductions.bandcamp.com/track/endless-blue", purchasePrice: null, isFeatured: false },
  { title: "My 3 Wishes", album: "Smile", year: "2022", spotifyUrl: "#", appleMusicUrl: "#", bandcampUrl: "https://liquidbrickproductions.bandcamp.com/track/my-3-wishes", purchasePrice: null, isFeatured: false },
  { title: "Up 2 The Moon", album: "Smile", year: "2022", spotifyUrl: "#", appleMusicUrl: "#", bandcampUrl: "https://liquidbrickproductions.bandcamp.com/track/up-2-the-moon-2", purchasePrice: null, isFeatured: false },
  { title: "Dry Bones", album: "Smile", year: "2022", spotifyUrl: "#", appleMusicUrl: "#", bandcampUrl: "https://liquidbrickproductions.bandcamp.com/track/dry-bones", purchasePrice: null, isFeatured: false },
  { title: "Atoms & Dust", album: "Smile", year: "2022", spotifyUrl: "#", appleMusicUrl: "#", bandcampUrl: "https://liquidbrickproductions.bandcamp.com/track/atoms-dust", purchasePrice: null, isFeatured: false },
  { title: "Branded", album: "Smile", year: "2022", spotifyUrl: "#", appleMusicUrl: "#", bandcampUrl: "https://liquidbrickproductions.bandcamp.com/track/branded", purchasePrice: null, isFeatured: false },
  { title: "In The Morning", album: "Smile", year: "2022", spotifyUrl: "#", appleMusicUrl: "#", bandcampUrl: "https://liquidbrickproductions.bandcamp.com/track/in-the-morning", purchasePrice: null, isFeatured: false },
];

export default function Music() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [previewPlaying, setPreviewPlaying] = useState(false);

  const toggleTrackPreview = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (previewPlaying) {
      audio.pause();
      setPreviewPlaying(false);
    } else {
      audio.currentTime = 0;
      audio.volume = 0.5;
      audio.play();
      setPreviewPlaying(true);
    }
  };

  return (
    <section id="music" className="relative py-28 px-6 bg-[#05030f] overflow-hidden">
      <audio ref={audioRef} src="/audio/north-of-down.mp3" preload="auto" />
      <div className="orb w-96 h-96 bg-[#4f46e5] opacity-10 top-10 right-[-80px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="font-[family-name:var(--font-raleway)] text-[#06b6d4] tracking-[0.5em] text-xs uppercase mb-4">
            ✦ Listen ✦
          </p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-5xl md:text-6xl text-[#f0e6ff]">Music</h2>
          <div className="w-16 h-px bg-gradient-to-r from-[#d946ef] to-[#06b6d4] mx-auto mt-6" />
        </div>

        {/* ── Featured Track: North of Down ── */}
        <div className="mb-16 border border-[#d946ef]/30 glow-magenta overflow-hidden">
          <div className="bg-[#0d0520] p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Album art placeholder / play button */}
              <button
                onClick={toggleTrackPreview}
                className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 border border-[#d946ef]/40 bg-[#05030f] flex items-center justify-center group hover:border-[#06b6d4] transition-colors glow-violet"
              >
                <div className="orb w-24 h-24 bg-[#7c3aed] opacity-30 top-2 left-2" />
                {previewPlaying ? (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="#f0e6ff" fillOpacity="0.8" className="relative z-10">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="relative z-10 ml-1">
                    <path d="M8 5v14l11-7z" fill="#f0e6ff" fillOpacity="0.8" />
                  </svg>
                )}
                <span className="absolute bottom-2 font-[family-name:var(--font-raleway)] text-[8px] text-[#f0e6ff]/30 tracking-widest uppercase">
                  {previewPlaying ? "Playing" : "Preview"}
                </span>
              </button>

              {/* Track info */}
              <div className="flex-1 text-center md:text-left">
                <p className="font-[family-name:var(--font-raleway)] text-[#d946ef] tracking-[0.4em] text-[10px] uppercase mb-2">
                  ✦ Featured Single ✦
                </p>
                <h3 className="font-[family-name:var(--font-cinzel)] text-3xl md:text-4xl text-[#f0e6ff] text-glow mb-2">
                  North of Down
                </h3>
                <p className="font-[family-name:var(--font-raleway)] text-[#f0e6ff]/40 text-sm tracking-widest mb-6">
                  Spirit-centered psychedelic rock
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  {/* Buy button */}
                  <a
                    href="https://liquidbrickproductions.bandcamp.com/track/north-of-down-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7c3aed] to-[#d946ef] text-white font-[family-name:var(--font-raleway)] font-semibold tracking-widest text-sm uppercase hover:opacity-90 transition-opacity glow-magenta"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 01-8 0" />
                    </svg>
                    Buy on Bandcamp
                  </a>
                  <a
                    href="https://liquidbrickproductions.bandcamp.com/album/smile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#06b6d4]/40 text-[#06b6d4]/70 font-[family-name:var(--font-raleway)] tracking-widest text-sm uppercase hover:border-[#06b6d4] hover:text-[#06b6d4] transition-colors"
                  >
                    Full Album — $8.88
                  </a>
                  {/* Streaming links */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#d946ef]/40 text-[#f0e6ff]/70 font-[family-name:var(--font-raleway)] tracking-widest text-sm uppercase hover:border-[#1db954] hover:text-[#1db954] transition-colors"
                  >
                    Spotify
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#d946ef]/40 text-[#f0e6ff]/70 font-[family-name:var(--font-raleway)] tracking-widest text-sm uppercase hover:border-[#fc3c44] hover:text-[#fc3c44] transition-colors"
                  >
                    Apple Music
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Track list ── */}
        <div className="space-y-1">
          {tracks.map((track, i) => (
            <div key={i}
              className={`flex items-center justify-between px-6 py-5 border transition-all group ${
                track.isFeatured
                  ? "border-[#d946ef]/30 bg-[#d946ef]/5"
                  : "border-[#f0e6ff]/5 hover:border-[#d946ef]/30 hover:bg-[#d946ef]/5"
              }`}
            >
              <div className="flex items-center gap-5">
                <span className="font-[family-name:var(--font-cinzel)] text-[#d946ef]/40 text-sm w-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className={`font-[family-name:var(--font-cinzel)] text-base transition-colors ${
                    track.isFeatured ? "text-[#d946ef]" : "text-[#f0e6ff] group-hover:text-[#d946ef]"
                  }`}>
                    {track.title}
                  </p>
                  <p className="font-[family-name:var(--font-raleway)] text-[#f0e6ff]/35 text-xs tracking-widest uppercase">
                    {track.album} · {track.year}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {track.bandcampUrl && (
                  <a href={track.bandcampUrl} target="_blank" rel="noopener noreferrer"
                    className="font-[family-name:var(--font-raleway)] text-xs text-[#06b6d4]/60 hover:text-[#06b6d4] transition-colors tracking-widest uppercase">
                    Bandcamp
                  </a>
                )}
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
            {[
              { name: "Bandcamp", url: "https://liquidbrickproductions.bandcamp.com/album/smile" },
              { name: "Spotify", url: "#" },
              { name: "Apple Music", url: "#" },
              { name: "Amazon Music", url: "#" },
              { name: "YouTube Music", url: "#" },
            ].map((p) => (
              <a key={p.name} href={p.url} target={p.url !== "#" ? "_blank" : undefined} rel={p.url !== "#" ? "noopener noreferrer" : undefined}
                className="font-[family-name:var(--font-raleway)] text-sm text-[#f0e6ff]/40 hover:text-[#06b6d4] transition-colors tracking-widest uppercase">
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
