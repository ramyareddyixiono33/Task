import React from "react";
import './Page1.css'
import image3 from '../Images/image3.png'
import image4 from '../Images/image 4.png'
import image5 from '../Images/image5.png'
import image6 from '../Images/image6.png'

import image7 from '../Images/image7.png'

// import { Container, Row, Col, Card } from "react-bootstrap";
import { Card, CardImg, CardText, CardBody,Col,CardTitle,CardHeader,Row, } from 'reactstrap';
const Nav2 = () => {
return(
    <>
    <section className="body">
        <h1 className="t10">BETA LAUNCH CARD DETAILS</h1>
        
        <h5 className="t11">X+ONLY</h5>
       
       
        <div className="frame"> 
         <div style={{display: "flex", flexWrap: "wrap"}}>
          <div style={{width: "30%"}}  >
          <img src={image3} alt="Image" style={{width: "110%"}} />
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
      <div style={{ width: '76%' }} className="Card6">
      <div className="t25">Card Requirements</div>
      <Row className="Card7">
        <Col xs="3" style={{background:'rgb(93, 22, 123)'}}>
      </Col>
     </Row>

      <br />  
      
      <div className="img">
      <div >
        <img className="image00" src={image7}/></div>
       <div className="img0"><h5>Black Plastic</h5>
         <img   src={image3}/></div>
        <div className="img01" ><h5>Platinum</h5>
          <img   src={image5}/></div>
        <div className="img02"><h5>Black Platinum</h5>
          <img   src={image6}/></div>
      </div>
   </div>
<br/>
<div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t27">Card Application (USD)</p>
      <p style={{ width: '22%',background:'rgb(50, 5, 69)' }} className="t28">$250</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">$550</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)'   }} className="t28">$550</p>
    </div>
    <hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t27">SolSwipe NFT Requirement</p>
      <p style={{ width: '22%',background:'rgb(50, 5, 69)' }} className="t28">0</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">1</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)'   }} className="t28">1</p>
    </div>
    <hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t27">Card Replacement Fee (USD)</p>
      <p style={{ width: '22%',background:'rgb(50, 5, 69)' }} className="t28">Text 2</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">Text 3</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)'   }} className="t28">Text 4</p>
    </div><hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t27">Card Loading Fee (%)</p>
      <p style={{ width: '22%',background:'rgb(50, 5, 69)' }} className="t28">2.25% (-0.5% for Solswipe NFT holders)</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">2.25% (-0.5% for Solswipe NFT holders) </p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)'   }} className="t28">2.25% (-0.5% for Solswipe NFT holders)</p>
    </div><hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t27">SolSwipe NFT Requirement</p>
      <p style={{ width: '22%',background:'rgb(50, 5, 69)' }} className="t28">N/A</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">N/A</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)'   }} className="t28">N/A</p>
    </div>    <hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t27">Loading Cap</p>
      <p style={{ width: '22%',background:'rgb(50, 5, 69)' }} className="t28">$30,000 / Month</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">$75,000 / Month</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)'   }} className="t28">N/A</p>
    </div>
    <hr className="hr1" /><br />
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className="Card8">
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t27">Minimum First Load</p>
      <p style={{ width: '22%',background:'rgb(50, 5, 69)' }} className="t28">0 / Month</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)' }} className="t28">0 / Month</p>
      <p style={{ width: '25%',background:'rgb(50, 5, 69)'   }} className="t28">0 / Month</p>
    </div>    <hr className="hr1" />
    <div style={{ display: 'flex',padding:'25px',background:'rgb(50, 5, 69)' , height:'90px',width:'38%',justifyContent: 'space-between',margin:'0 0 0 28%'  }} className="Card9">
      <span><button style={{ width: '13%' }} className="btn3">APPLY FOR THIS CARD</button></span><span>
      <button style={{ width: '13%' }} className="btn4">APPLY FOR THIS CARD</button></span><span>
      <button style={{ width: '13%' }} className="btn5">APPLY FOR THIS CARD</button></span>
    </div><hr className="hr2" />
    <div style={{height:'60px',width:'66%',margin:'0 0 0 13%',background:'rgb(93, 22, 123)'}} className="Card10">
    <p className="t29">Note:</p>
    <p className="t30">Card issuance fees include the physical card, fright charges, and the opening of offshore bank account. (No bank book).</p>
    </div><br /><br/><br /><br/><br/><br/><br/>
   
    </section>
    <svg width="1740" height="2" viewBox="0 30 1440 122" fill="none" xmlns="http://www.w3.org/2000/svg"className="ll2">
<path d="M-1.34799 85.6235C-5.4621 81.8541 -13.5929 81.0151 -17.144 81.0667L-18.007 21.7267L1456.22 0.286453L1457.1 60.5836C1448.94 57.9899 1431.62 53.2957 1427.59 55.2689C1422.55 57.7354 1408.36 58.8991 1403.24 55.6231C1398.12 52.347 1378.35 53.5918 1374.83 56.0362C1372.02 57.9917 1367.6 59.1728 1365.75 59.5189C1365.72 57.6047 1365 54.9027 1364.65 53.791C1364.28 56.4768 1358.15 60.4271 1355.13 62.0665C1350.21 61.3403 1337.32 58.5921 1325.06 53.4094C1309.75 46.9311 1255.71 64.4697 1246.53 61.2527C1239.19 58.679 1237.99 55.7926 1238.32 54.671C1224.47 56.1488 1195.76 59.3106 1191.71 60.1353C1187.67 60.96 1187.11 69.4561 1187.34 73.6011C1185.29 72.0354 1179.65 68.0649 1173.51 64.7078C1165.84 60.5116 1149.67 65.0546 1145.69 70.8562C1141.72 76.6578 1135.19 81.0607 1133.06 74.3905C1131.36 69.0544 1125.86 67.7941 1123.32 67.831C1115.57 69.3798 1097.72 72.9898 1088.42 75.0398C1076.78 77.6022 1078.93 85.2295 1069.2 79.1485C1061.41 74.2838 1041.53 72.6902 1032.57 72.5015C1029.39 74.7814 1021.31 80.0364 1014.45 82.8166C1006.04 86.2229 1002.45 84.9609 993.661 81.8801L993.121 81.6908C985.777 79.1172 976.913 83.6816 973.399 86.2855C972.674 82.9455 969.79 75.3291 964.052 71.5833C956.88 66.9011 947.422 79.4836 940.8 77.6653C935.501 76.2107 933.088 70.7572 932.543 68.2123C929.02 70.1782 909.763 71.8942 903.669 71.5042C898.793 71.1922 896.986 77.1856 896.692 80.2213C892.768 77.8852 882.594 73.821 873.293 76.2538C861.667 79.2948 856.657 83.6755 848.435 76.6153C841.858 70.9671 830.068 69.7027 824.995 69.7765C818.613 72.9007 803.078 76.9878 791.992 68.3418C778.135 57.5344 749.823 64.6473 749.844 66.0829C749.861 67.2314 737.834 77.5856 731.818 82.6192C733.131 79.8877 735.647 73.7563 735.202 71.0823C734.646 67.7399 730.595 68.2775 723.534 71.252C717.886 73.6317 718.225 78.3495 719.101 80.4109C717.579 80.433 714.022 80.1018 711.971 78.6C709.406 76.7227 697.287 80.7281 691.248 84.1665C685.209 87.6049 681.574 81.9139 670.399 81.1191C661.46 80.4833 656.603 86.1063 655.292 88.9973C646.109 85.6207 625.103 78.7145 614.54 78.1023C601.336 77.3371 582.254 91.0168 578.64 86.7615C575.026 82.5062 565.846 79.2892 555.756 83.2651C545.665 87.2411 545.144 86.2913 538.987 81.5944C534.061 77.8368 528.771 76.9565 526.742 76.986L521.273 84.7239C518.229 84.7682 511.437 85.2499 508.618 86.8225C505.095 88.7884 506.221 96.4304 501.669 97.4539C497.117 98.4774 484.872 93.869 476.748 93.5085C470.249 93.2201 465.998 98.6109 464.684 101.342C461.451 99.9534 452.934 95.8652 444.739 90.6235C436.545 85.3818 423.354 85.5098 417.783 86.229C412.284 91.8932 399.139 102.2 390.555 98.1126C381.971 94.0253 368.716 96.6751 363.161 98.511C357.963 101.618 344.927 107.775 334.37 107.545C323.812 107.316 322.41 122.557 323.029 130.207C322.658 127.979 319.984 123.167 312.25 121.748C302.584 119.974 293.626 132.07 271.333 134.309C249.262 136.526 230.128 135.416 223.341 135.022L223.139 135.01C217.857 134.704 212.205 139.158 210.039 141.423C207.285 138.113 201.363 131.019 199.712 129.128C197.648 126.765 188.552 129.291 178.406 129.438C168.259 129.586 166.612 120.994 160.948 115.333C156.417 110.804 146.121 107.571 141.539 106.521C138.502 107.043 130.383 107.066 122.205 102.973C114.027 98.8794 112.631 95.9321 112.956 94.9701C110.287 97.5617 102.797 101.245 94.1853 95.2431C83.4205 87.7412 71.3009 91.7467 66.7352 91.8131C62.1694 91.8795 61.7317 96.6723 54.0526 91.9975C46.3734 87.3227 40.8418 90.7537 35.1779 85.0923C32.9516 82.8669 32.0379 81.6086 31.8052 80.9403C28.4923 83.4249 22.2074 87.0476 18.4369 85.3358C13.329 83.0168 3.79465 90.3352 -1.34799 85.6235Z" fill=" rgb(50, 5, 69)"/>
</svg><br /><br/><br /><br /><br/><br/>
<h1 className='t32'>hiii</h1>
       <br/><br/>
     <br/><br/><br/><br/><br/><br/><br/> 
      <br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/> 
      <br/><br/><br/>
     </>
)
}
export default Nav2;


