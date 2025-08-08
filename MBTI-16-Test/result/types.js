
// Mapping for MBTI -> {front, back}
// You can fill/replace the back images; if back is empty, we'll reuse front.
window.MBTI_IMAGES = {
  "ISTJ": {
    front: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-07/2025-07-10_442320_MBTI-ISTJ-Hippo-1752139284.png",
    back: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-08/2025-08-08_968355_MBTI-ISTJ-Hippo-BK3-1754617896.png"
  },
  "ISFJ": {
    front: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-07/2025-07-10_477177_MBTI-ISFJ-deerFIN-1752139378.png",
    back: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-08/2025-08-08_907234_MBTI-ISFJ-deerFIN-BK3-1754618393.png" 
  },
  "INFJ": {
    front: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-07/2025-07-10_325203_MBTI-INFJ-Giraffe-1752139425.png", 
    back: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-08/2025-08-08_444081_MBTI-INFJ-Giraffe-BK3-1754618896.png" 
  },
  "INTJ": { 
    front: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-07/2025-07-10_243736_MBTI-INTJ-Tiger-1752139467.png", 
    back: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-08/2025-08-08_832433_MBTI-INTJ-Tiger-BK3-1754619286.png" 
  },
  "ISTP": { 
    front: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-07/2025-07-10_234713_MBTI-ISTP-Cat-1752139522.png", 
    back: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-08/2025-08-08_584104_MBTI-ISTP-Cat-BK3-1754620007.png" 
  },
  "ISFP": { 
    front: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-07/2025-07-10_486498_MBTI-ISFP-Sheep-1752139556.png", 
    back: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-08/2025-08-08_540069_MBTI-ISFP-Sheep-BK3-1754620672.png" 
  },
  "INFP": { 
    front: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-07/2025-07-10_598001_MBTI-INFP-Rabbit-1752139590.png", 
    back: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-08/2025-08-08_768337_MBTI-INFP-Rabbit-BK3-1754621098.png" 
  },
  "INTP": { front: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-07/2025-07-10_123738_MBTI-INTP-Owl-1752139619.png", back: "" },
  "ESTP": { 
    front: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-07/2025-07-10_120502_MBTI-ESTP-Zebra-1752139660.png", 
    back: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-08/2025-08-08_939555_MBTI-ESTP-Zebra-BK2-1754615500.png" 
  },
  "ESFP": { 
    front: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-07/2025-07-10_699025_MBTI-ESFP-Cow-1752139690.png", 
    back: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-08/2025-08-08_558993_MBTI-ESFP-Cow-BK3-1754621440.png" 
  },
  "ENFP": { 
    front: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-07/2025-07-10_497025_MBTI-ENFP-Elephant-1752139714.png", 
    back: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-08/2025-08-08_721451_MBTI-ENFP-Elephant-BK3-1754622329.png" 
  },
  "ENTP": { 
    front: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-07/2025-07-10_354317_MBTI-ENTP-Parrot-1752139753.png", 
    back: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-08/2025-08-08_771271_MBTI-ENTP-Parrot-BK3-1754623168.png" 
  },
  "ESTJ": { 
    front: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-07/2025-07-10_954511_MBTI-ESTJ-Bear-1752139782.png", 
    back: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-08/2025-08-08_433337_MBTI-ESTJ-Bear-BK3-1754625013.png" 
  },
  "ESFJ": { 
    front: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-07/2025-07-10_330683_MBTI-ESFJ-Horse-1752139806.png", 
    back: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-08/2025-08-08_945134_MBTI-ESFJ-Horse-BK3-1754625421.png" 
  },
  "ENFJ": { 
    front: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-07/2025-07-10_720637_MBTI-ENFJ-Dog-1752140492.png", 
    back: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-08/2025-08-08_685857_MBTI-ENFJ-Dog-BK3-1754626007.png" 
  },
  "ENTJ": { 
    front: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-07/2025-07-10_125541_MBTI-ENTJ-Lion-1752140526.png", 
    back: "https://ezcard-revtel2-com-prod.s3.ap-northeast-1.amazonaws.com/2025-08/2025-08-08_198667_MBTI-ENTJ-Lion-BK3-1754624816.png" }
};
