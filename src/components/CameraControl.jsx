import React, { useEffect, useRef, useState } from 'react'
import { ccCrslImgs, mainImg } from '../constants/camera-control'
import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';

const CameraControl = () => {
  const [currImgIdx, setCurrImgIdx] = useState(0);
    const crslGridRef = useRef(null);
    const crslGridColRef = useRef(null);

    const isFirstImg = currImgIdx === 0;
    const isLastImg = currImgIdx === ccCrslImgs.length -1;

    const stateClasses = {
      activeBtnCls: 'cursor-pointer bg-[#333234] hover:bg-[#49494cb9] active:bg-[#39393cbd] transition-colors duration-300 group',
      inactiveBtnCls: 'bg-[#1b1918]',
      activeIconCls: 'fill-[#ffffffcc] group-hover:fill-white transition-colors duration-300',
      inactiveIconCls: 'fill-[#767677]'
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
    <section className='mt-20 pb-24'>
      <div>
        <h2 className='hidden'>Take total</h2>
        <h3 className='text-[40px] text-[#c8c2bd] text-center font-semibold leading-[1.1] 734px:text-[64px] 1068px:text-[80px]'>
          Take total <br />
          <span className='text-glow text-white'>Camera Control.</span>
        </h3>
      </div>

      <div className='mt-20'>
        <img src={mainImg.xsm} className='block 480px:hidden w-full h-auto object-cover' alt='iPhone Camera' />
        <img src={mainImg.sm} className='hidden 480px:block 734px:hidden w-full h-auto object-cover' alt='iPhone Camera' />
        <img src={mainImg.md} className='hidden 734px:block 1068px:hidden w-full h-auto object-cover' alt='iPhone Camera' />
        <img src={mainImg.lg} className='hidden 1068px:block 1440px:hidden w-full h-auto object-cover' alt='iPhone Camera' />
        <img src={mainImg.xlg} className='hidden 1440px:block w-full h-auto object-cover max-w-[1680px] mx-auto' alt='iPhone Camera' />
      </div>
      <div className='my-16 pl-[clamp(48px,12%,260px)] 734px:p-0 w-fit max-w-[80%] 734px:mx-auto flex flex-col gap-10 734px:flex-row 1068px:gap-[clamp(64px,30%,230px)]'>
        <p className='pr-3 734px:w-[90%] max-w-[400px] text-[#86868b] font-semibold text-[19px] 734px:text-[17px] 1068px:text-[21px]'>
          Now you can take the perfect photo or video in record time. Camera Control gives you an
          <strong className='text-[#f5f5f7]'> easier way to quickly access camera tools</strong>.
          Simply slide your finger to adjust camera functions like exposure or depth of field, and toggle through each lens or use digital zoom to frame your shot — just how you like it.
        </p>

        <div className='mb-8 pr-3 734px:w-[90%] max-w-xl '>
          <p className='text-[#86868b] font-semibold text-[19px] 734px:text-[17px] 1068px:text-[21px]'>
            Camera Control features a two-stage shutter that lets you
            <strong className='text-[#f5f5f7]'> automatically lock focus and exposure </strong>
            with a light press — so you can reframe your shot without losing focus on your subject.
          </p>
          <a href="#camera-control" className='block mt-8 1068px:mt-12 max-w-[171px] 480px:max-w-fit text-[17px] text-[#2997ff] font-semibold cursor-pointer decoration-[#2997ff] after:content-["＞"] after:font-semibold after:relative after:top-[1.5px] group'>
          <span className="group-hover:underline leading-4">How to use Camera Control</span>
          </a>
        </div>
      </div>

      {/* Carousel */}
      <div className='overflow-hidden pl-[clamp(48px,12%,260px)]'>
        <div ref={crslGridRef} className='grid grid-cols-[repeat(4,max-content)] gap-8'>
          {ccCrslImgs.map((img, idx) => {
            const {sm, md, lg, xlg, caption} = img;
            const imgsSharedCls = 'object-cover rounded-[18px]'
            return (
              <div
                key={idx}
                // Only attach ref to first item
                ref={idx === 0 ? crslGridColRef : null}
              >
                <img src={sm} className={`block 734px:hidden w-[295px] h-[295px] ${imgsSharedCls}`} alt='iPhone Camera' />
                <img src={md} className={`hidden 734px:block 1068px:hidden w-[462px] h-[462px] ${imgsSharedCls}`} alt='iPhone Camera' />
                <img src={lg} className={`hidden 1068px:block 1440px:hidden w-[520px] h-[520px] ${imgsSharedCls}`} alt='iPhone Camera' />
                <img src={xlg} className={`hidden 1440px:block w-[550px] h-[550px] ${imgsSharedCls}`} alt='iPhone Camera' />

                <div className='p-[32px_5px_20px_34px] max-w-[232px] 734px:max-w-[421px]'>
                  <p className='text-[14px] 734px:text-[17px] text-[#86868b] max-w-full leading-[1.2858] font-semibold tracking-[-0.016em]'>
                    {caption.split('<strong>').map((txt, idx) =>
                      txt.startsWith('*strong*') ?
                      <strong key={idx} className='text-[#f5f5f7] font-semibold'>{txt.replace('*strong*', '')}</strong> :
                      <span key={idx}>{txt}</span>
                    )}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Carousel navigation */}
      <div className='flex justify-end items-center gap-6 pt-6 max-w-[90%]'>
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
              prev === ccCrslImgs.length -1 ? prev : prev + 1
            )
          }}
        >
          <ChevronRight className={isLastImg ? stateClasses.inactiveIconCls : stateClasses.activeIconCls}/>
        </button>
      </div>
    </section>
  )
}

export default CameraControl
