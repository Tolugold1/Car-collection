import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { Media } from 'reactstrap';
import Bugatti from '../Shared/bugati.jpeg';
import { baseUrl } from '../Shared/URL';
import Loading from './Loading'

const RenderImages = ({ Details, carFailed, loading }) => {
   if (loading) {
      return(<div><Loading /></div>)
   } else if (carFailed) {
      return(<div>{carFailed}</div>)
   } else if (Details) {
      return(
         <div className='container' style={{backgroundImage: `url(${ Details.image })`, backgroundSize:'cover', padding: '50px'}}>
            <div className='mb-3'>
               <Gallery>
                  <div style={{display: 'grid',
            gridTemplateColumns: 'repeat(4, 0fr)', gridGap: 5, justifyContent: 'center'}} 
                  >
                  {Details.gallery.map((pics) => {
                     return(
                        <React.Fragment key={pics.No}>
                           <Item
                           original={baseUrl + pics.src}
                           thumbnail={baseUrl + pics.src}
                           height={pics.height}
                           width={pics.width}
                           >
                              {({ ref, open }) => (
                                 <div>
                                    <img
                                    ref={ref}
                                    onClick={open}
                                    src={baseUrl + pics.src}
                                    className='displayimage rounded'
                                    width='200'
                                    height='140'
                                    alt=''
                                    />
                                 </div>
                              )}
                           </Item>
                        </React.Fragment>
                     )
                  })}
                  </div>
               </Gallery>
            </div>
            <div className='mt-5' style={{backgroundColor:'rgba(49, 44, 76, 0.5)', padding:'40px', borderTopLeftRadius: '60px', borderBottomRightRadius: '60px'}}>
               {Details.details ? 
               <Media>
                  <Media left middle href='#'>
                     <Media object src={baseUrl + Details.image } width='160px' height='100px' alt='car image'/>
                  </Media>
                  <Media body className='ml-3'>
                     <Media heading tag='h2' style={{color: 'whitesmoke'}}>{Details.name}</Media>
                     <div style={{color: 'whitesmoke'}}>{Details.details}</div>
                  </Media>
               </Media> : <div></div>
               }
            </div>
         </div>
      )
   } else {
      return(<div></div>)
   }
}


const GalleryDisplay = (props) => {
   return(
      <div>
         <div className='container'>
            <RenderImages Details={props.selectedCar} carFailed={props.carFailed} loading={props.loading}/>
         </div>
      </div>
   )
}

export default GalleryDisplay;