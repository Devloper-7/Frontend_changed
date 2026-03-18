// import React, { useEffect, useState } from 'react';

// // --- COMPONENT: BackgroundGradients ---
// // In a real Next.js app, save this as: components/BackgroundGradients.tsx
// // usage: import BackgroundGradients from '@/components/BackgroundGradients';

// const BackgroundGradients: React.FC = () => {
//   const [blobCount, setBlobCount] = useState<number>(0);

//   // CONFIGURATION
//   const VERTICAL_SPACING = 1126; // Distance between blobs
//   const START_TOP = 995;         // Position of the first blob
//   const WIDTH = 357;             // Width of the blob
//   const HEIGHT = 349;            // Height of the blob
//   const GLOW_COLOR = '#053F31';  // Dark Green/Teal
  
//   useEffect(() => {
//     // Function to calculate how many blobs fit on the current page
//     const calculateBlobs = () => {
//       // Get the full height of the page content
//       const fullHeight = document.documentElement.scrollHeight;
      
//       // Calculate remaining height after the start offset
//       const availableHeight = fullHeight - START_TOP;
      
//       if (availableHeight <= 0) {
//         setBlobCount(0);
//         return;
//       }

//       // Calculate count: Round up to ensure the pattern covers the bottom
//       const count = Math.ceil(availableHeight / VERTICAL_SPACING) + 1;
//       setBlobCount(count);
//     };

//     // Calculate on mount
//     calculateBlobs();

//     // Recalculate if the window is resized
//     window.addEventListener('resize', calculateBlobs);

//     // Optional: Recalculate if the DOM changes size (useful for dynamic content loading)
//     const resizeObserver = new ResizeObserver(() => calculateBlobs());
//     resizeObserver.observe(document.body);

//     return () => {
//       window.removeEventListener('resize', calculateBlobs);
//       resizeObserver.disconnect();
//     };
//   }, []);

//   return (
//     <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
//       {Array.from({ length: blobCount }).map((_, index) => {
//         const isLeft = index % 2 === 0; // Even = Left, Odd = Right
//         const topPosition = START_TOP + (index * VERTICAL_SPACING);

//         return (
//           <div
//             key={index}
//             className="absolute rounded-full"
//             style={{
//               top: `${topPosition}px`,
//               // Horizontal positioning:
//               left: isLeft ? '-100px' : 'auto',
//               right: !isLeft ? '-100px' : 'auto',
//               // Size:
//               width: `${WIDTH}px`,
//               height: `${HEIGHT}px`,
//               // Styling:
//               backgroundColor: GLOW_COLOR,
//               filter: 'blur(120px)',
//               opacity: 0.5, // 50% Opacity as requested
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// };

// // --- DEMO APP (Simulates a Next.js Page) ---
// const App: React.FC = () => {
//   // We use state just to toggle page height to demonstrate the dynamic gradients
//   const [isLongPage, setIsLongPage] = useState(true);

//   return (
//     <div className="relative w-full bg-slate-50 font-sans text-slate-800 transition-all duration-500">
      
//       {/* 1. Add the component at the top level of your page/layout */}
//       <BackgroundGradients />

//       {/* 2. Your actual page content goes here (z-10 ensures it's above the background) */}
//       <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
//         <header className="mb-20 text-center">
//           <h1 className="text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
//             Dynamic Zig-Zag Background
//           </h1>
//           <p className="text-lg text-slate-600 mb-8">
//             This page demonstrates the Next.js/TypeScript component. <br/>
//             The gradients are generated automatically based on the page height.
//           </p>
          
//           <button 
//             onClick={() => setIsLongPage(!isLongPage)}
//             className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition shadow-lg"
//           >
//             Toggle Page Length ({isLongPage ? 'Currently Long' : 'Currently Short'})
//           </button>
//         </header>

//         {/* Content Blocks */}
//         <div className="space-y-32">
//           <section className="p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-slate-200 shadow-sm">
//             <h2 className="text-2xl font-bold mb-4">Start (995px)</h2>
//             <p className="text-slate-600">
//               Scroll down. The first gradient will appear on the <strong>Left</strong> side at exactly 995px from the top.
//             </p>
//           </section>

//           {/* This spacer pushes the content down to where the first blob is */}
//           <div className="h-[600px] flex items-center justify-center border-l-2 border-dashed border-slate-300 ml-10">
//             <span className="text-slate-400 -rotate-90">Scanning down...</span>
//           </div>

//           <section className="p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-slate-200 shadow-sm">
//             <h2 className="text-2xl font-bold mb-4">Gradient Zone 1</h2>
//             <p className="text-slate-600">
//               You should see a green glow on the left.
//             </p>
//           </section>

//           {/* Render more sections if "Long Page" is active */}
//           {isLongPage && (
//             <>
//               <div className="h-[800px] flex items-center justify-center border-l-2 border-dashed border-slate-300 ml-10">
//                  <span className="text-slate-400 -rotate-90">More content...</span>
//               </div>
              
//               <section className="p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-slate-200 shadow-sm">
//                 <h2 className="text-2xl font-bold mb-4">Gradient Zone 2</h2>
//                 <p className="text-slate-600">
//                   Because the page is long, another gradient appears here on the <strong>Right</strong> (1126px later).
//                 </p>
//               </section>

//               <div className="h-[800px] flex items-center justify-center border-l-2 border-dashed border-slate-300 ml-10">
//                  <span className="text-slate-400 -rotate-90">Even more content...</span>
//               </div>

//               <section className="p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-slate-200 shadow-sm">
//                 <h2 className="text-2xl font-bold mb-4">Gradient Zone 3</h2>
//                 <p className="text-slate-600">
//                   Back to the <strong>Left</strong> side.
//                 </p>
//               </section>
//             </>
//           )}
          
//           <footer className="text-center text-slate-400 py-10">
//             End of Page
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
'use client';

import React, { useEffect, useState } from 'react';

export type BackgroundGradientsProps = {
  count?: number;
};

const BackgroundGradients: React.FC<BackgroundGradientsProps> = ({ count: countProp }) => {
  const [positions, setPositions] = useState<number[]>([]);

  const START_TOP = 995;

  // Blob size (unchanged)
  const WIDTH = 357;
  const HEIGHT = 349;

  const GLOW_COLOR = '#053F31';

  // Zigzag spacing
  const LEFT_GAP = 313;
  const RIGHT_GAP = 588;

  useEffect(() => {
    if (countProp !== undefined && countProp !== null) {
      // Generate fixed count positions properly
      const manualPositions: number[] = [];
      let currentTop = START_TOP;
      let isLeft = true;

      for (let i = 0; i < countProp; i++) {
        manualPositions.push(currentTop);

        const gap = isLeft ? LEFT_GAP : RIGHT_GAP;
        currentTop = currentTop + HEIGHT + gap;
        isLeft = !isLeft;
      }

      setPositions(manualPositions);
      return;
    }

    const calculateBlobs = () => {
      const fullHeight = document.documentElement.scrollHeight;
      const newPositions: number[] = [];

      let currentTop = START_TOP;
      let isLeft = true;

      while (currentTop < fullHeight) {
        newPositions.push(currentTop);

        const gap = isLeft ? LEFT_GAP : RIGHT_GAP;
        currentTop = currentTop + HEIGHT + gap;
        isLeft = !isLeft;
      }

      setPositions(newPositions);
    };

    calculateBlobs();
    window.addEventListener('resize', calculateBlobs);

    const resizeObserver = new ResizeObserver(() => calculateBlobs());
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener('resize', calculateBlobs);
      resizeObserver.disconnect();
    };
  }, [countProp]);

  return (
    <div className="max-w-[1920px] mx-auto absolute inset-0 pointer-events-none -z-10 overflow-hidden">
      {positions.map((topPosition, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              top: `${topPosition}px`,
              left: isLeft ? '-100px' : 'auto',
              right: !isLeft ? '-100px' : 'auto',
              width: `${WIDTH}px`,
              height: `${HEIGHT}px`,
              backgroundColor: GLOW_COLOR,
              filter: 'blur(250px)',
              opacity: 0.5,
            }}
          />
        );
      })}
    </div>
  );
};

/**
 * Zig-zag gradient strip (unchanged)
 */
export function ZigZagGradientStrip() {
  return (
    <div className="w-full relative overflow-hidden" style={{ height: "32px" }} aria-hidden>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 120 32"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="zigzag-gradient-home" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#F7FAF8" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          fill="url(#zigzag-gradient-home)"
          d="M0 0h120v32l-15-16 15-16-15-16 15-16-15-16 15-16-15-16 15-16-15-16 15-16-15-16L0 32Z"
        />
      </svg>
    </div>
  );
}

export default BackgroundGradients;