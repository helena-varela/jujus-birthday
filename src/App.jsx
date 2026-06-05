import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function App() {
  const [candleLit, setCandleLit] = useState(true);

  useEffect(() => {
    durationConfetti();
  }, []);

  const durationConfetti = () => {
    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 50 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const handleBlowCandle = () => {
    if (candleLit) {
      setCandleLit(false);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    } else {
      setCandleLit(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center p-4 overflow-hidden font-sans select-none">
      
      <div className="absolute top-10 left-10 text-4xl animate-bounce duration-1000">🎈</div>
      <div className="absolute top-20 right-12 text-4xl animate-bounce delay-200 duration-1000">✨</div>
      <div className="absolute bottom-10 left-16 text-4xl animate-bounce delay-500 duration-1000">🌸</div>
      <div className="absolute bottom-20 right-10 text-4xl animate-bounce delay-300 duration-1000">🎉</div>

      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-md w-full text-center border border-pink-200 transform hover:scale-[1.02] transition-transform duration-300 z-10">
        
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6">
          Parabéns, Juju! 🥳
        </h1>

        <div className="relative w-full h-48 flex flex-col items-center justify-end mb-8 cursor-pointer" onClick={handleBlowCandle}>
          
          <div className="w-3 h-12 bg-gradient-to-t from-purple-400 to-pink-400 rounded-sm relative flex justify-center">
            {candleLit ? (
              <div className="absolute -top-6 w-5 h-7 bg-orange-400 rounded-full opacity-75 blur-[1px] origin-bottom flex items-center justify-center">
                <div className="w-3 h-5 bg-yellow-300 rounded-full"></div>
              </div>
            ) : (
              <div className="absolute -top-4 text-xs text-gray-400">💨</div>
            )}
          </div>

          <div className="w-40 h-10 bg-pink-400 rounded-t-full relative z-20 shadow-inner flex justify-around items-center px-4">
            <div className="w-1.5 h-3 bg-yellow-200 rounded-full rotate-45"></div>
            <div className="w-1.5 h-3 bg-blue-300 rounded-full -rotate-12"></div>
            <div className="w-1.5 h-3 bg-white rounded-full rotate-12"></div>
            <div className="w-1.5 h-3 bg-green-300 rounded-full rotate-45"></div>
          </div>

          <div className="w-44 h-16 bg-amber-100 border-t-4 border-pink-300 rounded-b-md relative z-10 flex flex-col justify-between overflow-hidden shadow-md">
            <div className="w-full h-3 bg-purple-500 my-auto opacity-80"></div>
            <div className="w-full h-2 bg-pink-300"></div>
          </div>

          <div className="w-52 h-3 bg-slate-300 rounded-full shadow-sm"></div>

          <p className="text-xs text-gray-400 mt-2 italic">
            {candleLit ? "Clique na chama para assoprar! 🎂" : "Clique na vela para acender de novo! ❤️"}
          </p>
        </div>

        <div className="bg-pink-50/70 p-5 rounded-2xl border border-pink-100">
          <p className="text-gray-700 font-medium leading-relaxed text-lg">
            Feliz 20 anos, juju! Sou a pessoa mais sortuda do mundo por ter crescido ao seu lado e espero que continue assim para sempre! Por mais 20, 40, 60 anos de amizade &lt;3 Eu te amo
          </p>
        </div>

        <button 
          onClick={durationConfetti}
          className="mt-6 px-6 py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-md hover:from-pink-600 hover:to-purple-600 transition-all transform active:scale-95"
        >
          Mais Confetes! 🎉
        </button>

      </div>
    </div>
  );
}