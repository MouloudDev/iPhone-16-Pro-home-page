import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import navData from '../../constants/navData';
import Search from './Search';
import Cart from './Cart';
import DynamicNavContent from './DynamicNavContent';

const LaptopNavPopup = ({currContent}) => {
  const popupRef = useRef(null);

  useGSAP(() => {
    if (!popupRef.current) return;

    const popupHeight = popupRef.current.scrollHeight
    const slideDownProps = {height: popupHeight, duration: 0.35, ease: 'sine.out', opacity: 1}
    const slideUpProps = {...slideDownProps, height: '0',opacity: 0};

    if (currContent) gsap.to(popupRef.current, slideDownProps);
    else gsap.fromTo(popupRef.current, slideDownProps, slideUpProps)

  }, [currContent])

  const data = navData[currContent];

  return (
    <div
      ref={popupRef}
      className='absolute inset-0 opacity-0 h-0 overflow-hidden px-2 pt-12 pb-5 bg-[rgb(29,29,31)]'
    >
      <div className='max-w-5xl mx-auto'>
        {currContent && (
          currContent === 'search' ? <Search parentComp={'LaptopNav'}/> :
          currContent === 'cart' ? <Cart /> :
          <DynamicNavContent data={data} />
        )}
      </div>
    </div>
  )
}

export default LaptopNavPopup;
