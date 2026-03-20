"use client";

import { useRef, useState, useEffect } from "react";

export default function AudioPreview() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [progress, setProgress] = useState(0);

  // Fade-in duration and preview length
  const PREVIEW_DURATION = 30; // seconds of preview
  const FADE_IN_MS = 2000;

  useEffect(() => {
    // Show the "Enter" prompt on load
    const timer = setTimeout(() => setShowPrompt(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / PREVIEW_DURATION) * 100);
      // Stop at preview duration
      if (audio.currentTime >= PREVIEW_DURATION) {
        audio.pause();
        setIsPlaying(false);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  const startPreview = () => {
    setHasInteracted(true);
    setShowPrompt(false);
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    audio.currentTime = 0;
    audio.play().then(() => {
      setIsPlaying(true);
      // Fade in
      let vol = 0;
      const step = 0.05;
      const interval = FADE_IN_MS / (1 / step);
      const fadeIn = setInterval(() => {
        vol = Math.min(vol + step, 0.6);
        audio.volume = vol;
        if (vol >= 0.6) clearInterval(fadeIn);
      }, interval);
    }).catch(() => {
      // Autoplay blocked — user needs to click
      setShowPrompt(true);
      setHasInteracted(false);
    });
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      if (audio.currentTime >= PREVIEW_DURATION) {
        audio.currentTime = 0;
      }
      audio.play();
      setIsPlaying(true);
    }
  };

  // Entry gate — user must click to begin (browser autoplay policy)
  if (!hasInteracted) {
    return (
      <>
        <audio ref={audioRef} src="/audio/north-of-down.mp3" preload="auto" />
        <div
          className={`fixed inset-0 z-[100] aurora-bg flex items-center justify-center cursor-pointer transition-opacity duration-1000 ${showPrompt ? "opacity-100" : "opacity-0"}`}
          onClick={startPreview}
        >
          <div className="text-center fade-in-up">
            <div className="orb w-[400px] h-[400px] bg-[#7c3aed] opacity-20 top-[20%] left-[30%] pulse-glow fixed" />
            <div className="orb w-[300px] h-[300px] bg-[#d946ef] opacity-15 bottom-[20%] right-[20%] pulse-glow fixed" style={{ animationDelay: "2s" }} />
            <p className="font-[family-name:var(--font-raleway)] text-[#d946ef] tracking-[0.5em] text-xs uppercase mb-8 float">
              ✦ Enter ✦
            </p>
            <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-6xl text-[#f0e6ff] text-glow mb-6">
              North of Down
            </h2>
            <p className="font-[family-name:var(--font-raleway)] text-[#f0e6ff]/40 text-sm tracking-widest">
              Click anywhere to enter
            </p>
            <div className="mt-10 w-16 h-16 border border-[#d946ef]/40 rounded-full flex items-center justify-center mx-auto glow-magenta hover:border-[#06b6d4] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1">
                <path d="M8 5v14l11-7z" fill="#f0e6ff" fillOpacity="0.7" />
              </svg>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Floating mini player after entry
  return (
    <>
      <audio ref={audioRef} src="/audio/north-of-down.mp3" preload="auto" />
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0d0520]/90 backdrop-blur-md border border-[#d946ef]/30 px-4 py-3 glow-magenta">
        <button onClick={togglePlay} className="flex items-center justify-center w-8 h-8 border border-[#d946ef]/40 rounded-full hover:border-[#06b6d4] transition-colors">
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#f0e6ff" fillOpacity="0.7">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="ml-0.5">
              <path d="M8 5v14l11-7z" fill="#f0e6ff" fillOpacity="0.7" />
            </svg>
          )}
        </button>
        <div className="flex flex-col gap-1">
          <span className="font-[family-name:var(--font-cinzel)] text-[#f0e6ff] text-xs">
            North of Down
          </span>
          <div className="w-24 h-0.5 bg-[#f0e6ff]/10 rounded overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#d946ef] to-[#06b6d4] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <span className="font-[family-name:var(--font-raleway)] text-[#f0e6ff]/30 text-[10px] tracking-widest uppercase">
          Preview
        </span>
      </div>
    </>
  );
}
