import React, { useEffect, useRef } from 'react';
import CircularGallery from './ThreeDImage.jsx';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';

const ImageRing = () => {
  const desktopSectionRef = useRef(null);
  const mobileSectionRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    // Observer for desktop section
    const desktopObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay for each image in desktop section
            imageRefs.current.forEach((img, index) => {
              if (img && img.closest('.hidden.md\\:flex')) {
                setTimeout(() => {
                  img.classList.add('fade-in-visible');
                }, index * 150); // 150ms delay between each image
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observer for mobile section
    const mobileObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger mobile gallery animation
            const mobileGallery = document.querySelector('.mobile-gallery');
            if (mobileGallery) {
              mobileGallery.classList.add('fade-in-visible');
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    // Start observing
    if (desktopSectionRef.current) {
      desktopObserver.observe(desktopSectionRef.current);
    }
    if (mobileSectionRef.current) {
      mobileObserver.observe(mobileSectionRef.current);
    }

    // Store observers for cleanup
    observers.push(desktopObserver, mobileObserver);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Function to add ref to each image
  const addToRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen py-4'>
      {/* Desktop Section */}
      <div 
        ref={desktopSectionRef}
        className='hidden md:flex flex-row w-screen  overflow-scroll md:overflow-hidden justify-center items-center relative scale-70 md:scale-100'
      >
        {/* 1 */}
        <div 
          ref={addToRefs}
          className="
            relative rounded-2xl overflow-hidden shadow-xl shrink-0 
            transition-all duration-300 
            w-50 h-110 [clip-path:polygon(0_0,500%_70%,100%_85%,0_100%)]
            transform rotate-y-30 translate-z-12 translate-y-4
            preserve-3d rounded-tr-4xl rounded-tl-4xl rounded-br-4xl rounded-bl-4xl transform-style-3d
            fade-in-item mx-2
          "
        >
          <img 
            src={image1} 
            alt="Profile 1" 
            className="w-full h-full object-cover" 
          />
        </div>
        {/* 2 */}
        <div 
          ref={addToRefs}
          className="
            relative rounded-2xl overflow-hidden shadow-xl shrink-0 
            transition-all duration-300 
            w-40 h-77 [clip-path:polygon(0_0,700%_70%,100%_85%,0_100%)]
            transform rotate-y-30 translate-z-12 translate-y-3
            preserve-3d rounded-tr-4xl rounded-br-4xl transform-style-3d
            fade-in-item mx-2
          "
        >
          <img 
            src={image7} 
            alt="Profile 7" 
            className="w-full h-full object-cover" 
          />
        </div>
        {/* 3 */}
        <div 
          ref={addToRefs}
          className="
            relative rounded-2xl overflow-hidden shrink-0 
            transition-all duration-300 
            w-32 h-54 [clip-path:polygon(0_0,700%_40%,100%_90%,0_100%)]
            transform rotate-y-30 translate-z-12 translate-y-1
            preserve-3d rounded-tr-4xl rounded-br-4xl transform-style-3d
            fade-in-item mx-2
          "
        >
          <img 
            src={image2} 
            alt="Profile 4" 
            className="w-full h-full object-cover" 
          />
        </div>
        {/* 4 */}
        <div 
          ref={addToRefs}
          className="
            relative rounded-2xl overflow-hidden shrink-0 
            transition-all duration-300 
            w-30 h-42 
            transform rotate-y-0 translate-z-[-50px]
            preserve-3d
            opacity-100
            fade-in-item mx-2
          "
        >
          <img 
            src={image8} 
            alt="Profile 8" 
            className="w-full h-full object-cover" 
          />
        </div>
        {/* 5 */}
        <div 
          ref={addToRefs}
          className="
            relative rounded-2xl overflow-hidden shrink-0 
            transition-all duration-300 
            w-30 h-42 
            transform rotate-y-0 translate-z-[-50px]
            preserve-3d
            opacity-100
            fade-in-item mx-2
          "
        >
          <img 
            src={image4} 
            alt="Profile 4" 
            className="w-full h-full object-cover" 
          />
        </div>
        {/* 6 */}
        <div 
          ref={addToRefs}
          className="
            relative rounded-2xl overflow-hidden shrink-0 
            transition-all duration-300 
            w-32 h-56 [clip-path:polygon(0_5%,700%_-20%,100%_100%,0_89%)]
            transform -rotate-y-30 translate-z-12 translate-y-2
            preserve-3d rounded-tr-4xl rounded-tl-4xl rounded-br-4xl rounded-bl-4xl transform-style-3d
            fade-in-item mx-2
          "
        >
          <img 
            src={image6} 
            alt="Profile 6" 
            className="w-full h-full object-cover" 
          />
        </div>
        {/* 7 */}
        <div 
          ref={addToRefs}
          className="
            relative rounded-2xl overflow-hidden shrink-0 
            transition-all duration-300 
            w-40 h-77 [clip-path:polygon(0_10%,700%_-50%,100%_100%,0_85%)]
            transform -rotate-y-30 translate-z-12 translate-y-4
            preserve-3d rounded-tr-4xl rounded-tl-4xl rounded-br-4xl rounded-bl-4xl transform-style-3d
            fade-in-item mx-2
          "
        >
          <img 
            src={image3} 
            alt="Profile 3" 
            className="w-full h-full object-cover" 
          />
        </div>
        {/* 8 */}
        <div 
          ref={addToRefs}
          className="
            relative rounded-2xl overflow-hidden shadow-xl shrink-0 
            transition-all duration-300 
            w-50 h-110 [clip-path:polygon(0_15%,700%_-80%,100%_100%,0_85%)]
            transform -rotate-y-30 translate-z-12 translate-y-4
            preserve-3d rounded-tr-4xl rounded-tl-4xl rounded-br-4xl rounded-bl-4xl transform-style-3d
            fade-in-item mx-2
          "
        >
          <img 
            src={image5} 
            alt="Profile 5" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Mobile Section */}
      <div 
        ref={mobileSectionRef}
        className='w-screen h-full flex md:hidden justify-center items-center'
      >
        <div className='w-screen h-full md:h-screen flex justify-center items-center mobile-gallery fade-in-item'>
          <CircularGallery bend={4} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        .fade-in-item {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Ensure smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}

export default ImageRing;