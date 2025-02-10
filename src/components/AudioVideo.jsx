import React, { Component } from 'react'
import { video2Imgs, videoImgs, videoPrevImgs } from '../constants/audio-video'
import VideoPlayIcon from './icons/VideoPlayIcon';

const audioMixFeats = [
  {title: 'In-frame', description: 'Only captures the voices of the people on camera, even if people off-camera are talking during the recording.'},
  {title: 'Studio', description: 'Makes voices sound like you’re recording in a professional studio equipped with sound-dampening walls. Great for vloggers or podcasters because the recording will sound like the mic is close to the subject’s mouth, even if it’s a few feet away.'},
  {title: 'Cinematic', description: 'Captures all of the voices around you and consolidates them toward the front of the screen — just like sound is formatted for the movies.'}
]
const {xsm, sm, md, lg, xl} = videoPrevImgs;

const AudioVideo = () => {

  return (
    <section className='pb-56'>
      <div className="flex-center bg-no-repeat bg-[50%_0] w-full h-[480px] 734px:h-[700px] 1068px:h-[810px] 1440px:h-[946px] av-mn-img-xsm 480px:av-mn-img-sm 734px:av-mn-img-md 1068px:av-mn-img-lg">
        <h4 className="text-[40px] 734px:text-[64px] 1068px:text-[80px] text-[#f5f5f7] text-center leading-[44px] 734px:leading-[68px] 1068px:leading-[84px] font-semibold max-w-[80%]">
          4K 120 fps Dolby&nbsp;Vision. <br />
          Cinemasterful.
        </h4>
      </div>

      <div className="mt-[50px] w-fit mx-auto px-4">
        <div>
          {videoImgs.map(({frame, img, wrapperCls}, idx) =>
            <div key={idx} className={`relative mx-auto ${wrapperCls}`}>
             <img src={frame} className='w-full h-auto object-cover' alt='iPhone frame' />
             <div className='absolute top-[4.5%] left-[1.5%] w-[97%] h-[91%] overflow-hidden rounded-[38px] 734px:rounded-[45px] 1068px:rounded-[65px]'>
               <img src={img} className='absolute top-0 -z-10 block w-full h-auto object-cover' alt='iPhone frame' />
             </div>
            </div>
          )}
        </div>

        <p className="mt-4 max-w-[clamp(100px,60%,500px)] mx-auto text-[14px] text-[#86868b] text-center font-normal">
          A herd of Icelandic horses, captured in stunning 4K 120 fps Dolby Vision
        </p>
      </div>

      <div className='grid gap-8 1068px:grid-rows-2 1068px:grid-cols-2 1068px:gap-[22px_28px] mt-[50px] mx-auto px-6 min-[570px]:px-0 max-w-[422px] 480px:max-w-[516px]  734px:max-w-[620px] 1068px:max-w-[1010px] 1440px:max-w-[1102px]'>
        <p className='text-[#86868b] font-semibold text-[19px] 734px:text-[17px] 1068px:text-[21px]'>
          iPhone 16 Pro takes video capture to a whole new level with
          <strong className='text-[#f5f5f7]'> 4K 120 fps Dolby Vision</strong>.
          — our highest resolution and frame rate combo yet. Enabled by the new 48MP Fusion camera with second-generation quad-pixel sensor and our powerful A18 Pro chip, iPhone 16 Pro lets you record 4K 120 fps Dolby Vision in video mode or slo-mo.
        </p>
        <p className='1068px:row-[2/3] text-[#86868b] font-semibold text-[19px] 734px:text-[17px] 1068px:text-[21px]'>
          And now you can
          <strong className='text-[#f5f5f7]'> adjust the playback speed after capture</strong>.
          in the redesigned Photos app, giving you greater editing capabilities. To add a dreamy quality to your shot, try out the new half-speed option. Or for a cinematic effect, slow it right down to 24 fps playback.
        </p>

        <p className='text-[#86868b] font-semibold text-[28px] 480px:text-[24px] 1068px:text-[40px]'>
          <strong className='text-[#f5f5f7]'>Highest-quality video </strong>
          in a smartphone
        </p>
        <p className='text-[#86868b] font-semibold text-[19px] 734px:text-[17px] 1068px:text-[21px]'>
          iPhone 16 Pro also provides
          <strong className='text-[#f5f5f7]'> a big leap in audio performance </strong>
          with four studio-quality mics for higher-quality recording. They provide a lower noise floor so you get more true-to-life sounds. New Spatial Audio capture makes your videos sound more immersive when listening with AirPods. And thanks to wind noise reduction, the audio quality is even clearer.
        </p>
      </div>

      <div className='w-full mt-20 mx-auto px-6 min-[570px]:px-0 max-w-[422px] 480px:max-w-[516px] 734px:max-w-[620px] 1068px:max-w-[1010px] 1440px:max-w-[1102px]'>
        <div className='max-w-[70%] font-semibold text-[#f5f5f7] text-[32px] 734px:text-[40px] 1068px:text-[64px] 1068px:text-center 1068px:mx-auto'>
          <h4>Audio&nbsp;Mix.</h4>
          <h5 className='leading-[36px] 734px:leading-[44px] 1068px:leading-[68px]'>Make your voice heard.</h5>
        </div>
        <p className='mt-8 text-[#86868b] font-semibold text-[19px] 734px:text-[17px] 1068px:text-[21px] 1068px:text-center 1068px:w-[75%] 1068px:mx-auto'>
          Powered by advanced intelligence and Spatial Audio capture, Audio Mix lets you
          <strong className='text-[#f5f5f7]'> adjust the way voices sound in your videos </strong>
          using three different voice options. Want to decrease background sound? Or just focus on the voices that are in frame? Simply select the mix and adjust intensity to get the sound you want after video capture.
        </p>
      </div>

      <div className="mt-16 w-fit mx-auto px-4">
        <div>
          {video2Imgs.map(({img, wrapperCls}, idx) =>
            <div key={idx} className={`mx-auto ${wrapperCls}`}>
              <img src={img} className='block w-full h-auto object-cover' alt='iPhone video' />
            </div>
          )}
        </div>
        <div className='flex-center flex-col 734px:grid 734px:grid-cols-2 734px:items-start 1068px:flex 1068px:flex-row gap-8 mt-10 mx-auto px-6 min-[570px]:px-0 max-w-[422px] 480px:max-w-[516px] 734px:max-w-[620px] 1068px:max-w-[1010px] 1440px:max-w-[1102px]'>
        {audioMixFeats.map(({title, description}) =>
          <div key={title} className='pr-[20%] 1068px:pr-[5%] 1068px:flex-1'>
            <h4 className='text-[19px] 1068px:text-[21px] font-semibold after:block after:h-[1px] after:bg-[#979797] after:mt-2 after:w-full'>
              {title}
            </h4>
            <p className='mt-3 text-[14px] 1068px:text-[17px] text-[#86868b] font-semibold'>
              {description}
            </p>
          </div>
        )}
        </div>
      </div>

      <div className='w-full mt-[160px] mx-auto px-6 min-[570px]:px-0 max-w-[422px] 480px:max-w-[516px] 734px:max-w-[620px] 1068px:max-w-[1010px] 1440px:max-w-[1102px]'>
        <div className='max-w-[66%] font-semibold text-[#f5f5f7] text-[32px] 734px:text-[40px] 1068px:text-[64px] 1068px:text-center 1068px:mx-auto'>
          <h4>Shot on iPhone 16 Pro.</h4>
        </div>
        <p className='mt-8 text-[#86868b] font-semibold text-[19px] 734px:text-[17px] 1068px:text-[21px] 1068px:text-center 1068px:w-[73%] 1068px:mx-auto'>
          Go behind the scenes of
          <strong className='text-[#f5f5f7]'> The Weeknd’s groundbreaking music video </strong>
          to learn how the powerful camera features on iPhone 16 Pro deliver more creative freedom and flexibility than ever before. The “Dancing in the Flames” cinematographer Erik Henriksson films the video in dreamlike slow motion using 4K 120 fps Dolby Vision on iPhone 16 Pro. Thanks to Camera Control, he could make technical decisions by simply sliding a finger to adjust camera functions like exposure or focal length — all without missing a beat.
        </p>
      </div>

      {/* Couldn't find the video source from Apple's page, so created this video preview instead. */}
      <div className='relative mt-10 480px:w-[90%] 1068px:w-[80%] 1440px:w-[72%] mx-auto'>
        <div>
          <img src={xsm} className='block 480px:hidden w-full h-auto object-cover' alt='video thumbnail' />
          <img src={sm} className='hidden 480px:block 734px:hidden w-full h-auto object-cover' alt='video thumbnail' />
          <img src={md} className='hidden 734px:block 1068px:hidden w-full h-auto object-cover' alt='video thumbnail' />
          <img src={lg} className='hidden 1068px:block 1440px:hidden w-full h-auto object-cover' alt='video thumbnail' />
          <img src={xl} className='hidden 1440px:block w-full h-auto object-cover' alt='video thumbnail' />
        </div>
        <div className='absolute inset-0 flex-center group cursor-pointer bg-black/30 hover:bg-black/40 transition-colors duration-700'>
          <button className='opacity-75 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0,0,0.2,1)] delay-200'>
            <VideoPlayIcon/>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AudioVideo
