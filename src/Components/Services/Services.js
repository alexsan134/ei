import React from 'react'
import './Services.css';

class Services extends React.Component{
   render(){
      return(
         <div id="servicesContainer">
            <h1>Servicios</h1>
	    <ul>
	       <li><span className="material-icons">shopping_cart</span></li>
               <li><span className="material-icons">power</span></li>
	       <li><span className="material-icons">face</span></li>
	       <li><span className="material-icons">desktop_windows</span></li>
	    </ul>
	 </div>
      )
   }
}

export default Services;
