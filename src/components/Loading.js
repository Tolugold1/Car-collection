import React from 'react';

const Loading = () => {
   return(
      <div className='d-flex'>
         <h2 style={{fontSize: '30px'}}><strong>Loading. . .</strong></h2>
         <div className='spinner-grow ml-5' style={{width: '100px', height: '100px'}} role='status'>
            <span className='sr-only'></span>
         </div>
      </div>
   )
}
export default Loading;