// ai for Apple intelligence
// hd for headline
import ai_hl_img_xsmall from '/assets/images/apple_intelligence_headline_img_xsmall.png';
import ai_hl_img_small from '/assets/images/apple_intelligence_headline_img_small.png';
import ai_hl_img_medium from '/assets/images/apple_intelligence_headline_img_medium.png';
import ai_hl_img_large from '/assets/images/apple_intelligence_headline_img_large.png';

// mn for main
import ai_mn_img_xsmall from '/assets/images/apple_intelligence_main_img_xsmall.jpg';
import ai_mn_img_small from '/assets/images/apple_intelligence_main_img_small.jpg';
import ai_mn_img_medium from '/assets/images/apple_intelligence_main_img_medium.jpg';
import ai_mn_img_large from '/assets/images/apple_intelligence_main_img_large.jpg';
import ai_mn_img_xlarge from '/assets/images/apple_intelligence_main_img_xlarge.jpg';

// prd for productivity
import ai_prd_img_1_xsmall from '/assets/images/ai_productivity_img_1_xsmall.jpg';
import ai_prd_img_1_small from '/assets/images/ai_productivity_img_1_small.jpg';
import ai_prd_img_1_medium from '/assets/images/ai_productivity_img_1_medium.jpg';
import ai_prd_img_1_large from '/assets/images/ai_productivity_img_1_large.jpg';
import ai_prd_img_1_xlarge from '/assets/images/ai_productivity_img_1_xlarge.jpg';

import ai_prd_img_2_xsmall from '/assets/images/ai_productivity_img_2_xsmall.png';
import ai_prd_img_2_large from '/assets/images/ai_productivity_img_2_large.png';

import ai_prd_img_3_xsmall from '/assets/images/ai_productivity_img_3_xsmall.jpg';
import ai_prd_img_3_large from '/assets/images/ai_productivity_img_3_large.jpg';

// Express yourself section images;
import ai_express_yourself_img_1_xsmall from '/assets/images/ai_express_yourself_img_1_xsmall.jpg';
import ai_express_yourself_img_1_large from '/assets/images/ai_express_yourself_img_1_xsmall.jpg';
import ai_express_yourself_img_2_xsmall from '/assets/images/ai_express_yourself_img_2_xsmall.jpg';
import ai_express_yourself_img_2_large from '/assets/images/ai_express_yourself_img_2_xsmall.jpg';
import ai_express_yourself_img_3_xsmall from '/assets/images/ai_express_yourself_img_3_xsmall.jpg';
import ai_express_yourself_img_3_large from '/assets/images/ai_express_yourself_img_3_xsmall.jpg';

// Ai Siri section images
import ai_siri_img_1_xsmall from '/assets/images/ai_siri_img_1_xsmall.jpg';
import ai_siri_img_1_small from '/assets/images/ai_siri_img_1_small.jpg';
import ai_siri_img_1_medium from '/assets/images/ai_siri_img_1_medium.jpg';
import ai_siri_img_1_large from '/assets/images/ai_siri_img_1_large.jpg';
import ai_siri_img_1_xlarge from '/assets/images/ai_siri_img_1_xlarge.jpg';

import ai_siri_img_2_xsmall from '/assets/images/ai_siri_img_2_xsmall.jpg';
import ai_siri_img_2_large from '/assets/images/ai_siri_img_2_large.jpg';

import ai_siri_img_3_xsmall from '/assets/images/ai_siri_img_3_xsmall.jpg';
import ai_siri_img_3_large from '/assets/images/ai_siri_img_3_large.jpg';

import ai_privacy_icon_img from '/assets/images/ai_privacy-icon_img.png';

//** Exports start here */
export const headlineImgs = {
  hl_xsm: ai_hl_img_xsmall,
  hl_sm: ai_hl_img_small,
  hl_md: ai_hl_img_medium,
  hl_lg: ai_hl_img_large,
}

export const mainImgs = {
  mn_xsm: ai_mn_img_xsmall,
  mn_sm: ai_mn_img_small,
  mn_md: ai_mn_img_medium,
  mn_lg: ai_mn_img_large,
  mn_xl: ai_mn_img_xlarge
}

// Sec for section
// Each section has three images.
export const aiGalleryImgsBySec = {
  productivity: {
   img1: {
    xsm: ai_prd_img_1_xsmall,
    sm: ai_prd_img_1_small,
    md: ai_prd_img_1_medium,
    lg: ai_prd_img_1_large,
    xl: ai_prd_img_1_xlarge,
   },
   img2: {xsm: ai_prd_img_2_xsmall, lg: ai_prd_img_2_large},
   img3: {xsm: ai_prd_img_3_xsmall, lg: ai_prd_img_3_large}
  },
  expressYourself: {
    img1: {xsm: ai_express_yourself_img_1_xsmall, lg: ai_express_yourself_img_1_large},
    img2: {xsm: ai_express_yourself_img_2_xsmall, lg: ai_express_yourself_img_2_large},
    img3: {xsm: ai_express_yourself_img_3_xsmall, lg: ai_express_yourself_img_3_large},
  },
  siri: {
    img1: {
      xsm: ai_siri_img_1_xsmall,
      sm: ai_siri_img_1_small,
      md: ai_siri_img_1_medium,
      lg: ai_siri_img_1_large,
      xl: ai_siri_img_1_xlarge,
     },
     img2: {xsm: ai_siri_img_2_xsmall, lg: ai_siri_img_2_large},
     img3: {xsm: ai_siri_img_3_xsmall, lg: ai_siri_img_3_large}
  }
}

export const aiPrivacyImg = ai_privacy_icon_img;
