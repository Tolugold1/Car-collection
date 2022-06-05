import React from 'react';
import { baseUrl } from '../Shared/URL'

const Footer = () => {
   return(
         <div className='container-fluid footer' style={{ padding: '30px'}}>
            <div className='row m-5'>
               <div className='col-12 col-sm-2 offset-1 justify-content-center align-self-center'>
                  <h3 style={{color: 'white'}}>Links</h3>
                  <ul>
                     <li className='mt-2'><a href='/Home' >Home</a></li>
                     <li className='mt-2'><a href='/Cars' >Cars</a></li>
                  </ul>
               </div>
               <div className='col-12 col-sm-3 ml-2 justify-content-center align-self-center'>
                  <h3 style={{color: 'white'}}>Sections</h3>
                  <ul>
                     <li className='mt-2'><a href='#cars' >Latest cars</a></li>
                     <li className='mt-2'><a href='/Developer' >Site developer</a></li>
                     <li className='mt-2'><a href='#history' >Car history</a></li>
                     <li className='mt-2'><a href="#step2" >Car company info</a></li>
                  </ul>
               </div>
               <div className='col-12 col-sm-3 ml-2 offset-1 justify-content-center align-self-center'>
                  <h3 style={{color: 'white'}}>Contact us on:</h3>
                  <ul>
                     <li className='mt-2'><a href='https://www.facebook.com/tolulope.stephen.94' ><span className='fa fa-facebook-official'></span> facebook</a></li>
                     <li className='mt-2'><a href='https://twitter.com/Tolugold6'><span className='fa fa-twitter-square'></span> Tolugold6</a></li>
                     <li className='mt-2'> <a href='https://github.com/Tolugold1' ><span className='fa fa-github-square'></span> Tolugold1</a></li>
                     <li className='mt-2'><a href='tel:09063530888'><span className='fa fa-whatsapp'></span> 09063530888</a></li>
                  </ul>
               </div>
               <div id='slideImage' className='carpics' style={{width: '280px', height: '150px'}}>
                  <div id='slider'>
                     <ul>
                        <li><img className='img-fluid' src={baseUrl + ''}/></li>
                        <li><img className='img-fluid' src={baseUrl + ''}/></li>
                        <li><img className='img-fluid' src={baseUrl + ''}/></li>
                        <li><img className='img-fluid' src={baseUrl + ''}/></li>
                        <li><img className='img-fluid' src={baseUrl + ''}/></li>
                        <li><img className='img-fluid' src={baseUrl + ''}/></li>
                        <li><img className='img-fluid' src={baseUrl + ''}/></li>
                        <li><img className='img-fluid' src={baseUrl + ''}/></li>
                        <li><img className='img-fluid' src={baseUrl + ''}/></li>
                        <li><img className='img-fluid' src={baseUrl + ''}/></li>
                        <li><img className='img-fluid' src={baseUrl + ''}/></li>
                        <li><img className='img-fluid' src={baseUrl + ''}/></li>
                        <li><img className='img-fluid' src={baseUrl + ''}/></li>
                        <li><img className='img-fluid' src={baseUrl + ''}/></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
   )
}

export default Footer;