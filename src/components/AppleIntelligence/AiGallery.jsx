import React, { useCallback, useEffect, useState } from 'react'
import { aiGalleryImgsBySec } from '../../constants/apple-intelligence';
import gsap from 'gsap';

const sections = [
  {title: 'Boost your productivity', Component: Productivity, id: 'ai-section-productivity'},
  {title: 'Express yourself visually', Component: ExpressYourself, id: 'ai-section-express-yourself'},
  {title: 'A new era for Siri', Component: Siri, id: 'ai-section-siri'}
]

const AiGallery = () => {
  const [currSecIdx, setCurrSecIdx] = useState(0);

  useEffect(() => {
    const currSecId = sections[currSecIdx].id;
    gsap.fromTo(
      `#${currSecId}`,
      { opacity: 0 },
      { opacity: 1, ease: 'sine', duration: .3 }
    )
  }, [currSecIdx])

  const showSection = useCallback(async (nextSecIdx) => {
    const currSecId = sections[currSecIdx].id;

    gsap.to(`#${currSecId}`, {
      opacity: '0',
      duration: .3,
      ease: 'sine',
      onComplete: () => setCurrSecIdx(nextSecIdx)
    })
  }, [currSecIdx])

  // Title state classes
  const titleStateCls = {
    active: 'text-white border-b-white',
    inactive: 'text-[#86868b] border-b-[#424245] hover:text-[#d2d2d7] transition-colors duration-150 cursor-pointer',
  }

  return (
    <div className='480px:max-w-[70%] mx-auto'>
      {/* Show this in large screens */}
      <div className='hidden 1068px:block'>
        <div className='flex-center gap-7 p-2'>
          {sections.map(({title}, idx) =>
            <button
              key={title}
              className={`
                pt-[10px] px-8 pb-[13px] font-semibold text-[17px] border-b
                ${currSecIdx === idx ? titleStateCls.active : titleStateCls.inactive}
              `}
              onClick={() => showSection(idx)}
            >
              {title}
            </button>
          )}
        </div>

        {sections.map(({Component}, idx) =>
          currSecIdx === idx && <Component key={idx}/>
        )}
      </div>

      {/* Show this in small to medium screens */}
      <div className='1068px:hidden'>
        <Productivity />
        <ExpressYourself />
        <Siri />
      </div>
    </div>
  )
}

export default AiGallery;

function Productivity() {
  const {img1, img2, img3} = aiGalleryImgsBySec.productivity;

  return (
    <div id='ai-section-productivity'>
      <div className="p-8">
        <p className="text-sm text-[#f5f5f7] text-center font-semibold 1068px:hidden">
          Boost your productivity
        </p>
        <p className="text-[19px] 734px:text-[17px] 1068px:text-[21px] text-center text-[#f5f5f7] font-semibold">
          Explore new tools that help you write, focus, and communicate.
        </p>
      </div>

      <div className="grid gap-6 1068px:grid-rows-2 1068px:grid-cols-2">
        <div className="flex-center flex-col gap-8 bg-black rounded-[18px] p-8 1068px:row-start-1 1068px:row-end-3">
          <div>
            <img src={img1.xsm} className='block 480px:hidden w-full max-w-[498px] h-auto object-cover p-1 border-[4px] border-[#2c2c2c] rounded-[50px]'/>
            <img src={img1.sm} className='hidden 480px:block 734px:hidden w-full max-w-[498px] h-auto object-cover p-1 border-[4px] border-[#2c2c2c] rounded-[50px]'/>
            <img src={img1.md} className='hidden 734px:block 1068px:hidden w-full max-w-[498px] h-auto object-cover p-1 border-[4px] border-[#2c2c2c] rounded-[50px]'/>
            <img src={img1.lg} className='hidden 1068px:block 1440px:hidden w-full max-w-[684px] h-auto object-cover p-1 border-[4px] border-[#2c2c2c] rounded-[50px]'/>
            <img src={img1.xl} className='hidden 1440px:block w-full max-w-[212px] h-auto object-cover p-1 border-[4px] border-[#2c2c2c] rounded-[50px]'/>
          </div>

          <p className="text-sm text-[#86868b] text-center">
            <strong className="font-semibold text-[#f5f5f7]">
              Writing Tools{" "}
            </strong>
            can proofread your text and rewrite different versions until the
            tone and wording are just right, and summarize selected text with a
            tap. They’re available nearly everywhere you write, including
            third-party apps.
          </p>
        </div>
        <div className="flex-center flex-col gap-8 bg-black rounded-[18px] p-8 1068px:col-start-2 min-w-[286px]">
          <p className="text-sm text-[#86868b] text-center">
            Just hit record in the Notes or Phone app to capture audio
            recordings and transcripts. Apple Intelligence generates
            <strong className="font-semibold text-[#f5f5f7]">
              {" "}
              summaries{" "}
            </strong>
            of your transcripts, so you can get the most important info at a
            glance.
          </p>
          <div className="flex-center overflow-hidden w-full">
            <img src={img2.xsm} className="block border 480px:hidden w-full max-w-[300px] h-auto"/>
            <img src={img2.lg} className="hidden 480px:block w-full max-w-[350px] h-auto"/>
          </div>
        </div>

        <div className="flex-center flex-col gap-8 bg-black rounded-[18px] p-8 1068px:row-start-2 1068px:col-start-2">
          <p className="text-sm text-[#86868b] text-center">
            <strong className="font-semibold text-[#f5f5f7]">
              Priority messages in Mail{" "}
            </strong>
            elevate time-sensitive messages to the top of your inbox — like an
            invitation that has a deadline today or a check-in reminder for your
            flight this afternoon.
          </p>
          <div className="overflow-hidden w-full h-[93px] 480px:h-[172px] 1068px:h-[142px] min-[1130px]:h-[160px] min-[1386px]:h-[178px]">
            <img
              src={img3.xsm}
              className="block 480px:hidden w-auto h-auto mx-auto"
            />
            <img
              src={img3.lg}
              className="hidden 480px:block w-auto h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpressYourself() {
const {img1, img2, img3} = aiGalleryImgsBySec.expressYourself;

  return (
    <div id='ai-section-express-yourself'>
      <div className="p-8">
        <p className="text-sm text-[#f5f5f7] text-center font-semibold 1068px:hidden">
          Express yourself visually
        </p>
        <p className="text-[19px] 734px:text-[17px] 1068px:text-[21px] text-center text-[#f5f5f7] font-semibold">
          Create fun, original images that are truly personal to you.
        </p>
      </div>

      <div className="grid gap-6 1068px:grid-rows-2 1068px:grid-cols-2">
        <div className="flex-center flex-col gap-8 bg-black rounded-[18px] p-8 1068px:row-start-1 1068px:row-end-3">
          <div>
            <img src={img1.xsm} className='block 480px:hidden w-full max-w-[498px] h-auto object-cover p-1 border-[4px] border-[#2c2c2c] rounded-[50px]'/>
            <img src={img1.lg} className='hidden 480px:block w-full max-w-[353px] h-auto object-cover p-1 border-[4px] border-[#2c2c2c] rounded-[50px]'/>
          </div>
          <p className="text-sm text-[#86868b] text-center">
            Make a <strong className="font-semibold text-[#f5f5f7]"> Genmoji </strong>
            right in the keyboard to match any conversation. Want to create a disco ball pigeon? You got it. Just provide a description.
          </p>
        </div>
        <div className="flex-center flex-col gap-8 bg-black rounded-[18px] p-8 1068px:col-start-2 min-w-[286px]">
          <p className="text-sm text-[#86868b] text-center">
            The <strong className="font-semibold text-[#f5f5f7]"> Image Playground app </strong>
            lets you create unique images in seconds based on a description, a concept, or even a person from your Photos library. Experiment with image styles like animation, illustration, and sketch.
          </p>
          <div className="flex-center overflow-hidden w-full">
            <img src={img2.xsm} className="block 480px:hidden w-full max-w-[152px] h-auto"/>
            <img src={img2.lg} className="hidden 480px:block w-full max-w-[182px] h-auto"/>
          </div>
        </div>

        <div className="flex-center flex-col gap-8 bg-black rounded-[18px] p-8 1068px:row-start-2 1068px:col-start-2">
          <p className="text-sm text-[#86868b] text-center">
            With <strong className="font-semibold text-[#f5f5f7]"> Clean Up</strong>,
            you can remove distracting background objects from your photos with just a tap — so you can perfect a shot while staying true to the original image.
          </p>
          <div className="overflow-hidden w-full h-[93px] 480px:h-[172px] 1068px:h-[142px] min-[1130px]:h-[160px] min-[1386px]:h-[178px]">
            <img
              src={img3.xsm}
              className="block 480px:hidden w-auto h-auto mx-auto"
            />
            <img
              src={img3.lg}
              className="hidden 480px:block w-auto h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Siri() {
  const {img1, img2, img3} = aiGalleryImgsBySec.siri;

  return (
    <div id='ai-section-siri'>
      <div className="p-8">
        <p className="text-sm text-[#f5f5f7] text-center font-semibold 1068px:hidden">
          A new era for Siri
        </p>
        <p className="text-[19px] 734px:text-[17px] 1068px:text-[21px] text-center text-[#f5f5f7] font-semibold">
          With all-new superpowers, Siri will be able to assist you like never before.
        </p>
      </div>

      <div className="grid gap-6 1068px:grid-rows-2 1068px:grid-cols-2">
        <div className="flex-center flex-col gap-8 bg-black rounded-[18px] p-8 1068px:row-start-1 1068px:row-end-3">
          <div>
            <img src={img1.xsm} className='block 480px:hidden w-full max-w-[170px] h-auto object-cover p-1 border-[3px] border-[#2c2c2c] rounded-[30px]'/>
            <img src={img1.lg} className='hidden 480px:block w-full max-w-[180px] h-auto object-cover p-1 border-[3px] border-[#2c2c2c] rounded-[30px]'/>
          </div>
          <p className="text-sm text-[#86868b] text-center">
            Awareness of your personal context enables Siri to
            <strong className="font-semibold text-[#f5f5f7]"> help you in ways that are unique to you</strong>.
            Need your passport number while booking a flight? Siri can help find what you’re looking for, without compromising your privacy.
          </p>
        </div>
        <div className="flex-center flex-col gap-8 bg-black rounded-[18px] p-8 1068px:col-start-2 min-w-[286px]">
          <p className="text-sm text-[#86868b] text-center">
            <strong className="font-semibold text-[#f5f5f7]">Richer language understanding </strong>
            and an enhanced voice make communicating with Siri even more natural. For example, if you stumble over your words, Siri still knows what you’re getting at.
          </p>
          <div className="flex-center overflow-hidden w-full">
            <img src={img2.xsm} className="block 480px:hidden w-full max-w-[97px] h-auto"/>
            <img src={img2.lg} className="hidden 480px:block w-full max-w-[118px] h-auto"/>
          </div>
        </div>

        <div className="flex-center flex-col gap-8 bg-black rounded-[18px] p-8 1068px:row-start-2 1068px:col-start-2">
          <p className="text-sm text-[#86868b] text-center">
            Not sure how to do something on iPhone, like adjust the background blur on a portrait? With expansive product knowledge, Siri can give you
            <strong className="font-semibold text-[#f5f5f7]"> step-by-step instructions </strong>,
            in a snap.
          </p>
          <div className="overflow-hidden w-full h-[182px] 1068px:h-[160px] min-[1315px]:h-[178px]">
            <img src={img3.xsm} className="block 480px:hidden w-auto h-auto mx-auto"/>
            <img src={img3.lg} className="hidden 480px:block w-auto h-auto mx-auto"/>
          </div>
        </div>
      </div>
    </div>
  );
}
