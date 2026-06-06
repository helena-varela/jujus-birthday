import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function App() {
  // Controle de qual tela exibir: 'home' ou 'fotos'
  const [view, setView] = useState('home');
  const [candleLit, setCandleLit] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array de fotos - Substitua os links e as legendas pelas de vocês!
  const fotosJuju = [
    {
      url: "./WhatsApp Image 2026-06-05 at 20.44.22.jpeg",
      legenda: "nois daqui a algumas horas"
    },
    {
      url: "./image copy.png",
      legenda: "divas de stem desde cedo"
    },
    {
      url: "./image copy 2.png",
      legenda: "eu disse que ia ter gojo..."
    },
    {
      url: "./image copy 3.png",
      legenda: "todas aquelas tardes que passei na sua casa e dançavamos just dance"
    },
    {
      url: "./image copy 4.png",
      legenda: "jogando wii (eu estava te amassando aqui)"
    },
    {
      url: "./image copy 5.png",
      legenda: "amo viver com você <3"
    }
  ];


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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === fotosJuju.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? fotosJuju.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (view === 'home') {
      durationConfetti();
    }
  }, [view]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center justify-center p-4 overflow-hidden font-sans select-none">
      
      {/* Elementos flutuantes de fundo */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce duration-1000">🎈</div>
      <div className="absolute top-20 right-12 text-4xl animate-bounce delay-200 duration-1000">✨</div>
      <div className="absolute bottom-10 left-16 text-4xl animate-bounce delay-500 duration-1000">🌸</div>
      <div className="absolute bottom-20 right-10 text-4xl animate-bounce delay-300 duration-1000">🎉</div>

      {/* TELA 1: HOME (BOLO E MENSAGEM) */}
      {view === 'home' && (
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-md w-full text-center border border-pink-200 transform hover:scale-[1.01] transition-all duration-300 z-10">
          
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6">
            Parabéns, Juju! 🥳
          </h1>

          {/* Bolo */}
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

          {/* Texto de Aniversário */}
          <div className="bg-pink-50/70 p-5 rounded-2xl border border-pink-100 mb-6">
            <p className="text-gray-700 font-medium leading-relaxed text-lg">
              "Feliz 20, juju! Sou a pessoa mais sortuda do mundo por ter crescido ao seu lado e espero que continue assim para sempre! por mais 20, 40, 60 anos de amizade, EU TE AMO &lt;3"
            </p>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col gap-3">
            <button 
              onClick={durationConfetti}
              className="w-full px-6 py-2.5 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold rounded-full shadow-md hover:from-pink-500 hover:to-purple-500 transition-all transform active:scale-95"
            >
              Joga mais confete pro alto!!!
            </button>

            <button 
              onClick={() => setView('fotos')}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:opacity-95 transition-all transform active:scale-95 animate-pulse"
            >
              Surpresinhaa 👀
            </button>
          </div>
        </div>
      )}

      {/* TELA 2: CARROSSEL POLAROID */}
      {view === 'fotos' && (
        <div className="flex flex-col items-center justify-center max-w-md w-full z-10">
          
          {/* Card Polaroid */}
          <div className="bg-white p-4 pb-8 rounded-sm shadow-2xl border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-300 w-full">
            
            {/* Container da Imagem com tamanho fixo */}
            <div className="w-full h-80 bg-gray-100 overflow-hidden relative group rounded-sm shadow-inner">
              <img 
                src={fotosJuju[currentSlide].url} 
                alt="Nossa foto" 
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              
              {/* Setas de navegação flutuantes sobre a foto */}
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md text-gray-800 font-bold transition-all"
              >
                ❮
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md text-gray-800 font-bold transition-all"
              >
                ❯
              </button>
            </div>

            {/* Espaço de escrita manual da Polaroid */}
            <div className="mt-6 text-center px-2">
              <p className="font-serif text-xl text-gray-700 italic border-b border-dashed border-gray-200 pb-2 min-h-[3.5rem] flex items-center justify-center">
                {fotosJuju[currentSlide].legenda}
              </p>
              
              {/* Indicador de páginas (Bolinhas) */}
              <div className="flex justify-center gap-1.5 mt-4">
                {fotosJuju.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-pink-400 w-4' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Botão para voltar para o bolo */}
          <button 
            onClick={() => setView('home')}
            className="mt-6 px-6 py-2 bg-white/60 hover:bg-white/90 text-gray-600 font-medium rounded-full shadow-sm text-sm border border-pink-200/50 transition-all"
          >
            Voltar pra o bolinho
          </button>
        </div>
      )}

    </div>
  );
}