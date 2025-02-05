import { headlineImgs, mainImgs } from '../../constants/apple-intelligence';
import AiGallery from './AiGallery';
import AiPrivacy from './AiPrivacy';

const {hl_xsm, hl_sm, hl_md, hl_lg} = headlineImgs;
const {mn_xsm, mn_sm, mn_md, mn_lg, mn_xl} = mainImgs;

const AppleIntelligence = () => {
  return (
    <section>
      <div className='flex-center flex-col bg-black'>
        <h2>
          <span className='hidden'>Apple Intelligence</span>
          <img src={hl_xsm} className='block 480px:hidden w-full max-w-[274px] h-auto object-cover' alt='Apple Intelligence' />
          <img src={hl_sm} className='hidden 480px:block 734px:hidden w-full max-w-[307px] h-auto object-cover' alt='Apple Intelligence' />
          <img src={hl_md} className='hidden 734px:block 1068px:hidden w-full max-w-[486px] h-auto object-cover' alt='Apple Intelligence' />
          <img src={hl_lg} className='hidden 1068px:block w-full max-w-[608px] h-auto object-cover' alt='Apple Intelligence' />
        </h2>
        <h3 className='font-semibold text-center text-[#f5f5f7] leading-[1.1] text-[40px] 734px:text-[64px] 1068px:text-[80px]'>
          AI-opening possibilities.
        </h3>
      </div>

      <div className='flex-center mt-10'>
        <img src={mn_xsm} className='block 480px:hidden w-full max-w-[394px] h-auto object-cover' alt='iPhone' />
        <img src={mn_sm} className='hidden 480px:block 734px:hidden w-full max-w-[550px] h-auto object-cover' alt='iPhone' />
        <img src={mn_md} className='hidden 734px:block 1068px:hidden w-full max-w-[684px] h-auto object-cover' alt='iPhone' />
        <img src={mn_lg} className='hidden 1068px:block 1440px:hidden w-full max-w-[934px] h-auto object-cover' alt='iPhone' />
        <img src={mn_xl} className='hidden 1440px:block w-full max-w-[1036px] h-auto object-cover' alt='iPhone' />
      </div>

      <div className='bg-[linear-gradient(black_0%,_rgb(19,19,19)_15%)] bg-bg-repeat px-7 pb-24'>
        <p className='mx-auto my-8 h-full w-[clamp(200px,60%,500px)] 1068px:w-[clamp(200px,70%,750px)] text-center text-[#86868b] font-semibold text-[19px] 734px:text-[17px] 1068px:text-[21px]'>
          iPhone 16 Pro is built for Apple Intelligence, the personal intelligence system that helps you
          <strong className='text-[#f5f5f7]'> write, express yourself, and get things done effortlessly</strong>.
          With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple.
        </p>
        <AiGallery />
        <AiPrivacy />
      </div>
    </section>
  )
}

export default AppleIntelligence;
