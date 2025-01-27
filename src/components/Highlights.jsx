import React, { useCallback, useEffect, useState } from 'react'
import WatchIcon from './icons/WatchIcon';
import PlayIcon from './icons/PlayIcon';
import PauseIcon from './icons/PauseIcon';
import ReplayIcon from './icons/ReplayIcon';
import gsap from 'gsap';

import {
  hl_img1,
  hl_img2,
  hl_img3,
  hl_img4,
  hl_img5,
  hl_img6
} from '../constants/highlights';

const imgs = [
  {src: hl_img1, caption: 'The first iPhone built for Apple Intelligence. Personal, private, powerful.'},
  {src: hl_img2, caption: 'So fast. So fluid. Get a feel for the all-new Camera Control.'},
  {src: hl_img3, caption: '4K 120 fps Dolby Vision. 4 studio-quality mics. A Pro studio in your pocket.'},
  {src: hl_img4, caption: 'Our thinnest borders yet — for even larger displays. Brilliant.'},
  {src: hl_img5, caption: 'All-new A18 Pro chip powers unrivaled intelligence. And unprecedented performance.'},
  {src: hl_img6, caption: 'A huge leap in battery life. Game on.'}
]
const initialState = {
  currImgIdx: 0,
  isPlaying: false,
  hasEnded: false
}

const Highlights = () => {
  const [slider, setSlider] = useState(initialState);
  const { currImgIdx, isPlaying, hasEnded } = slider;
  const [timeline, setTimeline] = useState(null);

  const upateCurrImg = () => {
    setSlider((prev) => {
      const prevCurrImgIdx = prev.currImgIdx;
      const lastImgIdx = imgs.length - 1;
      return {
        currImgIdx:
          prevCurrImgIdx === lastImgIdx ? prevCurrImgIdx : prevCurrImgIdx + 1,
        isPlaying: prevCurrImgIdx === lastImgIdx ? false : true,
        hasEnded: prevCurrImgIdx === lastImgIdx ? true : false,
      };
    });
  };

  const createTimeline = useCallback(
    (startIdx) => {
      if (timeline) timeline.kill(); // Kill current timeline;

      // Reset all dots to intial state except start dot.
      imgs.forEach((_, idx) => {
        if (idx !== startIdx) {
          gsap.to(`.navDot-${idx}`, { width: 0, duration: 0 });
        }
      });

      const newTimeline = gsap.timeline({ paused: true });
      imgs.slice(startIdx).forEach((_, idx) => {
        newTimeline.to(`.navDot-${idx + startIdx}`, {
          width: "100%",
          duration: 7,
          ease: "sine",
          onComplete: () => {
            upateCurrImg();
            if (idx + startIdx !== imgs.length - 1) {
              gsap.to(`.navDot-${idx + startIdx}`, { width: 0, duration: 0 });
            }
          },
        });
      });
      return newTimeline;
    },
    [currImgIdx]
  );

  useEffect(() => {
    const timeline = createTimeline(currImgIdx);
    setTimeline(timeline);
  }, []);

  const playPauseReplay = useCallback(() => {
    const action = isPlaying ? "pause" : hasEnded ? "replay" : "play";

    if (action === "play") {
      setSlider((prev) => ({ ...prev, isPlaying: true }));
      timeline.play();
    } else if (action === "pause") {
      setSlider((prev) => ({ ...prev, isPlaying: false }));
      timeline.pause();
    } else if (action === "replay") {
      setSlider({ ...initialState, isPlaying: true });
      const newTimeline = createTimeline(0); // Recreate timeline from start
      setTimeline(newTimeline);
      newTimeline.play();
    }
  }, [isPlaying, hasEnded, timeline]);

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

    const updateNavWrapperHeight = () => {
      const section = document.getElementById('hl-section');
      const sectionHeight = section.offsetHeight
      const scrolledHeight = calculateScrolledHeight(section);
      const navWrapper = document.getElementById('nav-wrapper')

      if (scrolledHeight < 180) {
        navWrapper.style.height = '90px'
        return
      }

      // -20 to leave a space between the nav and the bottom edge of the view port;
      // -100 to set the max height of the nav wrapper (sectionHeight - 100);
      const navWrapperHeight = Math.min(scrolledHeight -20, sectionHeight - 100);
      navWrapper.style.height = `${navWrapperHeight}px`
    };

    // Update nav wrapper height initially.
    updateNavWrapperHeight();

    window.addEventListener('scroll', updateNavWrapperHeight);
    window.addEventListener('resize', updateNavWrapperHeight);
    return () => {
      window.removeEventListener('scroll', updateNavWrapperHeight);
      window.removeEventListener('resize', updateNavWrapperHeight);
    };
  }, []);
  //*** Scroll related logic end ***//

  return (
    <section
      id="hl-section"
      className="relative pt-28 pb-56 bg-[#1d1d1f] text-[#f5f5f7]"
    >
      {/* Section header */}
      <div className="734px:flex justify-between items-end w-[85vw] ml-[clamp(10px,7vw,200px)]">
        <h2 className="text-[28px] 734px:text-5xl text-[#e2e0dc] font-semibold tracking-[0.004em] leading-[1.125] ">
          Get the highlights.
        </h2>
        <div className="flex-center gap-1 mt-4 w-fit 734px:mt-0 cursor-pointer text-[#2997ff]">
          <span className="hover:underline">Watch the film</span>
          <WatchIcon className={"size-4"} />
        </div>
      </div>

     {/* {Section images slider} */}
      <div className="mt-12 pl-[clamp(10px,7vw,200px)] overflow-hidden">
        <div
          className="grid grid-cols-[85vw_85vw_85vw_85vw_85vw_85vw] gap-[2vw]"
          style={{ transform: `translateX(-${slider.currImgIdx * 87}vw)` }}
        >
          {imgs.map(({ src, caption }, idx) => {
            const { xsm, sm, md, lg, xlg } = src;
            const imgsSharedCls = " w-full object-cover rounded-[28px]";
            return (
              <div key={idx} className="relative bg-black rounded-[28px]">
                <img src={xsm} className={`block 480px:hidden h-[480px] ${imgsSharedCls}`} alt="iPhone"/>
                <img src={sm} className={`hidden 480px:block 734px:hidden h-[560px] ${imgsSharedCls}`} alt="iPhone"/>
                <img src={md} className={`hidden 734px:block 1068px:hidden h-[628px] ${imgsSharedCls}`} alt="iPhone"/>
                <img src={lg} className={`hidden 1068px:block 1440px:hidden h-[680px] ${imgsSharedCls}`} alt="iPhone"/>
                <img src={xlg} className={`hidden 1440px:block h-[740px] ${imgsSharedCls}`} alt="iPhone"/>

                <div className="absolute inset-0">
                  <p className="text-[17px] text-[#ffffffeb] font-semibold max-w-[212px] text-center my-7 mx-auto 480px:text-[21px] 734px:text-2xl 734px:w-[320px] 734px:max-w-none 1068px:text-[28px] 1068px:text-left 1068px:ml-12 1440px:w-[400px]">
                    {caption}
                    {idx === 0 && <sup className="underline decoration-2">2</sup>}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* {Slider navigation} */}
      <div id="nav-wrapper" className="absolute top-0 left-1/2 -translate-x-1/2 h-[90px] rounded-[32px] flex justify-center items-end">
        <div className="w-fit mx-auto flex-center gap-[15px]">
          <button
            className="flex-center w-14 h-14 rounded-full cursor-pointer bg-[#424245b3] hover:bg-[#49494cb9] transition-colors duration-200"
            onClick={playPauseReplay}
          >
            {isPlaying ? <PauseIcon /> : hasEnded ? <ReplayIcon /> : <PlayIcon />}
          </button>
          <div className="flex-center px-4 w-[200px] 734px:w-[216px] h-14 rounded-[32px] bg-[#424245b3]">
            {Array.from({ length: imgs.length }, (_, idx) => idx).map((idx) => {
              return (
                <div
                  key={idx}
                  className={`relative inline-block h-2 rounded-full bg-[#f5f5f7cc] mx-2
                    ${currImgIdx === idx ? "w-[30px] 734px:w-12" : " w-2 cursor-pointer hover:bg-[#ffffff7a] transition-colors duration-[.25]"}
                  `}
                  onClick={() => {
                    setSlider(() => ({ ...initialState, currImgIdx: idx }));
                    setTimeline(createTimeline(idx));
                  }}
                >
                  <div className={`navDot-${idx}
                    ${currImgIdx === idx ? "curr-navDot" : ""} w-0 rounded-full absolute inset-0 bg-white
                  `}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
