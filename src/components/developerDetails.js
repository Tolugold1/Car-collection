import React from 'react';
import { baseUrl } from '../Shared/URL';
import { Card, CardImg, CardBody, CardHeader } from 'reactstrap';
import $ from 'jquery';

class Developer extends React.Component {

   rollPic() {
      $(window).on('load', function(){
         const slideCount = $('#slider ul li').length;
         const imageWidth = $('#slider ul img').first().width();
         const totalWidth = `${slideCount * imageWidth}px`;

         $('#slider ul').css('width', totalWidth)
         var leftPosition = 0;
         var counter = 0;

         setInterval(function(){
            counter++;
            if (counter === (imageWidth * imageWidth)) {
               counter = 0;
               leftPosition = 0;
            } else {
               leftPosition = `-${counter * 1}px`;
               $('#slider ul').animate({'left': leftPosition})
            }
         },1)
      })
   }

   componentDidMount() {
      this.rollPic();
   }

   render() {
      return(
         <>
         <div className='conatiner' style={{backgroundColor: 'whitesmoke'}}>
            <div className='row'>
               <div className='col-12 col-sm-5 offset-1 mt-5 mb-5'>
                  <Card style={{borderRadius: '5%', padding: '3px', background: 'black'}} className="developerPics">
                     <CardImg style={{borderRadius: '5%'}} src={ baseUrl + 'image/IMG_20220515_094908_775.jpg'}/>
                  </Card>
               </div>
               <div className='col-12 col-sm-5 mt-5 mb-5 developerInfo'>
                  <Card style={{border: '0px'}}>
                     <CardHeader><h2>Site developer's details</h2></CardHeader>
                     <CardBody>
                        <h3><strong>Name</strong>: Tolulope Adeleke</h3>
                        <h3><strong>Nickname</strong>: Tolugold</h3>
                        <h3><strong>Education status:</strong> Undergraduate</h3>
                        <h3><strong>Skill-set:</strong><em>C programming language, python programming language, web developer(HTML5, CSS,Javascript, Reactjs)</em></h3>
                        <p><strong>Plugins used for the development of this site are:</strong> Headroom, react-transition-group, react-photoswipe-gallery </p>
                     </CardBody>
                  </Card>
               </div>
            </div>
         </div>
         <div id='slideImage' className='carpics' style={{ position: 'relative'}}>
               <div id='slider'>
                  <ul>
                     <li><img src={baseUrl + 'image/car1.jpeg'} width='280px' height='150px'/></li>
                     <li><img src={baseUrl + 'image/1-bmw-m4-non-comp-manual-2022-fd-front-track.jpeg'} width='280px' height='150px'/></li>
                     <li><img src={baseUrl + 'image/022-rolls-royce-boat-tail-front-static-2022.jpeg'} width='280px' height='150px'/></li>
                     <li><img src={baseUrl + 'image/2022-mazda-cx-30.jpeg'} width='280px' height='150px'/></li>
                     <li><img src={baseUrl + 'image/170817-hyundai-motors-next-gen-fuel-cell-suv_5.jpeg'} width='280px' height='150px'/></li>
                     <li><img src={baseUrl + 'image/3410075_latestcarmodel5_jpeg572ff3aa70c92dea33a356b4c0bff1c6.jpeg'} width='280px' height='150px'/></li>
                     <li><img src={baseUrl + 'image/20211214_bev_15_1.jpeg'} width='280px' height='150px'/></li>
                     <li><img src={baseUrl + 'image/alpine-a4810-concept-front-three-quarters.jpeg'} width='280px' height='150px'/></li>
                     <li><img src={baseUrl + 'image/bugati.jpeg'} width='280px' height='150px'/></li>
                     <li><img src={baseUrl + 'image/Los+Angeles+Auto+Show+Previews+Latest+Car+88FMYokZQqml.jpeg'} width='280px' height='150px'/></li>
                     <li><img src={baseUrl + 'image/jagua.jpeg'} width='280px' height='150px'/></li>
                     <li><img src={baseUrl + 'image/2022-Kia-Telluride-14.jpeg'} width='280px' height='150px'/></li>
                     <li><img src={baseUrl + 'image/BMW.jpeg'} width='280px' height='150px'/></li>
                     <li><img src={baseUrl + 'image/suv.jpeg'} width='280px' height='150px'/></li>
                     <li><img src={baseUrl + 'image/suv1.jpeg'} width='280px' height='150px'/></li>
                  </ul>
               </div>
            </div>
         </>
      )
   }
}

export default Developer;