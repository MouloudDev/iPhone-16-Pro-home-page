import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SearchContent from './Search';
import Cart from './Cart';
import MobileNavList from './MobileNavList';
import React, { useRef } from 'react';
import XIcon from '../icons/XIcon';

const tabs = [
  {name: 'search', Component: <SearchContent />},
  {name: 'cart', Component: <Cart />},
  {name: 'navList', Component: <MobileNavList />}
]

const MobileNavPopup = ({currContent, setCurrContent}) => {
  const popupRef = useRef(null);
  const hideContent = () => setCurrContent(null);

  useGSAP(() => {
    if (!popupRef.current) return;

    let timeLine = gsap.timeline();
    const slideDownProps = {height: 'auto', duration: .8, ease: 'power2.inOut'}
    const slideUpProps = {...slideDownProps, height: '0vh'}

    if (currContent) timeLine.to(popupRef.current, slideDownProps)
    else timeLine.to(popupRef.current, slideUpProps)
  }, [currContent])

  return (
    <div
      ref={popupRef}
      className='absolute inset-0 z-10 h-0 bg-[#161617] overflow-hidden laptop:top-10 laptop:max-h-[50vh]'
      onMouseLeave={() => {
        // Hide content on mouse leave. but only on large screens
        if (window.innerWidth >= 833) hideContent();
      }}
    >
     <div className='max-w-[996px] mx-auto'>
      <XIcon onClick={hideContent} className='float-right mt-[17px] mr-5' />
        {tabs.map(({ name, Component }) =>
          currContent === name && (
            <React.Fragment key={name}>{Component}</React.Fragment>
          )
        )}
     </div>
    </div>
  );
}

export default MobileNavPopup;
