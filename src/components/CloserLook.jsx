import React, { useEffect, useState } from 'react'
import {img1, img2, img3, img4, img5} from '../constants/closer-look';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const colors = [
  {
    bgColor: 'bg-[conic-gradient(from_0deg_at_50%_50%,_#202121_0%,_#dbdad7_25%,_#a6a198_50%,_#a8907e_75%,_#202121_100%)]',
    img: img1,
    caption: '6.3” iPhone 16 Pro3 in four colors'
  },
  {bgColor: 'bg-[#1d1d1f]', img: img2, caption: '6.9” iPhone 16 Pro Max3 & 6.3” iPhone 16 Pro3 in Black Titanium'},
  {bgColor: 'bg-[#f2f1ed]', img: img3, caption: '6.9” iPhone 16 Pro Max3 & 6.3” iPhone 16 Pro3 in White Titanium'},
  {bgColor: 'bg-[#c2bcb2]', img: img4, caption: '6.9” iPhone 16 Pro Max3 & 6.3” iPhone 16 Pro3 in Natural Titanium'},
  {bgColor: 'bg-[#bfa48f]', img: img5, caption: '6.9” iPhone 16 Pro Max3 & 6.3” iPhone 16 Pro3 in Desert Titanium'},
]

const CloserLook = () => {
  const [currImgIdx, setCurrImgIdx] = useState(0);
  const [showBlueCricle, setShowBlueCircle] = useState(false);

  // Extract current img and its caption.
  const {img, caption} = colors[currImgIdx];

  useEffect(() => {
    if (!showBlueCricle) return;

    const hideBlueCircle = () => setShowBlueCircle(false);
    document.addEventListener('click', hideBlueCircle);

    return () => {
      document.removeEventListener('click', hideBlueCircle)
    }
  }, [showBlueCricle]);

  useGSAP(() => {
    gsap.fromTo('#currImg',
      {opacity: .3},
      {
        opacity: 1,
        filter: () => [1, 3, 4].includes(currImgIdx) && 'brightness(1.3)',
        duration: 2,
        ease: 'sine'
      }
    )
  }, [currImgIdx])

   //*** Scroll related logic start ***//
    useEffect(() => {
      const calculateScrolledHeight = (element) => {
        const rect = element.getBoundingClientRect();
        const elementHeight = element.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Calculate how much of the element has been scrolled past or is currently visible
        const scrolledHeight = Math.min(
          Math.max(viewportHeight - rect.top, 0), // Ensure the value is non-negative
          elementHeight // Ensure it doesn't exceed the element's height
        );

        return scrolledHeight;
      }

      const updateClrNavWrapperHeight = () => {
        const section = document.getElementById('cl-section');
        const sectionHeight = section.offsetHeight
        const scrolledHeight = calculateScrolledHeight(section);
        const clrNavWrapper = document.getElementById('color-nav-wrapper')

        if (scrolledHeight < 270) {
          clrNavWrapper.style.height = '120px'
          return
        }

        // -20 to leave a space between the nav and the bottom edge of the view port;
        // -95 to set the max height of the nav wrapper (sectionHeight - 95);
        const clrNavWrapperHeight = Math.min(scrolledHeight -20, sectionHeight - 95);
        clrNavWrapper.style.height = `${clrNavWrapperHeight}px`
      };

      // Update nav wrapper height initially.
      updateClrNavWrapperHeight();

      window.addEventListener('scroll', updateClrNavWrapperHeight);
      window.addEventListener('resize', updateClrNavWrapperHeight);
      return () => {
        window.removeEventListener('scroll', updateClrNavWrapperHeight);
        window.removeEventListener('resize', updateClrNavWrapperHeight);
      };
    }, []);
    //*** Scroll related logic end ***//

  return ( // cl for closer look.
    <section id='cl-section' className='relative pt-16 pb-64'>
      <div className="pt-12">
        <h2 className="text-[28px] 734px:text-5xl 1068px:text-[56px] text-[#f5f5f7] opacity-90 font-semibold tracking-[0.004em] leading-[1.125] my-6 ml-[clamp(10px,7vw,200px)]">
          Take a closer look.
        </h2>
      </div>

      <div className='flex-center overflow-hidden mt-16 mb-4 mx-auto p-4 min-w-[320px] min-h-[180px] max-w-[480px] max-h-[480px] 480px:max-w-[734px] 480px:max-h-[560px] 734px:max-w-[935px] 734px:max-h-[628px] 1068px:max-w-[1260px] 1068px:max-h-[680px] 1440px:max-w-[1680px] 1440px:max-h-[740px]'>
        <img id='currImg' src={img} className='block w-full h-auto object-cover scale-125 1440px:scale-100' alt='iPhone'/>
      </div>

      <div id='color-nav-wrapper' className='absolute top-2 left-1/2 -translate-x-1/2 flex flex-center items-end'>
        <div className='h-full flex flex-col justify-end items-center w-fit'>
          <div className='flex-center mb-3 py-2 px-[6px] rounded-md w-fit mx-auto bg-[rgba(66,66,69,0.7)]'>
            <span className='text-xs text-[#f5f5f7] text-center font-semibold leading-4 select-text'>{caption}</span>
          </div>

          <div className="flex-center w-[236px] h-[58px] rounded-[32px] bg-[#424245b3]">
            {colors.map(({bgColor}, idx) => {
              return (
                <li
                  id={`colorItem-${idx}`}
                  key={idx}
                  className={`
                    flex-center w-[42px] h-[42px] rounded-full bg-transparent cursor-pointer
                    ${showBlueCricle && (idx === currImgIdx) && 'border-[2px] border-[#276787]'}
                    ${idx === currImgIdx && 'cursor-default'}
                  `}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrImgIdx(idx);
                    setShowBlueCircle(true);
                  }}
                >
                  <div
                    onClick={(e) => {
                      if (showBlueCricle && (currImgIdx === idx)) {
                        setShowBlueCircle(false);
                        e.stopPropagation();
                      }
                    }}
                    className={` ${currImgIdx === idx ? 'border-2 border-[#f5f5f7]' : ''} flex-center w-9 h-9 rounded-full bg-transparent`}>
                    <div className={`w-7 h-7 rounded-full border-b-[1.5px] ${bgColor}`} />
                  </div>
                </li>
              );
            })}
          </div>
         </div>
       </div>
    </section>
  );
}

export default CloserLook;
