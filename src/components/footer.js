import React from 'react';
import { baseUrl } from '../Shared/URL';
import { Row, Col } from "reactstrap";

class Footer extends React.Component {
   render() {
      return(
         <div className='container-fluid footer' style={{ padding: '30px'}}>
            <Row className='mt-5 mb-5 justify-content-center align-content-center'>
               <Col sm="12" md="3" className='mt-5 ml-2 justify-content-center align-self-center'>
                  <h3 style={{color: 'white'}}>Links</h3>
                  <ul>
                     <li className='mt-2'><a href='/Home' >Home</a></li>
                     <li className='mt-2'><a href='/Cars' >Cars</a></li>
                  </ul>
               </Col>
               <Col sm="12" md="3" className='mt-5 ml-2 justify-content-center align-self-center'>
                  <h3 style={{color: 'white'}}>Sections</h3>
                  <ul>
                     <li className='mt-2'><a href='#cars' >Latest cars</a></li>
                     <li className='mt-2'><a href='#Developer' >Site developer</a></li>
                     <li className='mt-2'><a href='#history' >Car history</a></li>
                     <li className='mt-2'><a href="#step2" >Car company info</a></li>
                  </ul>
               </Col>
               <Col  sm="12" md="3" className='mt-5 ml-2 justify-content-center align-self-center'>
                  <h3 style={{color: 'white'}}>Contact us on:</h3>
                  <ul>
                     <li className='mt-2'><a href='https://www.facebook.com/tolulope.stephen.94' ><span className='fa fa-facebook-official'></span> facebook</a></li>
                     <li className='mt-2'><a href='https://twitter.com/Tolugold6'><span className='fa fa-twitter-square'></span> Tolugold6</a></li>
                     <li className='mt-2'> <a href='https://github.com/Tolugold1' ><span className='fa fa-github-square'></span> Tolugold1</a></li>
                     <li className='mt-2'><a href='tel:09063530888'><span className='fa fa-whatsapp'></span> 09063530888</a></li>
                  </ul>
               </Col>
               <Col  sm="12" md="3" className=' mr-2 justify-content-center align-self-center'>
                  <img src={baseUrl + 'image/022-rolls-royce-boat-tail-front-static-2022.jpeg'} alt="..." className='img-fluid'/>
               </Col>
            </Row>
         </div>
      )
   }
}

export default Footer;