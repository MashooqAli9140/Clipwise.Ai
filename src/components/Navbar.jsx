import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className='navbarcontent'>
          <div className='mainlogo'>
             <div className='leftlogo'>
               <div className='leftlogodesign'>
                   <svg className='design1' width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M0.223129 6.27074L13.5221 22.4382L18.5695 16.3196L5.70949 0.688049L0.223129 6.27074ZM13.5221 20.0712L2.19822 6.36007L5.57782 2.92113L16.5944 16.3196L13.5221 20.0712Z" fill="white"/>
                   </svg>
                   {/* ----- */}
                   <svg className='design2' width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M0.772476 0.420105L12.7108 14.8904L19.8211 6.27077L14.0275 0.420105H0.772476ZM11.9646 1.89394L7.61945 6.31543L3.97651 1.89394H11.9646ZM12.7108 12.5234L8.54116 7.47663L13.7203 2.20657L17.7582 6.31543L12.7108 12.5234Z" fill="white"/>
                   </svg>
               </div>
                
             </div>
             <h3> Pop Rock Crystal </h3>
          </div>
          {/* /// */}
          <div className='menubar'>
               <a href=""> <h4> Home </h4> </a>
               <a href=""> <h4> Shop </h4> </a>
               <a href=""> <h4> About Us </h4> </a>
               <a href=""> <h4> Help </h4> </a> 
          </div>

          <div>
               <a href=""> <img src="src/images/navrightlogo.png" alt="Logo Right" /> </a>
          </div>
       </div>
    </div>
  )
}

export default Navbar
