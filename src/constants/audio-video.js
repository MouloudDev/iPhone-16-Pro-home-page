import frame_xsm from '/assets/images/audio-video_iPhone-frame_xsmall.png'
import frame_sm from '/assets/images/audio-video_iPhone-frame_small.png'
import frame_md from '/assets/images/audio-video_iPhone-frame_medium.png'
import frame_lg from '/assets/images/audio-video_iPhone-frame_large.png'
import frame_xlg from '/assets/images/audio-video_iPhone-frame_xlarge.png'

import frameCont_xsm from '/assets/images/audio-video_iPhone-frame_content_xsmall.jpg'
import frameCont_sm from '/assets/images/audio-video_iPhone-frame_content_small.jpg'
import frameCont_md from '/assets/images/audio-video_iPhone-frame_content_medium.jpg'
import frameCont_lg from '/assets/images/audio-video_iPhone-frame_content_large.jpg'
import frameCont_xlg from '/assets/images/audio-video_iPhone-frame_content_xlarge.jpg'

import frameCont_2_xsm from '/assets/images/audio-video_iPhone-frame_content_2_xsmall.jpg'
import frameCont_2_sm from '/assets/images/audio-video_iPhone-frame_content_2_small.jpg'
import frameCont_2_md from '/assets/images/audio-video_iPhone-frame_content_2_medium.jpg'
import frameCont_2_lg from '/assets/images/audio-video_iPhone-frame_content_2_large.jpg'
import frameCont_2_xlg from '/assets/images/audio-video_iPhone-frame_content_2_xlarge.jpg'

import vid_prev_img_xsmall from '/assets/images/shot_on_iPhone_img_xsmall.jpg';
import vid_prev_img_small from '/assets/images/shot_on_iPhone_img_small.jpg';
import vid_prev_img_medium from '/assets/images/shot_on_iPhone_img_medium.jpg';
import vid_prev_img_large from '/assets/images/shot_on_iPhone_img_large.jpg';
import vid_prev_img_xlarge from '/assets/images/shot_on_iPhone_img_xlarge.jpg';

export const videoImgs = [
  {frame: frame_xsm, img: frameCont_xsm, wrapperCls: '480px:hidden max-w-[422px] max-h-[206px]'},
  {frame: frame_sm, img: frameCont_sm, wrapperCls: 'hidden 480px:block 734px:hidden max-w-[516px] max-h-[252px]'},
  {frame: frame_md, img: frameCont_md, wrapperCls: 'hidden 734px:block 1068px:hidden max-w-[620px] max-h-[302px]'},
  {frame: frame_lg, img: frameCont_lg, wrapperCls: 'hidden 1068px:block 1440px:hidden max-w-[1010px] max-h-[492px]'},
  {frame: frame_xlg, img: frameCont_xlg, wrapperCls: 'hidden 1440px:block max-w-[1102px] max-h-[534px]'},
]

export const video2Imgs = [
  {img: frameCont_2_xsm, wrapperCls: '480px:hidden max-w-[422px] max-h-[206px]'},
  {img: frameCont_2_sm, wrapperCls: 'hidden 480px:block 734px:hidden max-w-[516px] max-h-[252px]'},
  {img: frameCont_2_md, wrapperCls: 'hidden 734px:block 1068px:hidden max-w-[620px] max-h-[302px]'},
  {img: frameCont_2_lg, wrapperCls: 'hidden 1068px:block 1440px:hidden max-w-[1010px] max-h-[492px]'},
  {img: frameCont_2_xlg, wrapperCls: 'hidden 1440px:block max-w-[1102px] max-h-[534px]'},
]

export const videoPrevImgs = {
  xsm: vid_prev_img_xsmall,
  sm: vid_prev_img_small,
  md: vid_prev_img_medium,
  lg: vid_prev_img_large,
  xl: vid_prev_img_xlarge
}
