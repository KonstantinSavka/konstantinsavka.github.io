import React from "react";

let Preloader = (props) => {
   return <div className='w-full h-full bg-white/30 backdrop-blur-lg absolute left-0 top-0'>
           <img className='block w-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' src={'https://demo.promo///sk/mails_archive_3/newLucky/s.svg'} alt=""/>
   </div>
}

export default Preloader