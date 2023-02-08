import React from "react";
import './Page1.css'
import image3 from '../Images/image3.png'
import image4 from '../Images/image 4.png'
import image5 from '../Images/image5.png'
import image6 from '../Images/image6.png'

import image7 from '../Images/image7.png'

// import { Container, Row, Col, Card } from "react-bootstrap";
import { Card, CardImg, CardText, CardBody,Col,CardTitle,CardHeader,Row, } from 'reactstrap';
const Page1 = () => {
return(
    <>
    <section className="body"><br/><br/>
        <h1 className="t10">BETA LAUNCH CARD DETAILS</h1>
        
        <h5 className="t11">X+ONLY</h5>
       
       
        <div className="frame"> 
         <div style={{display: "flex", flexWrap: "wrap"}}>
          <div style={{width: "30%"}}  >
          <img src={image3} alt="Image" style={{width: "100%"}} />
          </div>
              <div style={{width: "70%", textAlign: "left"}}>
                <div>
                <p className="t12">BLACK Platinum Card</p>
                <p className="t13">(X+ONLY)</p>
                <p className="t14">$550 USDC</p>
                <p className="t15">Monthly Top-up Limit: $150,000 USD</p>
                </div>
            </div>
      </div>
      </div>


      <h5 className="t16">For DeGods Holder</h5>

      <div className="frame1">
      <div style={{display: "flex", flexWrap: "wrap"}}>
          <div style={{width: "90%"}}  >
          <img src={image4} className="image4" alt="Image" style={{width: "100%"}} />
          </div>
              <div style={{width: "70%", textAlign: "left"}}>
                <div>
                <p className="t17">Black Plastic Card</p>
                <p className="t19">(DEGODS)</p>
                <p className="t18">$250 USDC</p>
                <p className="t20">Monthly Top-up Limit: $30,000 USD</p>
               </div>
            </div>
      </div>
      </div>


      <div className="frame2">
      <div style={{display: "flex", flexWrap: "wrap"}}>
          <div style={{width: "90%"}}  >
          <img src={image5} className="image5" alt="Image" style={{width: "100%"}} />
          </div>
              <div style={{width: "70%", textAlign: "left"}}>
                <div>
                <p className="t17">Platinum Card</p>
                <p className="t19">(DEGODS)</p>
                <p className="t18">$550 USDC</p>
                <p className="t20">Monthly Top-up Limit: $120,000 USD</p>
               </div>
            </div>
      </div>
      </div>
      <br/>
      <div style={{ width: '80%' }} className="Card6">
      <div className="t25">Card Requirements</div>
      <Row className="Card7">
        <Col xs="3" style={{background:'rgb(93, 22, 123)'}}>
      </Col>
     </Row>

      <br />  
      
      <div className="img">
      <div >
        <img className="image00" src={image7}/></div><br/>
       <div className="img0"><h5>Black Plastic</h5>
         <img   src={image3}/></div><br/>
        <div className="img01" ><h5>Platinum</h5>
          <img   src={image5}/></div><br/>
        <div className="img02"><h5>Black Platinum</h5>
          <img   src={image6}/></div><br/><br/>
      </div>
   </div>
<br/>
<div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '32%',background:'rgb(50, 5, 69)' }} className="t27">Card Application (USD)</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">$250</p>
      <p style={{ width: '19%',background:'rgb(50, 5, 69)' }} className="t28">$550</p>
      <p style={{ width: '30%',background:'rgb(50, 5, 69)'   }} className="t28">$550</p>
    </div>
    <hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '32%',background:'rgb(50, 5, 69)' }} className="t27">SolSwipe NFT Requirement</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">0</p>
      <p style={{ width: '19%',background:'rgb(50, 5, 69)' }} className="t28">1</p>
      <p style={{ width: '30%',background:'rgb(50, 5, 69)'   }} className="t28">1</p>
    </div>
    <hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '32%',background:'rgb(50, 5, 69)' }} className="t27">Card Replacement Fee (USD)</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">Text 2</p>
      <p style={{ width: '19%',background:'rgb(50, 5, 69)' }} className="t28">Text 3</p>
      <p style={{ width: '30%',background:'rgb(50, 5, 69)'   }} className="t28">Text 4</p>
    </div><hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '32%',background:'rgb(50, 5, 69)' }} className="t27">Card Loading Fee (%)</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">2.25% (-0.5% for <br/>Solswipe  NFT holders)</p>
      <p style={{ width: '19%',background:'rgb(50, 5, 69)' }} className="t28">2.25% (-0.5% for <br/>SolSwipe NFT holders) </p>
      <p style={{ width: '30%',background:'rgb(50, 5, 69)'   }} className="t28">2.25% (-0.5% for <br/>Solswipe NFT holders)</p>
    </div><hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '32%',background:'rgb(50, 5, 69)' }} className="t27">SolSwipe NFT Requirement</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">N/A</p>
      <p style={{ width: '19%',background:'rgb(50, 5, 69)' }} className="t28">N/A</p>
      <p style={{ width: '30%',background:'rgb(50, 5, 69)'   }} className="t28">N/A</p>
    </div>    <hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '32%',background:'rgb(50, 5, 69)' }} className="t27">Loading Cap</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">$30,000 / Month</p>
      <p style={{ width: '19%',background:'rgb(50, 5, 69)' }} className="t28">$75,000 / Month</p>
      <p style={{ width: '30%',background:'rgb(50, 5, 69)'   }} className="t28">N/A</p>
    </div>
    <hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '32%',background:'rgb(50, 5, 69)' }} className="t27">Minimum First Load</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">0 / Month</p>
      <p style={{ width: '19%',background:'rgb(50, 5, 69)' }} className="t28">0 / Month</p>
      <p style={{ width: '30%',background:'rgb(50, 5, 69)'   }} className="t28">0 / Month</p>
    </div>    <hr className="hr1" />
    <div style={{ display: 'flex',padding:'25px',background:'rgb(50, 5, 69)' , height:'90px',width:'38%',justifyContent: 'space-between',margin:'0 0 0 28%'  }} className="Card9">
      <span><button style={{ width: '13%' }} className="btn3">APPLY FOR THIS CARD</button></span><span>
      <button style={{ width: '13%' }} className="btn4">APPLY FOR THIS CARD</button></span><span>
      <button style={{ width: '13%' }} className="btn5">APPLY FOR THIS CARD</button></span>
    </div><hr className="hr2" />
    <div style={{height:'60px',width:'80%',margin:'0 0 0 10%',background:'rgb(93, 22, 123)'}} className="Card10">
    <p className="t29">Note:</p>
    <p className="t30">Card issuance fees include the physical card, fright charges, and the opening of offshore bank account. (No bank book).</p>
    </div><br /><br/><br /><br/><br/><br/><br/>
   
    </section>
    <svg width="1440" height="139" viewBox="0 10 1440 118" fill="none" xmlns="http://www.w3.org/2000/svg" className="vector392">
<path d="M1441.81 71.1168C1445.68 75.2873 1453.76 76.6632 1457.31 76.8299L1454.42 138.521L-20.4148 69.3383L-17.4743 6.65234C-9.48634 9.85246 7.52795 15.8028 11.6814 14.0032C16.8732 11.7538 31.1302 11.4253 36.042 15.1459C40.9538 18.8666 60.7934 18.8 64.4627 16.4791C67.3982 14.6224 71.8849 13.6695 73.7613 13.4251C73.668 15.4151 74.2123 18.2661 74.4963 19.4428C75.033 16.6758 81.4129 12.953 84.5357 11.4375C89.4028 12.4968 102.117 16.1513 114.036 22.2947C128.934 29.9741 184.055 15.1086 193.027 19.0197C200.204 22.1486 201.213 25.2207 200.82 26.3657C214.754 25.6897 243.647 24.1864 247.745 23.5809C251.842 22.9753 252.933 14.1846 252.966 9.86491C254.918 11.6185 260.303 16.0926 266.225 19.9603C273.628 24.795 290.078 21.0793 294.418 15.2996C298.759 9.51998 305.566 5.35191 307.27 12.4122C308.632 18.0605 314.048 19.7106 316.586 19.8297C324.437 18.7022 342.499 16.0592 351.931 14.5072C363.72 12.5673 362.064 4.5119 371.403 11.4318C378.874 16.9678 398.643 19.8563 407.594 20.6085C410.917 18.4376 419.321 13.4802 426.354 11.0179C434.971 8.00115 438.488 9.53527 447.072 13.2802L447.6 13.5103C454.777 16.6392 463.926 12.448 467.603 9.96123C468.116 13.4755 470.517 21.5658 476.015 25.8125C482.886 31.1209 493.136 18.638 499.64 20.9375C504.844 22.7771 506.911 28.5914 507.294 31.2686C510.94 29.4452 530.295 28.8573 536.362 29.6405C541.215 30.2671 543.401 24.1537 543.887 21.0187C547.661 23.6887 557.572 28.5413 567.023 26.5914C578.835 24.1539 584.121 19.9144 591.891 27.7579C598.107 34.0327 609.811 36.0776 614.886 36.3156C621.463 33.4663 637.248 30.1847 647.781 39.8531C660.947 51.9385 689.695 46.3066 689.765 44.8141C689.821 43.6201 702.497 33.6111 708.829 28.7559C707.343 31.5116 704.441 37.7243 704.716 40.5294C705.06 44.0358 709.144 43.7287 716.389 41.077C722.185 38.9556 722.145 34.0341 721.4 31.8386C722.922 31.91 726.456 32.4747 728.412 34.1619C730.856 36.271 743.223 32.8623 749.476 29.6654C755.73 26.4685 759.002 32.6053 770.121 34.124C779.016 35.3391 784.226 29.7997 785.72 26.8781C794.684 30.955 815.242 39.4317 825.761 40.7228C838.909 42.3368 858.848 29.3113 862.191 33.9555C865.533 38.5997 874.505 42.5108 884.842 39.0069C895.179 35.5029 895.64 36.5218 901.497 41.7825C906.182 45.9911 911.414 47.2337 913.444 47.329L919.4 39.6307C922.445 39.7736 929.264 39.6946 932.181 38.2359C935.827 36.4125 935.185 28.4047 939.799 27.624C944.414 26.8432 956.361 32.3897 964.457 33.2681C970.935 33.9708 975.526 28.6351 977.011 25.8793C980.155 27.5226 988.409 32.2975 996.267 38.2505C1004.13 44.2035 1017.32 44.8888 1022.93 44.4873C1028.79 38.9449 1042.58 29.0547 1050.9 33.8327C1059.22 38.6107 1072.64 36.6806 1078.3 35.1183C1083.7 32.2134 1097.11 26.6269 1107.65 27.5201C1118.19 28.4133 1120.56 12.6687 1120.42 4.68482C1120.65 7.02239 1123.02 12.186 1130.66 14.1399C1140.21 16.5823 1149.93 4.57309 1172.35 3.63055C1194.55 2.69746 1213.61 5.03754 1220.36 5.86748L1220.56 5.8922C1225.82 6.5378 1231.76 2.26212 1234.06 0.0435795C1236.61 3.6531 1242.08 11.3887 1243.61 13.4549C1245.52 16.0377 1254.77 13.9787 1264.92 14.4548C1275.07 14.9309 1276.18 23.9575 1281.48 30.1894C1285.72 35.175 1295.81 39.1716 1300.32 40.5467C1303.39 40.1921 1311.5 40.6725 1319.42 45.4315C1327.33 50.1904 1328.54 53.3385 1328.16 54.3176C1330.99 51.7912 1338.71 48.4304 1346.94 55.1985C1357.22 63.6585 1369.59 60.2498 1374.15 60.4641C1378.72 60.6784 1379.46 55.7271 1386.84 61.0593C1394.22 66.3914 1399.97 63.1707 1405.27 69.4027C1407.35 71.8523 1408.19 73.2161 1408.38 73.9247C1411.85 71.5493 1418.36 68.1764 1422.02 70.1883C1426.98 72.9139 1436.97 65.9037 1441.81 71.1168Z" fill="white"/>
</svg>

<h1 className='t32'>hiii</h1>
       <br/><br/>
     <br/><br/><br/><br/><br/><br/><br/> 
      <br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/> 
      <br/><br/><br/>
     </>
)
}
export default Page1;


