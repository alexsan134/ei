import React from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import './Header.css';

import pic2 from './pic2.jpg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpg';

class Header extends React.Component{
   componentDidMount(){
      let elems = document.querySelectorAll('.carousel');
      let instances = M.Carousel.init(elems,{
         fullWidth: true,
	 indicators: true
      });
      setInterval(()=>instances[0].next(),15000);
   }
   render(){
      return(
	  <div id="headerContent">
	  <div id="band"></div>
          <div className="carousel">
	  <div id="mainHeaderText" className="carousel-fixed-item">
                <h1>Escríbenos o Visítanos!</h1>
	        <p>Para tu comodidad, escribenos en línea o visítanos en nuestro centro de servicio, el costo del diagnóstico es completamente ¡GRATIS!</p>
          </div>
             <a className="carousel-item" href="#2">
	        <p>¿Lineas en la pantalla?</p>
	        <img src={pic2} alt="Banner1"/>
	      </a>
	     <a className="carousel-item" href="#3">
	        <p>¿Problemas con la Tele?</p>
	        <img src={pic5} alt="Banner2"/>
	      </a>
	     <a className="carousel-item" href="#4">
	        <p>¿Problemas con Herramientas?</p>
	        <img src={pic6} alt="Banner3"/>
	      </a>
         </div>
	   <span id="brandsText">Algunas de las marcas que trabajamos:</span>
	 </div>
      )
   }
}

export default Header;
