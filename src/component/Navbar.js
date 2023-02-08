import React, { useState } from "react";
import './Navbar.css'
import image1 from '../Images/image.png'
const newLocal = "betalaunch";
const newLocal_1 = <p style="background-image: url('image2.png');">
  <svg width="1640" height="2851" viewBox="0 0 1440 2851" fill="none" xmlns="http://www.w3.org/2000/svg" className="x3">
    <rect width="1640" height="2851" fill="#291D3E" />
  </svg>

  <p className={newLocal}> BETA LAUNCH CARD DETAILS</p>

</p>;
function Navbar() {
   return (
    <>
    <nav className="navbar">
      <div className="navbar-brand" style={{margin: "0 0 0 90px"}}>
      <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="l1">
<path d="M5.17181 14.9265C5.7609 17.6721 11.5564 18.103 11.5564 18.103C11.5564 18.103 6.98268 8.46006 17.2738 8.207C17.271 8.20594 17.2682 8.20489 17.2654 8.20383C15.8808 7.92819 14.1815 7.85074 11.831 8.42233C6.85105 9.63338 5.31653 13.2572 5.17181 14.9265Z" fill="black"/>
<path d="M10.0585 6.9389L28.6008 0C28.6274 6.37121 25.7414 8.52949 23.0554 9.16007C19.7155 9.94418 18.0575 6.90548 11.8325 8.4193C6.85253 9.63035 5.31802 13.2542 5.1733 14.9235C4.95887 13.8742 4.89572 12.4216 5.61083 10.7208C6.59872 8.37116 8.60824 7.55759 10.0585 6.9389Z" fill="black"/>
<path d="M23.4232 14.2561C23.3007 15.6678 22.1845 18.4893 18.8316 20.0591C24.7705 12.5039 11.6406 8.13812 12.4987 17.9077C8.11105 6.70634 22.4688 6.96334 23.4232 14.2561Z" fill="black"/>
<path d="M18.5426 22.2522L0.00018276 29.1911C-0.026437 22.8199 2.85965 20.6616 5.54557 20.031C8.88549 19.2469 10.5435 22.2856 16.7685 20.7718C21.7485 19.5607 23.2829 15.9194 23.4276 14.2501C23.6432 15.562 23.8789 16.4187 23.1638 18.1195C22.1759 20.4691 19.9928 21.6335 18.5426 22.2522Z" fill="black"/>
</svg>
<svg width="128" height="17" viewBox="0 0 128 17" fill="none" xmlns="http://www.w3.org/2000/svg"className="l2" >
<path d="M17.66 11.9205C17.5146 12.466 17.3099 12.9587 17.0458 13.3986C16.7909 13.8314 16.5014 14.2147 16.1774 14.5487C15.8533 14.8827 15.502 15.1672 15.1235 15.4023C14.745 15.6375 14.3667 15.8301 13.9888 15.9803C13.6109 16.1305 13.236 16.2418 12.8641 16.3141C12.4996 16.3864 12.1629 16.4232 11.854 16.4245L0.789995 16.4707L1.52626 13.7076L12.5903 13.6614C13.1419 13.6591 13.6099 13.5014 13.9945 13.1884C14.3864 12.8754 14.6522 12.4568 14.7919 11.9325C14.8599 11.6774 14.8818 11.4438 14.8575 11.2316C14.8332 11.0194 14.7647 10.8357 14.6518 10.6805C14.5462 10.5252 14.3945 10.4055 14.1965 10.3215C14.0059 10.2373 13.7782 10.1958 13.5135 10.1969L6.91695 10.2245C6.45365 10.2264 5.97435 10.1506 5.47904 9.99695C4.98562 9.83624 4.55446 9.57974 4.18555 9.22743C3.824 8.8751 3.56525 8.41264 3.40929 7.84006C3.2607 7.26745 3.29684 6.56669 3.51772 5.73777C3.73859 4.90884 4.0753 4.21036 4.52785 3.64232C4.98963 3.06716 5.49569 2.60151 6.04603 2.24536C6.60561 1.8821 7.17459 1.62141 7.75296 1.46331C8.33322 1.29811 8.855 1.21455 9.3183 1.21261L19.0807 1.17182L18.3444 3.9349L8.58204 3.97569C8.03784 3.97796 7.56884 4.13915 7.17502 4.45926C6.78855 4.77933 6.52547 5.20151 6.38577 5.72578C6.24418 6.25714 6.28261 6.67806 6.50105 6.98853C6.72874 7.29189 7.11469 7.44243 7.65888 7.44015L14.2775 7.4125C14.5844 7.4183 14.9004 7.45944 15.2252 7.53593C15.552 7.60533 15.8637 7.71726 16.1605 7.87171C16.4646 8.02613 16.739 8.22314 16.9837 8.46273C17.2302 8.69524 17.4268 8.9775 17.5734 9.3095C17.7274 9.64147 17.8166 10.0233 17.8412 10.4548C17.8658 10.8864 17.8054 11.375 17.66 11.9205Z" fill="black"/>
<path d="M35.9621 10.1668C35.7148 11.0949 35.3219 11.9493 34.7833 12.7301C34.2447 13.5108 33.6057 14.1857 32.8664 14.755C32.127 15.3242 31.3104 15.7699 30.4165 16.0921C29.5319 16.4072 28.6152 16.5667 27.6666 16.5707L23.7837 16.5869C22.835 16.5909 21.9977 16.4387 21.2719 16.1303C20.5479 15.8149 19.9672 15.375 19.5299 14.8107C19.0927 14.2464 18.8087 13.5753 18.6781 12.7973C18.5548 12.0194 18.6168 11.1664 18.8641 10.2383L19.6401 7.3264C19.8855 6.40538 20.2775 5.55451 20.8161 4.7738C21.3639 3.98597 22.0066 3.31098 22.744 2.74882C23.4834 2.17958 24.3 1.73386 25.1939 1.41167C26.0878 1.08947 27.009 0.926391 27.9577 0.922427L31.8406 0.906204C32.7893 0.90224 33.6219 1.05799 34.3385 1.37346C35.0625 1.6889 35.6432 2.12878 36.0804 2.6931C36.5196 3.25034 36.7999 3.92148 36.9213 4.70651C37.0445 5.48446 36.9835 6.33394 36.738 7.25497L35.9621 10.1668ZM33.87 7.26695C34.0154 6.72142 34.0546 6.22941 33.9878 5.79092C33.9303 5.34531 33.7776 4.96734 33.5297 4.65699C33.2911 4.33952 32.9628 4.09674 32.5448 3.92864C32.136 3.75343 31.6559 3.66697 31.1043 3.66928L27.2214 3.6855C26.6625 3.68784 26.1278 3.77853 25.6173 3.95759C25.1161 4.12953 24.6575 4.3756 24.2416 4.6958C23.8276 5.00891 23.4692 5.38902 23.1665 5.83613C22.8729 6.27613 22.6535 6.76889 22.5081 7.31442L21.7322 10.2263C21.5868 10.7718 21.5429 11.2674 21.6005 11.713C21.6673 12.1515 21.8237 12.5294 22.0697 12.8469C22.3175 13.1572 22.6458 13.4 23.0546 13.5752C23.4726 13.7433 23.961 13.8262 24.5199 13.8239L28.3808 13.8077C28.9397 13.8054 29.4697 13.7182 29.971 13.5463C30.4815 13.3673 30.9437 13.1212 31.3577 12.8081C31.7736 12.4879 32.1283 12.1078 32.4219 11.6678C32.7246 11.2207 32.9487 10.7243 33.0941 10.1788L33.87 7.26695Z" fill="black"/>
<path d="M48.748 16.2703L37.4701 16.3174C37.2642 16.3183 37.0825 16.2837 36.9249 16.2136C36.7672 16.1435 36.6383 16.0485 36.538 15.9286C36.447 15.8016 36.3873 15.6532 36.3591 15.4835C36.3309 15.3137 36.3432 15.1297 36.3961 14.9313L40.0859 1.08406L42.9539 1.07208L39.6294 13.5484L49.4843 13.5072L48.748 16.2703Z" fill="black"/>
<path d="M65.2982 11.7215C65.1528 12.267 64.948 12.7597 64.6839 13.1996C64.429 13.6323 64.1396 14.0157 63.8155 14.3497C63.4915 14.6836 63.1402 14.9682 62.7616 15.2033C62.3831 15.4384 62.0049 15.6311 61.627 15.7813C61.249 15.9315 60.8741 16.0427 60.5023 16.1151C60.1378 16.1873 59.8011 16.2241 59.4922 16.2254L48.4282 16.2717L49.1644 13.5086L60.2285 13.4624C60.78 13.46 61.2481 13.3024 61.6327 12.9894C62.0246 12.6764 62.2904 12.2577 62.4301 11.7335C62.4981 11.4784 62.5199 11.2448 62.4957 11.0326C62.4714 10.8204 62.4028 10.6367 62.2899 10.4814C62.1844 10.3262 62.0326 10.2065 61.8347 10.1224C61.644 10.0383 61.4164 9.99678 61.1516 9.99788L54.5551 10.0254C54.0918 10.0274 53.6125 9.95154 53.1172 9.79791C52.6238 9.63721 52.1926 9.3807 51.8237 9.0284C51.4622 8.67606 51.2034 8.2136 51.0475 7.64102C50.8989 7.06842 50.935 6.36765 51.1559 5.53873C51.3768 4.70981 51.7135 4.01132 52.166 3.44328C52.6278 2.86812 53.1338 2.40247 53.6842 2.04632C54.2438 1.68306 54.8127 1.42238 55.3911 1.26427C55.9714 1.09907 56.4932 1.01551 56.9565 1.01357L69.4837 0.961234L68.7474 3.72431L56.2202 3.77665C55.676 3.77892 55.207 3.94011 54.8132 4.26022C54.4267 4.58029 54.1636 5.00247 54.0239 5.52674C53.8823 6.05811 53.9208 6.47902 54.1392 6.78949C54.3669 7.09285 54.7528 7.24339 55.297 7.24112L61.9156 7.21346C62.2226 7.21926 62.5385 7.2604 62.8634 7.33689C63.1901 7.40629 63.5019 7.51822 63.7986 7.67267C64.1028 7.82709 64.3771 8.0241 64.6218 8.26369C64.8684 8.4962 65.065 8.77846 65.2116 9.11046C65.3655 9.44243 65.4548 9.82421 65.4794 10.2558C65.5039 10.6874 65.4435 11.1759 65.2982 11.7215Z" fill="black"/>
<path d="M89.4603 0.877769L83.007 15.1718C82.8726 15.4554 82.6751 15.7004 82.4144 15.9067C82.1538 16.1131 81.8688 16.2452 81.5596 16.3031C81.2448 16.3539 80.9665 16.3232 80.7246 16.211C80.4901 16.0988 80.3277 15.9225 80.2375 15.6823L77.2012 7.39375L69.7249 15.7262C69.5452 15.9322 69.3299 16.0923 69.0791 16.2066C68.8356 16.3208 68.5888 16.3785 68.3388 16.3795C67.9932 16.381 67.7163 16.276 67.5082 16.0645C67.3001 15.8531 67.2119 15.5775 67.2437 15.2377L68.3801 0.965844L71.2923 0.953677L70.5079 11.0097L76.8826 4.04062C77.0624 3.83464 77.274 3.67453 77.5175 3.56028C77.7683 3.446 78.0187 3.38834 78.2687 3.3873C78.5188 3.38625 78.7353 3.44196 78.9184 3.55443C79.1014 3.66689 79.2355 3.82556 79.3204 4.03044L81.9691 10.9618L86.5481 0.889936L89.4603 0.877769Z" fill="black"/>
<path d="M89.62 16.0995L86.7519 16.1115L90.8127 0.872118L93.6807 0.860135L89.62 16.0995Z" fill="black"/>
<path d="M109.969 7.16131C109.801 7.79185 109.57 8.35543 109.276 8.85205C108.982 9.34866 108.644 9.78884 108.263 10.1726C107.891 10.5492 107.489 10.8729 107.056 11.1436C106.624 11.4144 106.187 11.6356 105.745 11.8073C105.31 11.9789 104.879 12.1046 104.454 12.1842C104.036 12.2638 103.651 12.3043 103.298 12.3058L98.1983 12.3271L98.9345 9.56402L104.034 9.54271C104.409 9.51284 104.759 9.44061 105.084 9.32602C105.417 9.20432 105.717 9.04384 105.983 8.84457C106.249 8.64531 106.478 8.40727 106.669 8.13047C106.863 7.84659 107.006 7.52753 107.101 7.17329L107.435 5.91928C107.491 5.57228 107.498 5.25378 107.458 4.9638C107.418 4.67381 107.322 4.42652 107.171 4.22192C107.027 4.01729 106.827 3.8589 106.57 3.74674C106.316 3.6275 106.001 3.56866 105.626 3.57022L99.1615 3.59723C98.7791 3.59883 98.4631 3.69569 98.2136 3.88781C97.9641 4.07993 97.7912 4.35665 97.6949 4.71797L94.6677 16.0785L91.7997 16.0904L94.8268 4.72996C95.0156 4.02148 95.3085 3.41872 95.7054 2.92167C96.1096 2.4246 96.5509 2.02291 97.0292 1.71661C97.5148 1.41027 98.0109 1.18881 98.5174 1.05223C99.0258 0.908572 99.4786 0.835911 99.8757 0.834252L106.362 0.807151C107.009 0.804448 107.568 0.883495 108.04 1.0443C108.513 1.19801 108.909 1.40866 109.227 1.67626C109.554 1.93674 109.807 2.23999 109.987 2.586C110.174 2.93199 110.305 3.29591 110.379 3.67775C110.463 4.05248 110.493 4.4345 110.47 4.82383C110.449 5.20607 110.394 5.56723 110.303 5.9073L109.969 7.16131Z" fill="black"/>
<path d="M123.602 9.73696L116.106 9.76828L116.848 6.98395L124.344 6.95263L123.602 9.73696ZM123.234 15.9591L112.886 16.0023C112.489 16.004 112.073 15.9385 111.639 15.8059C111.204 15.6732 110.825 15.4554 110.502 15.1525C110.187 14.8424 109.96 14.4435 109.818 13.9558C109.685 13.4609 109.714 12.8557 109.905 12.1402L112.561 2.17186C112.612 1.98058 112.697 1.79976 112.816 1.62942C112.935 1.45907 113.074 1.30988 113.233 1.18183C113.399 1.05375 113.58 0.953917 113.775 0.882332C113.97 0.810747 114.171 0.774524 114.377 0.773663L127.294 0.719693L126.558 3.48277L115.064 3.53079L112.773 12.1282C112.677 12.4895 112.702 12.7654 112.85 12.9559C112.997 13.1463 113.262 13.2408 113.645 13.2392L123.97 13.196L123.234 15.9591Z" fill="black"/>
</svg><span className="l2"> X </span>
<svg width="97" height="23" viewBox="0 0 97 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="l3">
<path d="M42.3118 0.595459C43.4296 0.595459 44.5202 0.595459 45.6381 0.595459C46.0198 0.675084 46.4288 0.701625 46.8105 0.807791C48.1192 1.20591 49.4279 1.63058 50.7366 2.08179C50.9275 2.13487 51.1456 2.45337 51.1183 2.61262C50.9275 3.64774 50.573 4.65632 49.6733 5.37294C48.6645 6.16919 47.5194 6.46114 46.2379 6.06302C45.2836 5.77106 44.6838 5.10752 44.0295 4.44398C43.2388 3.64774 42.3663 2.90457 41.4938 2.16141C41.003 1.76329 40.4305 1.65712 39.7761 1.84291C38.5765 2.16141 38.222 3.14345 37.9766 4.12549C37.5677 5.77106 37.9766 7.3901 38.3038 8.98259C38.4947 9.91154 38.9582 10.7874 39.2581 11.6898C39.8034 13.3089 40.6213 14.8217 41.5483 16.255C42.4753 17.6617 43.6205 18.9622 44.6838 20.2893C45.0383 20.7405 45.6108 20.9528 45.9653 20.767C46.4833 20.5282 46.6469 20.1035 46.6469 19.5461C46.6196 18.0598 46.6469 16.5469 46.6469 15.0606C46.6469 14.689 46.5378 14.4502 46.2379 14.2113C45.8289 13.9193 45.4472 13.6008 45.0928 13.2558C44.9292 13.0965 44.8474 12.8577 44.6838 12.6188C45.7471 12.3799 51.2001 12.3799 52.3998 12.5922C52.4543 12.9107 52.5361 13.2292 52.5907 13.5477C53.4904 9.91154 55.8352 7.78822 59.5978 7.54935C64.1237 7.25739 67.2592 9.19492 68.2953 13.8132C68.4043 13.6274 68.4861 13.4947 68.5407 13.3619C68.677 12.8311 68.7861 12.3003 68.9496 11.796C69.4949 10.1504 70.531 8.87642 72.1396 8.10672C73.9119 7.23085 75.7114 7.28393 77.4836 8.1598C77.9744 8.39868 78.2197 8.26597 78.2197 7.73514C78.2197 6.80618 78.1925 5.87723 78.2197 4.97482C78.247 4.47053 77.9744 4.31128 77.5109 4.31128C76.8565 4.28474 76.4203 3.93969 76.0385 3.46195C75.6568 2.9842 75.7386 2.40028 75.7114 1.84291C75.6841 1.39171 75.8477 1.28554 76.3112 1.28554C78.6015 1.31208 80.8917 1.31208 83.1547 1.28554C83.6727 1.28554 83.8363 1.41825 83.8363 1.92254C83.8091 8.34559 83.8091 14.7686 83.8363 21.2182C83.8363 22.1737 83.5909 22.1737 84.8451 22.1472C84.8724 22.1472 84.8997 22.1207 84.9269 22.0941C84.9542 21.7491 84.9815 21.4306 85.036 21.1121C85.145 20.4751 85.1996 19.8381 85.3904 19.2276C85.4722 18.9357 85.7449 18.6172 86.0175 18.4314C86.3992 18.1925 86.6719 18.511 86.89 18.7764C87.0536 18.9357 87.1627 19.148 87.2717 19.3603C87.6534 19.9177 88.0079 20.5282 88.4714 21.059C88.8531 21.5102 89.0985 22.1472 89.8619 22.1472C90.2163 22.1472 90.5708 22.1207 90.9252 22.0676C91.7432 21.9349 92.5339 20.7405 92.3703 20.077C92.1249 19.0684 91.3342 18.5906 90.5162 18.166C89.2621 17.5024 87.9533 16.892 86.89 15.963C85.9357 15.1137 85.2814 14.1051 85.3359 12.778C85.3359 12.3799 85.3086 11.9818 85.3359 11.5571C85.3904 10.7874 85.7176 10.0973 86.2084 9.51342C87.3262 8.18634 88.8803 7.68205 90.5435 7.57589C92.0431 7.49626 93.5427 7.54935 95.0695 7.57589C95.5875 7.57589 96.0238 8.13326 95.9147 8.63755C95.6966 9.46034 95.4512 10.2831 95.2058 11.0794C95.0422 11.5571 94.1698 11.7164 93.8698 11.3182C93.27 10.522 92.7247 9.67267 92.1249 8.87642C91.934 8.61101 91.7432 8.23943 91.4433 8.10672C90.898 7.86784 89.8619 8.23943 89.5074 8.71717C88.9894 9.40726 89.0712 10.3362 89.671 11.0263C90.3799 11.8225 91.3069 12.2737 92.2339 12.778C93.0246 13.2292 93.8426 13.6804 94.606 14.2113C95.4785 14.8217 95.942 15.7241 96.351 16.6531C96.351 17.3963 96.351 18.1394 96.351 18.856C96.0238 19.4134 95.7784 20.077 95.3421 20.5547C94.1152 21.9083 92.5066 22.5453 90.6798 22.5719C88.6895 22.625 86.6991 22.5719 84.7088 22.5719C82.6912 22.5719 80.6463 22.5719 78.6287 22.5719C78.247 22.5719 78.1379 22.4392 78.1652 22.0941C78.1925 21.7225 78.1652 21.351 78.1652 20.9794C78.1925 20.6609 78.0561 20.4751 77.729 20.5547C77.5381 20.6078 77.3745 20.714 77.2109 20.8201C75.875 21.9349 74.4026 22.7577 72.5486 22.5453C71.7307 22.4392 70.9673 22.1472 70.3402 21.5633C69.8767 21.1386 69.4949 20.6609 69.195 20.077C68.8679 19.4665 68.5679 18.8826 68.5134 18.166C68.4861 17.7413 68.2953 17.3432 68.1862 16.9185C68.1317 16.9185 68.0772 16.892 68.0499 16.892C67.9681 17.0778 67.859 17.2636 67.8045 17.4759C67.75 17.6617 67.8318 17.9006 67.75 18.0598C67.2592 19.1215 66.6867 20.1035 65.7324 20.8467C64.7508 21.6429 63.6057 22.1472 62.3788 22.3595C61.0155 22.5984 59.625 22.6515 58.2618 22.3065C56.5986 21.8818 55.1808 21.059 54.172 19.7054C53.5177 18.8295 52.8906 17.9006 52.836 16.7327C52.836 16.5735 52.727 16.4408 52.6452 16.3081C52.5089 16.5735 52.4271 16.8123 52.4271 17.0778C52.4271 17.9271 52.4271 18.7764 52.4271 19.6523C52.4271 19.785 52.3998 19.9973 52.318 20.0504C51.391 20.6078 50.4913 21.2448 49.5097 21.6695C47.1377 22.678 44.6565 22.7577 42.1209 22.333C40.6486 22.0941 39.2308 21.5898 38.0039 20.767C35.7136 19.2011 34.1595 17.1043 33.6142 14.3971C33.587 14.3174 33.5052 14.2378 33.4234 14.1582C33.3416 14.2644 33.2598 14.344 33.2053 14.3971C32.7418 14.9279 32.36 15.5649 31.8147 15.963C30.7787 16.6796 29.6335 17.2636 28.5157 17.9271C27.725 18.4048 26.9616 18.856 26.5799 19.7585C26.2527 20.6078 26.5526 21.6164 27.5341 21.988C28.0794 22.1737 28.8701 22.0941 29.1428 21.696C29.7153 20.8997 30.2606 20.1035 30.7787 19.2807C30.9968 18.9357 31.2694 18.6437 31.7329 18.6437C32.1965 18.6437 32.4691 18.9091 32.5782 19.2542C32.8235 20.1035 33.0417 20.9794 33.1507 21.8287C33.2053 22.2799 32.7963 22.5719 32.251 22.5719C30.7514 22.5719 29.2791 22.5719 27.7795 22.5719C27.3978 22.5719 26.9888 22.5188 26.6071 22.4126C25.1894 22.0676 24.017 21.404 23.1445 20.2097C22.4356 19.2542 21.8903 18.2721 21.7267 17.1043C21.6722 16.7593 21.5631 16.4408 21.4813 16.1223C21.2359 16.2815 21.0996 16.4408 21.0178 16.6C20.8542 16.9981 20.7724 17.4493 20.527 17.8209C19.491 19.3869 18.1277 20.5813 16.3828 21.3775C14.5833 22.1737 12.702 22.5719 10.7116 22.5719C7.7125 22.5719 4.71335 22.5719 1.74147 22.5719C0.650867 22.5719 0.650867 22.5719 0.650867 21.5367C0.650867 20.3955 1.1689 19.8381 2.23224 19.6788C2.75027 19.5992 2.83207 19.3869 2.83207 18.9622C2.83207 14.6094 2.83207 10.2566 2.83207 5.93031C2.83207 5.26677 2.77754 5.21369 2.09591 5.16061C1.19617 5.10752 0.405482 4.23165 0.350952 3.40886C0.460012 3.01074 0.487277 2.63916 0.460012 2.26758C0.432747 1.84291 0.596337 1.68366 1.05984 1.68366C3.54096 1.7102 6.04933 1.68366 8.53045 1.68366C10.4663 1.68366 12.4021 1.65712 14.3106 2.08179C16.0556 2.45337 17.6642 3.11691 19.0275 4.25819C20.8542 5.77106 21.7267 7.81476 22.0539 10.0708C22.1357 10.7078 22.1629 11.3713 22.2175 12.1941C22.3811 11.9552 22.4901 11.8225 22.5719 11.6898C22.6537 11.504 22.681 11.3182 22.7628 11.1325C23.2808 10.23 23.9352 9.4338 24.8076 8.82334C27.1524 7.15122 30.5333 7.0716 32.7145 9.59305C32.8781 9.77884 32.9871 9.96463 33.2053 10.2566C33.2598 9.96463 33.3143 9.80538 33.3416 9.64613C33.4779 8.98259 33.5597 8.31905 33.7506 7.68205C34.105 6.48768 34.6503 5.3464 35.441 4.36436C36.6134 2.90457 38.0584 1.76329 39.9124 1.17937C40.7031 0.967041 41.5211 0.807791 42.3118 0.595459ZM9.07575 12.141C9.07575 14.5563 9.07575 16.9716 9.07575 19.3869C9.07575 20.13 9.07575 20.8732 9.07575 21.5898C9.07575 21.8818 9.15754 22.1207 9.48472 22.1207C10.0028 22.0941 10.5481 22.0941 11.0661 21.9614C12.6475 21.5102 13.6563 20.3424 14.3652 19.0153C14.8559 18.0598 15.2104 17.0247 15.4012 15.963C15.6466 14.6625 15.7557 13.3354 15.8375 12.0349C15.8647 11.1855 15.7284 10.3362 15.6466 9.46034C15.6193 9.00913 15.5921 8.55793 15.483 8.13326C15.2649 7.28393 15.074 6.4346 14.7741 5.63835C14.4197 4.7094 13.8471 3.91315 13.0837 3.22307C12.2657 2.50645 11.3115 2.21449 10.2754 2.10833C9.53925 2.0287 9.10301 2.0287 9.13028 3.09037C9.10301 6.1161 9.07575 9.1153 9.07575 12.141ZM64.8054 20.077C64.7781 20.077 64.7508 20.077 64.7508 20.0504C64.7508 19.8115 64.7781 19.5727 64.6963 19.3603C64.2328 18.0598 63.8238 16.7327 63.1967 15.5118C62.3515 13.8928 61.37 12.3534 60.3339 10.8405C59.7886 10.0443 58.9707 9.40726 58.2345 8.74372C57.8801 8.42522 57.3893 8.42522 56.9258 8.63755C56.435 8.84988 56.326 9.24801 56.326 9.72575C56.326 10.4955 56.3805 11.2652 56.7349 12.0083C57.1984 12.9904 57.4984 14.0255 57.9891 15.0075C58.4799 15.963 59.107 16.8389 59.6523 17.7678C60.3884 19.0418 61.2882 20.1831 62.406 21.1121C63.0604 21.6695 64.1783 21.8287 64.56 21.059C64.6963 20.767 64.7236 20.422 64.8054 20.077ZM78.247 14.3705C78.247 12.7515 78.247 11.1059 78.247 9.48688C78.247 9.30109 78.1652 9.03567 78.0289 8.92951C77.2927 8.34559 75.7659 8.66409 75.2751 9.48688C74.5935 10.6016 74.2663 11.796 74.2936 13.0965C74.3208 13.9459 74.2936 14.7686 74.2936 15.618C74.2936 16.6531 74.4844 17.6882 74.9752 18.6172C75.5205 19.7054 76.5293 20.1831 77.7835 19.8381C78.1379 19.7319 78.2743 19.5727 78.247 19.2011C78.2197 17.5821 78.247 15.9896 78.247 14.3705ZM25.053 10.7078C25.1076 11.8225 25.4347 12.7515 25.8982 13.6274C26.3345 14.4236 26.8525 15.1402 27.6432 15.6445C28.3248 16.0692 29.0064 15.9896 29.3336 15.4056C29.5517 15.0341 29.7426 14.5563 29.6881 14.1582C29.579 13.2558 29.3609 12.3268 29.061 11.451C28.7065 10.3893 27.9704 9.5665 26.8798 9.16838C26.1164 8.87642 25.462 8.98259 25.1621 9.85846C25.0803 10.1504 25.0803 10.4955 25.053 10.7078Z" fill="black"/>
</svg></div>
<button style={{margin: "0 0 0 0px"}} className="b1">Login</button>

    </nav><br/><br/><br/><br/>

 
    <div style={{ display: 'flex', flexDirection: 'row' }} className="card1">
      <div style={{ flex: 1 }}>
      <p className="t3"> SOLSWIPE CRYPTO DEBIT CARD</p>
      <p className="t4">(BETA PROGRAM)</p>
      <p className="t6">We have fast-forwarded our SolSwipe Crypto Debit Card. The first limited batch of cards are slated to be released for you guys by the end of Q3 2022. Details of staked amount and their limits will be released at a later date.</p>
        <button className='b2'>GET STARTED</button>
      </div>
      <div style={{ flex: 1, textAlign: 'right' }}>
        <img src={image1} alt="Image" className='img1' />
      </div><br/><br/>

      
      <div>
<svg width="1443" height="142" viewBox="0 30 1440 122" fill="none" xmlns="http://www.w3.org/2000/svg"className="x1">
<path d="M-1.34799 85.6235C-5.4621 81.8541 -13.5929 81.0151 -17.144 81.0667L-18.007 21.7267L1456.22 0.286453L1457.1 60.5836C1448.94 57.9899 1431.62 53.2957 1427.59 55.2689C1422.55 57.7354 1408.36 58.8991 1403.24 55.6231C1398.12 52.347 1378.35 53.5918 1374.83 56.0362C1372.02 57.9917 1367.6 59.1728 1365.75 59.5189C1365.72 57.6047 1365 54.9027 1364.65 53.791C1364.28 56.4768 1358.15 60.4271 1355.13 62.0665C1350.21 61.3403 1337.32 58.5921 1325.06 53.4094C1309.75 46.9311 1255.71 64.4697 1246.53 61.2527C1239.19 58.679 1237.99 55.7926 1238.32 54.671C1224.47 56.1488 1195.76 59.3106 1191.71 60.1353C1187.67 60.96 1187.11 69.4561 1187.34 73.6011C1185.29 72.0354 1179.65 68.0649 1173.51 64.7078C1165.84 60.5116 1149.67 65.0546 1145.69 70.8562C1141.72 76.6578 1135.19 81.0607 1133.06 74.3905C1131.36 69.0544 1125.86 67.7941 1123.32 67.831C1115.57 69.3798 1097.72 72.9898 1088.42 75.0398C1076.78 77.6022 1078.93 85.2295 1069.2 79.1485C1061.41 74.2838 1041.53 72.6902 1032.57 72.5015C1029.39 74.7814 1021.31 80.0364 1014.45 82.8166C1006.04 86.2229 1002.45 84.9609 993.661 81.8801L993.121 81.6908C985.777 79.1172 976.913 83.6816 973.399 86.2855C972.674 82.9455 969.79 75.3291 964.052 71.5833C956.88 66.9011 947.422 79.4836 940.8 77.6653C935.501 76.2107 933.088 70.7572 932.543 68.2123C929.02 70.1782 909.763 71.8942 903.669 71.5042C898.793 71.1922 896.986 77.1856 896.692 80.2213C892.768 77.8852 882.594 73.821 873.293 76.2538C861.667 79.2948 856.657 83.6755 848.435 76.6153C841.858 70.9671 830.068 69.7027 824.995 69.7765C818.613 72.9007 803.078 76.9878 791.992 68.3418C778.135 57.5344 749.823 64.6473 749.844 66.0829C749.861 67.2314 737.834 77.5856 731.818 82.6192C733.131 79.8877 735.647 73.7563 735.202 71.0823C734.646 67.7399 730.595 68.2775 723.534 71.252C717.886 73.6317 718.225 78.3495 719.101 80.4109C717.579 80.433 714.022 80.1018 711.971 78.6C709.406 76.7227 697.287 80.7281 691.248 84.1665C685.209 87.6049 681.574 81.9139 670.399 81.1191C661.46 80.4833 656.603 86.1063 655.292 88.9973C646.109 85.6207 625.103 78.7145 614.54 78.1023C601.336 77.3371 582.254 91.0168 578.64 86.7615C575.026 82.5062 565.846 79.2892 555.756 83.2651C545.665 87.2411 545.144 86.2913 538.987 81.5944C534.061 77.8368 528.771 76.9565 526.742 76.986L521.273 84.7239C518.229 84.7682 511.437 85.2499 508.618 86.8225C505.095 88.7884 506.221 96.4304 501.669 97.4539C497.117 98.4774 484.872 93.869 476.748 93.5085C470.249 93.2201 465.998 98.6109 464.684 101.342C461.451 99.9534 452.934 95.8652 444.739 90.6235C436.545 85.3818 423.354 85.5098 417.783 86.229C412.284 91.8932 399.139 102.2 390.555 98.1126C381.971 94.0253 368.716 96.6751 363.161 98.511C357.963 101.618 344.927 107.775 334.37 107.545C323.812 107.316 322.41 122.557 323.029 130.207C322.658 127.979 319.984 123.167 312.25 121.748C302.584 119.974 293.626 132.07 271.333 134.309C249.262 136.526 230.128 135.416 223.341 135.022L223.139 135.01C217.857 134.704 212.205 139.158 210.039 141.423C207.285 138.113 201.363 131.019 199.712 129.128C197.648 126.765 188.552 129.291 178.406 129.438C168.259 129.586 166.612 120.994 160.948 115.333C156.417 110.804 146.121 107.571 141.539 106.521C138.502 107.043 130.383 107.066 122.205 102.973C114.027 98.8794 112.631 95.9321 112.956 94.9701C110.287 97.5617 102.797 101.245 94.1853 95.2431C83.4205 87.7412 71.3009 91.7467 66.7352 91.8131C62.1694 91.8795 61.7317 96.6723 54.0526 91.9975C46.3734 87.3227 40.8418 90.7537 35.1779 85.0923C32.9516 82.8669 32.0379 81.6086 31.8052 80.9403C28.4923 83.4249 22.2074 87.0476 18.4369 85.3358C13.329 83.0168 3.79465 90.3352 -1.34799 85.6235Z" fill="white"/>
</svg>
</div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
</>
  );
}

export default Navbar;