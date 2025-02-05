import { aiPrivacyImg } from "../../constants/apple-intelligence"

const AiPrivacy = () => {
  return (
    <div id="ai-privacy" className='mt-32'>
      <div className="w-fit 480px:mx-auto">
        <img src={aiPrivacyImg} className='block object-cover w-[50px] h-[66px] 480px:w-[62px] 480px:h-[82px]' alt='Apple privacy' />
      </div>

      <h3 className='mt-6 text-[32px] 734px:text-[40px] 1068px:text-[48px] text-[#f5f5f7] text-left 480px:text-center max-w-sm mx-auto 1068px:max-w-md font-semibold tracking-[0.128px] leading-[36px] 734px:leading-[45px] 1068px:leading-[55px]'>
        Great powers come with great privacy.
      </h3>
      <div className='mt-8 mx-auto max-w-4xl flex flex-col gap-4 734px:flex-row 734px:gap-8'>
        <p className='mx-auto h-full 480px:text-center 734px:text-left text-[#86868b] font-semibold text-[17px]'>
           Apple Intelligence is designed to
           <strong className='text-[#f5f5f7]'> protect your privacy at every step</strong>.
           It’s integrated into the core of iPhone through on-device processing. So it’s aware of your personal information without collecting your personal information.        </p>
          <p className='mx-auto h-full 480px:text-center 734px:text-left text-[#86868b] font-semibold text-[17px]'>
            And with <strong className='text-[#f5f5f7]'> groundbreaking Private Cloud Compute</strong>.
            Apple Intelligence can draw on larger Apple-designed server-based models, running on Apple silicon, to handle more complex requests for you while protecting your privacy.          </p>
       </div>

       <a href="#ai-privacy" className='block mt-16 max-w-[171px] 480px:max-w-fit 480px:mx-auto text-[17px] text-[#2997ff] font-semibold cursor-pointer decoration-[#2997ff] after:content-["＞"] after:font-semibold after:relative after:top-[1.5px] group'>
         <span className="group-hover:underline leading-4">Learn more about Apple Intelligence</span>
       </a>
    </div>
  )
}

export default AiPrivacy
