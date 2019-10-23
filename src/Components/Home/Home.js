import React from 'react';
import './Home.css';

import Header from '../Header/Header';
import Brands from '../Brands/Brands';
import TextSection from '../TextSection/TextSection';
import Services from '../Services/Services';

class Home extends React.Component{
   render(){
      return(
	 <div className="content">
            <Header/>
	    <Brands />
	    <TextSection color="blue" title="Acerca de nosotros" text="Sirviendo al público desde 1977, somos una empresa 100% Guatemalteca con más de 40 años de experiencia en la reparación de Televisores, Audio/Vídeo, Electrodomésticos y Herramientas Eléctricas, dedicada a la venta de repuestos electrónicos y otros productos multimarca bajo el concepto Outlet o Tienda de Segunda Mano." dec="circles"/>
	    <Services/>
	 </div>
      )
   }
}

export default Home;
