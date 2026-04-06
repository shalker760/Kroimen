'use client';

import React from 'react';

export default function KroimenIndex() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-mono relative">
      {/* Фоновый глаз */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none z-0"
        style={{
          backgroundImage: `url('https://i.imgur.com/6L8NW.jpg')`, // или используй свою загруженную картинку
          filter: 'contrast(1.1) brightness(0.7) hue-rotate(260deg) saturate(1.4)'
        }}
      />

      {/* Скан-линии */}
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(168,85,247,0.06)_50%)] bg-[length:100%_4px] animate-scan pointer-events-none z-10" />

      {/* Шапка */}
      <header className="relative z-50 border-b border-purple-500/30 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 border-2 border-purple-400 flex items-center justify-center text-2xl font-bold text-purple-400">K</div>
            <h1 className="text-3xl font-black tracking-[4px]">КРОЙМЕН</h1>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-purple-400 transition-colors">Новости</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Кланы</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Лор</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Персонажи</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Индекс</a>
          </nav>
        </div>
      </header>

      {/* Главный контент */}
      <main className="relative z-20 flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
        <div className="max-w-5xl text-center">
          <div className="inline-block mb-6 px-8 py-2.5 border border-purple-500/50 bg-purple-950/50 text-purple-400 text-xs tracking-[3px] uppercase">
            Мастер Индекс • v0.2 • Онлайн
          </div>

          <h1 
            data-text="КРОЙМЕН" 
            className="glitch text-[5.5rem] md:text-[7.5rem] font-black tracking-[-4px] leading-none mb-6 text-purple-300"
          >
            КРОЙМЕН
          </h1>

          <p className="text-2xl md:text-3xl text-gray-400 mb-16 max-w-2xl mx-auto">
            Город, где каждый глаз следит.<br />
            Каждый байт имеет цену.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-12 py-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 font-bold text-lg uppercase tracking-widest transition-all flex items-center justify-center gap-4">
              Войти в Архив
              <span className="group-hover:translate-x-2 transition">→</span>
            </button>

            <button className="px-12 py-6 border-2 border-purple-500/70 hover:border-purple-400 text-purple-400 font-bold text-lg uppercase tracking-widest transition-all">
              Открыть Лор
            </button>
          </div>

          {/* Быстрые разделы */}
          <div className="mt-24">
            <p className="uppercase text-xs tracking-[2px] text-purple-500/70 mb-8">Разделы Индекса</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Новости', 'Кланы', 'Алахам', 'Райн', 'Лорест', 'Ларм', 'Дарф'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="px-8 py-4 bg-zinc-950 border border-purple-900 hover:border-purple-500 transition-colors text-sm uppercase tracking-widest"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Футер */}
      <footer className="relative z-50 border-t border-purple-500/20 py-8 text-center text-xs text-gray-500">
        © 2026 Кроймен • Мастер Индекс следит за всем
      </footer>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
        .animate-scan {
          animation: scan 12s linear infinite;
        }
        .glitch {
          position: relative;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
        .glitch::before {
          color: #c026d3;
          animation: glitch1 1.8s infinite linear;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
        }
        .glitch::after {
          color: #a855f7;
          animation: glitch2 1.4s infinite linear;
          clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
        }
        @keyframes glitch1 {
          0%,100% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(3px, -3px); }
          60% { transform: translate(-2px, 2px); }
        }
        @keyframes glitch2 {
          0%,100% { transform: translate(0); }
          30% { transform: translate(4px, -2px); }
          70% { transform: translate(-4px, 2px); }
        }
      `}</style>
    </div>
  );
}