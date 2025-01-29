import React, { useEffect, useRef, useState } from 'react'
import { ftCrslImgs, imgSm, imgXl } from '../constants/featrues';
import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';

const Features = () => {
  const [currImgIdx, setCurrImgIdx] = useState(0);
  const crslGridRef = useRef(null);
  const crslGridColRef = useRef(null);

  const isFirstImg = currImgIdx === 0;
  const isLastImg = currImgIdx === ftCrslImgs.length -1;

  const stateClasses = {
    activeBtnCls: "cursor-pointer bg-[#333234] hover:bg-[#49494cb9] active:bg-[#39393cbd] transition-colors duration-300 group",
    inactiveBtnCls: "bg-[#1b1918]",
    activeIconCls: "fill-[#ffffffcc] group-hover:fill-white transition-colors duration-300",
    inactiveIconCls: "fill-[#767677]"
  };

  useEffect(() => {
    const crslGrid = crslGridRef.current;
    const crslGridCol = crslGridColRef.current;

    if (!crslGrid || !crslGridCol) return;

    const colWidth = crslGridCol.getBoundingClientRect().width;
    const crslGridGap = 32; // gap-8 = 32px;

    // Position carousel grid depending on: column width and currImgIdx values
    crslGrid.style.transform = `translateX(-${(colWidth + crslGridGap)*currImgIdx}px)`;

  }, [currImgIdx])

  return (
    <section className="mt-20 pb-48">
      <div>
        <h2 className="hidden">Design</h2>
        <h3 className="text-[40px] text-[#c8c2bd] text-center font-semibold leading-[1.1] 734px:text-[64px] 1068px:text-[80px]">
          Strength. Beauty. <br />
          <span className='text-glow text-white'>Titanium.</span>
        </h3>
      </div>

      <div className='mt-20 overflow-hidden'>
        <img src={imgSm} className='734px:hidden block w-full h-auto object-cover' alt='iPhone' />
        <img src={imgXl} className='hidden 734px:block w-full h-auto object-cover scale-110 1068px:scale-100' alt='iPhone' />
      </div>

      <div className='bg-[radial-gradient(100%_50%_at_center,#2c201a,#000)]'>
        <div className='my-16 pl-[clamp(48px,15%,260px)] 734px:flex justify-center items-center gap-16 1068px:gap-[clamp(64px,30%,230px)]'>
          <p className='my-8 pr-3 h-full max-w-[465px] text-[#86868b] font-semibold text-[19px] 734px:text-[17px] 1068px:text-[21px]'>
            iPhone 16 Pro features a Grade 5 titanium design with a new, refined microblasted texture. Titanium has one of the highest strength-to-weight ratios of any metal, making these models
            <strong className='text-[#f5f5f7]'> incredibly strong and impressively light. </strong>
            iPhone 16 Pro comes in four stunning finishes — including new Desert Titanium.
          </p>

          <p className='my-8 pr-3 h-full max-w-[465px] text-[#86868b] font-semibold text-[19px] 734px:text-[17px] 1068px:text-[21px]'>
            Internal design improvements — including a 100 percent recycled aluminum thermal substructure and back glass optimizations that further dissipate heat — enable up to 20 percent
            <strong className='text-[#f5f5f7]'> better sustained performance </strong>
            than iPhone 15 Pro. So you can do all the things you love — like high-intensity gaming — for longer.
          </p>
        </div>

        {/* Carousel */}
        <div className='overflow-hidden'>
          <div ref={crslGridRef} className='grid grid-cols-[repeat(4,max-content)] gap-8 pl-[clamp(48px,15%,260px)]'>
            {ftCrslImgs.map((img, idx) => {
              const {sm, md, lg, xlg, caption} = img;
              const imgsSharedCls = 'object-cover rounded-[18px]'
              return (
                <div
                  key={idx}
                  // Only attach ref to first item
                  ref={idx === 0 ? crslGridColRef : null}
                >
                  <img src={sm} className={`block 734px:hidden w-[295px] h-[295px] ${imgsSharedCls}`} alt='iPhone' />
                  <img src={md} className={`hidden 734px:block 1068px:hidden w-[462px] h-[462px] ${imgsSharedCls}`} alt='iPhone' />
                  <img src={lg} className={`hidden 1068px:block 1440px:hidden w-[520px] h-[520px] ${imgsSharedCls}`} alt='iPhone' />
                  <img src={xlg} className={`hidden 1440px:block w-[550px] h-[550px] ${imgsSharedCls}`} alt='iPhone' />

                  <div className='p-[32px_5px_20px_34px] max-w-[232px] 734px:max-w-[421px]'>
                    <p className='text-[14px] 734px:text-[17px] max-w-full leading-[1.2858] font-semibold tracking-[-0.016em] bg-gradient-to-r from-[#efcdbb] via-[#dab8a4] to-[#a3735e] bg-clip-text text-transparent'>
                      {caption}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Carousel navigation */}
        <div className='flex justify-end items-center gap-6 pt-14 max-w-[90%]'>
          <button
            className={`flex-center w-9 h-9 rounded-full ${isFirstImg ? stateClasses.inactiveBtnCls : stateClasses.activeBtnCls}`}
            disabled={isFirstImg}
            onClick={() => {
              setCurrImgIdx(prev =>
                prev === 0 ? prev : prev - 1
              )
            }}
          >
            <ChevronLeft className={isFirstImg ? stateClasses.inactiveIconCls : stateClasses.activeIconCls}/>
          </button>
          <button
            className={`flex-center w-9 h-9 rounded-full ${isLastImg ? stateClasses.inactiveBtnCls : stateClasses.activeBtnCls}`}
            disabled={isLastImg}
            onClick={() => {
              setCurrImgIdx(prev =>
                prev === ftCrslImgs.length -1 ? prev : prev + 1
              )
            }}
          >
            <ChevronRight className={isLastImg ? stateClasses.inactiveIconCls : stateClasses.activeIconCls}/>
          </button>
        </div>

        <div className='my-16 pl-[clamp(48px,15%,260px)] 734px:flex justify-center items-center gap-16 1068px:gap-[clamp(64px,30%,230px)]'>
          <p className='my-8 pr-3 h-full max-w-[465px] text-[#86868b] font-semibold text-[19px] 734px:text-[17px] 1068px:text-[21px]'>
            New display technology allows us to route display data under active pixels with no distortion, resulting in thinner borders for larger 6.3-inch and 6.9-inch
            <strong className='text-[#f5f5f7]'> Super Retina XDR displays </strong>
            that feel great in your hand.
          </p>

          <p className='my-8 pr-3 h-full max-w-[465px] text-[#86868b] font-semibold text-[19px] 734px:text-[17px] 1068px:text-[21px]'>
            iPhone 16 Pro is splash, water, and dust resistant.4 It also has our latest-generation Ceramic Shield material that’s
            <strong className='text-[#f5f5f7]'> two times tougher than any smartphone glass. </strong>
            Talk about durable.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
