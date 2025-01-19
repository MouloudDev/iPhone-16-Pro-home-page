import { intlImg, iPhoneLgImg, iPhoneSmImg } from '../constants/hero'

const Hero = () => {
  return (
    <section className='relative z-0 pb-28'>
      <div className='text-center bg-neutral-900 px-14 py-4 rounded-md backdrop-blur-sm'>
        <p className='text-sm text-[#f5f5f7] leading-[1.4286] font-medium tracking-[-0.016em] opacity-85'>
          Get $180–$650 in credit toward iPhone 16 or iPhone 16 Pro when you
          trade in iPhone 12 or higher.<sup className='underline underline-offset-[-2px]'>*</sup>
          <a href='#buy' className='text-[#2997ff] m-1 after:content-[">"] after:ml-[1px] hover:underline'>
            Buy
          </a>
        </p>
      </div>

      <div className='relative mt-11 mx-auto overflow-hidden h-[clamp(335px,110vw,450px)] 480px:h-[clamp(300px,110vw,330px)] 734px:h-[445px] 1068px:h-[640px] 1440px:h-[820px]'>
        <h1 className='absolute inset-0 z-30 translate-y-[25%] flex justify-center bg-gradient-to-b from-orange-50 to-orange-100 bg-clip-text text-transparent text-[24px] 1068px:text-[28px] leading-[1.1667] font-semibold tracking-[0.009em] antialiased text-white m-0 p-0 text-center max-w-[430px] h-[214px] 480px:w-[311px] 734px:w-[462px] 1068px:w-[693px] 1068px:h-[346px] 1440px:w-[844px] 1440px:h-[392px] mx-auto'>
          iPhone 16 Pro
        </h1>
        <img src={intlImg} className='relative inset-0 z-30 w-[430px] h-[214px] 480px:w-[311px] 734px:w-[462px] 1068px:w-[693px] 1068px:h-[346px] 1440px:w-[844px] 1440px:h-[392px] block mx-auto object-contain'/>

        <img src={iPhoneSmImg} className='480px:hidden translate-y-[clamp(-110px,-40%,60px)] w-full h-auto object-contain'/>
        <img src={iPhoneLgImg} className='hidden 480px:block mx-auto w-[568px] h-[488px] 734px:w-[836px] 734px:h-[718px] 1068px:w-[1238px] 1068px:h-[1066px] 1440px:w-[1588px] 1440px:h-[1362px] translate-y-[clamp(-310px,-50%,60px)] 1068px:-translate-y-[500px] 1440px:-translate-y-[600px]'/>
      </div>

      <div>
        <a className='px-[15px] py-2 mx-auto text-[17px] text-center whitespace-nowrap rounded-[980px] bg-[#005ab6] flex-center w-fit cursor-pointer hover:bg-[rgba(0,118,223,.9)] transition-colors duration-150'>Buy</a>
        <p className='mt-[18px] text-center text-[17px] text-[#e8e6e3] font-semibold'>From $999 or $41.62/mo. for 24 mo.<sup className='underline underline-offset-[2px]'>1</sup></p>
        <p className='text-center text-[17px] text-[#9d9588] mt-[2px]'>Apple Intelligence available now<sup className='underline underline-offset-[2px]'>2</sup></p>
      </div>
    </section>
  );
}

export default Hero
