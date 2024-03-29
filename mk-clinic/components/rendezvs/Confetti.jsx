
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { PiConfettiDuotone } from "react-icons/pi";
export default function ConfettiButton() {
    const SHAPES = ['square', 'triangle'];
const COLOR_DIGIT = "ABCDEF1234567890";
const [isConfettiActive, setConfettiActive] = useState(false);
const containerRef = useRef(null);
useEffect(() => {
    if (isConfettiActive) {
        generateConfetti();
    }
}, [isConfettiActive]);
const generateRandomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += COLOR_DIGIT[Math.floor(Math.random() * COLOR_DIGIT.length)];
    }
    return color;
};
const generateConfetti = () => {
    const container = containerRef.current;    
    if (container) {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            const positionX = Math.random() * window.innerWidth;
            const positionY = Math.random() * window.innerHeight;
            const rotation = Math.random() * 360;
            const size = Math.floor(Math.random() * (20 - 5 + 1)) + 5;            // Set confetti styles
            confetti.style.left = `${positionX}px`;
            confetti.style.top = `${positionY}px`;
            confetti.style.transform = `rotate(${rotation}deg)`;
            confetti.className = 'confetti ' + SHAPES[Math.floor(Math.random() * 3)];
            confetti.style.width = `${size}px`
            confetti.style.height = `${size}px`
            confetti.style.backgroundColor = generateRandomColor();            // Append confetti to the container
            container.appendChild(confetti);            
            // Remove confetti element after animation duration (4 seconds)
            setTimeout(() => {
                container.removeChild(confetti);
            }, 4000);
        }
    }
};
useEffect(()=>{
    setConfettiActive(true);
    // Reset the confetti after a short delay
    setTimeout(() => {
        setConfettiActive(false);
    }, 6000);
},[])
   

  return (
    <div>
        
        <div className='fixed top-0 left-0 w-full h-full pointer-events-none' ref={containerRef} id="confetti-container">
           
        </div>
        <div className='flex flex-col justify-center items-center text-2xl font-bold'>
      
         <div className='flex flex-row gap-6'>
         <PiConfettiDuotone style={{color:"blue",fontSize:"3rem"}}/>
          <p> Merci d'avoir réservé dans notre clinique </p>
          <PiConfettiDuotone style={{color:"blue", transform: "scaleX(-1)",fontSize:"3rem" }} />
         </div>
         
     <img src="/images/confetti.png" alt="dent sourriante" />
     <div className='my-10'>
     <button className=' border-2 border-blue-500 p-2 text-base font-semibold rounded-xl'><Link href="/">Go back to home page</Link> </button>

     </div>

        </div>
    </div>
  )
}
