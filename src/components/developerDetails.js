import React from 'react';
import { baseUrl } from '../Shared/URL';
import { Card, CardImg, CardBody, CardHeader } from 'reactstrap';

class Developer extends React.Component {


   render() {
      return(
         <>
            <div id="Developer" className='conatiner' style={{backgroundColor: 'whitesmoke'}}>
               <div className='row justify-content-center'>
                  <div className='col-12 col-sm-5 mt-5 mb-5, d-flex justify-content-center'>
                     <Card style={{borderRadius: '5%', margin: '2px', backgroundColor: 'transparent', border: "0px", height: "400px", width: "391px"}} className="developerPics">
                        <CardImg style={{borderRadius: '5%', height: "400px", width: "390px"}} src={ baseUrl + 'image/IMG_20220515_094908_775.jpg'}/>
                     </Card>
                  </div>
                  <div className='col-12 col-sm-5 mt-5 mb-5 developerInfo'>
                     <Card style={{border: '0px'}}>
                        <CardHeader style={{border: '0px', background: "white"}}><h2>Site developer's details</h2></CardHeader>
                        <CardBody>
                           <h3><strong>Name</strong>: Tolulope Adeleke</h3>
                           <h3><strong>Nickname</strong>: Tolugold</h3>
                           <h3><strong>Education status:</strong> Bsc Computer Science</h3>
                           <h3><strong>Skill-set:</strong><em> C programming language, python, web development (HTML5, CSS, Javascript, Reactjs, ExpressJs, Mongodb, MySql)</em></h3>
                           <p><strong>Plugins used for the development of this site are:</strong> Headroom, react-photoswipe-gallery </p>
                        </CardBody>
                     </Card>
                  </div>
               </div>
            </div>
            <div id='slideImage' className='carpics' style={{ position: 'relative'}}>
               <div id='slider'>
                  <ul>
                     <li><img src={baseUrl + 'image/car1.jpeg'} width='280px' height='150px' alt="..." /></li>
                     <li><img src={baseUrl + 'image/1-bmw-m4-non-comp-manual-2022-fd-front-track.jpeg'} width='280px' height='150px' alt="..." /></li>
                     <li><img src={baseUrl + 'image/022-rolls-royce-boat-tail-front-static-2022.jpeg'} width='280px' height='150px' alt="..." /></li>
                     <li><img src={baseUrl + 'image/2022-mazda-cx-30.jpeg'} width='280px' height='150px' alt="..." /></li>
                     <li><img src={baseUrl + 'image/170817-hyundai-motors-next-gen-fuel-cell-suv_5.jpeg'} width='280px' height='150px' alt="..." /></li>
                     <li><img src={baseUrl + 'image/3410075_latestcarmodel5_jpeg572ff3aa70c92dea33a356b4c0bff1c6.jpeg'} width='280px' height='150px' alt="..." /></li>
                     <li><img src={baseUrl + 'image/20211214_bev_15_1.jpeg'} width='280px' height='150px' alt="..." /></li>
                     <li><img src={baseUrl + 'image/alpine-a4810-concept-front-three-quarters.jpeg'} width='280px' height='150px' alt="..."/></li>
                     <li><img src={baseUrl + 'image/bugati.jpeg'} width='280px' height='150px' alt="..." /></li>
                     <li><img src={baseUrl + 'image/Los+Angeles+Auto+Show+Previews+Latest+Car+88FMYokZQqml.jpeg'} width='280px' height='150px' alt="..." /></li>
                     <li><img src={baseUrl + 'image/jagua.jpeg'} width='280px' height='150px' alt="..." /></li>
                     <li><img src={baseUrl + 'image/2022-Kia-Telluride-14.jpeg'} width='280px' height='150px' alt="..." /></li>
                     <li><img src={baseUrl + 'image/BMW.jpeg'} width='280px' height='150px' alt="..." /></li>
                     <li><img src={baseUrl + 'image/suv.jpeg'} width='280px' height='150px' alt="..." /></li>
                     <li><img src={baseUrl + 'image/suv1.jpeg'} width='280px' height='150px' alt="..." /></li>
                  </ul>
               </div>
            </div>
         </>
      )
   }
}

export default Developer;