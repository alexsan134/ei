import React from 'react';
import './Brands.css';

import brand1 from "./samsung.png"
import brand2 from "./lg.png"
import brand3 from "./sony.png"
import brand4 from "./philips.png"
import brand5 from "./sharp.png"
import brand6 from "./toshiba.png"
import brand7 from "./tcl.png"
import brand8 from "./hisense.png"

class Brands extends React.Component{
   render(){
      return(
         <div className="brandsBand">
            <ul>
	       <li>
	          <img src={brand1} alt="samsung"/>
	       </li>
               <li>
	          <img src={brand2} alt="lg"/>
	       </li>
               <li>
	          <img src={brand3} alt="sony"/>
	       </li>
               <li>
	          <img src={brand4} alt="philips"/>
	       </li>
               <li>
	          <img src={brand5} alt="sharp"/>
	       </li>
	       <li>
	          <img src={brand6} alt="toshiba"/>
	       </li>
               <li>
	          <img src={brand7} alt="tcl"/>
	       </li>
               <li>
	          <img src={brand8}alt="hisense"/>
	       </li>
            </ul>
         </div>
      )
   }
}

export default Brands;
