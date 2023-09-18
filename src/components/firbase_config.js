// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyAB_4Zf8bVwCHT0VS8mLfKr7rPwlvNovQE",
//   authDomain: "astrologically-a6df9.firebaseapp.com",
//   projectId: "astrologically-a6df9",
//   storageBucket: "astrologically-a6df9.appspot.com",
//   messagingSenderId: "648031265378",
//   appId: "1:648031265378:web:2d5de191dc007341b7a73b",
//   measurementId: "G-KMQF8WY6LY",
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export default analytics;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXAAHwIaM_8XEHhFtm8K4N6IIq75YZYtk",
  authDomain: "astrootp-e1732.firebaseapp.com",
  projectId: "astrootp-e1732",
  storageBucket: "astrootp-e1732.appspot.com",
  messagingSenderId: "170824197254",
  appId: "1:170824197254:web:9fb7abbd086ac920975d07",
  measurementId: "G-ZTJP3WZCQ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
