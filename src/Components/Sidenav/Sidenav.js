import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";
import 'materialize-css/dist/css/materialize.min.css';
import './Sidenav.css';

class Sidenav extends Component{
  componentDidMount(){
    //Init side nav
    const list = document.querySelector('.sidenav');
    const closeInfo = document.getElementById('isClosed');
    const sBtn = document.querySelectorAll('.mBtn');
    const shareBtn = document.querySelector(".shareBtn");
    const s = M.Sidenav.init(list);

    //Check route to add active class
    function addActive(rr){
      const max = sBtn.length;
      for(let i=0;i<max;i++){
	//Check route
	const text = sBtn[i].textContent.split(' ')[1].toLowerCase();
	sBtn[i].classList.remove('active');
	if(rr === text) sBtn[i].classList.add('active');
	else if(rr === '') sBtn[0].classList.add('active');
	
	//Close sidenav
	s.close();
      }
    }

    function closeStore(){
      const today = new Date();
      const day = today.getDay();
      const time = today.getHours();
      if(day <= 6){	
        if ( (time >= 9 && time < 13) || (time >= 14 && time < 17) ) return true
	else return false
      }
      else{
	if ( (time >= 9 && time < 12) ) return true
	else return false
      }
    }

    function setStateClose(){
       if(closeStore()) {
        closeInfo.style.color="lightgreen";
        closeInfo.textContent = "Abierto ahora";
      }
      else{
        closeInfo.style.color="red";
        closeInfo.textContent = "Cerrado ahora";
      }
    }
    setStateClose();
    setInterval(()=>setStateClose(),6000)

    //Listen route changes                                     
    this.props.history.listen(location => addActive(location.pathname.substr(1)));

    //Share application
    shareBtn.addEventListener("click", () =>{
      if (navigator.share) {
  	navigator.share({
      	  title: 'Electronica Internacional',
	  text: 'Visitinos! 😀, mas información en: ',
     	  url: window.location
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
	} else alert('Tu navegador no es compatible');
     })

    //Styles active route
    addActive(window.location.pathname.substr(1));

    //Service worker install button
    let deferredPrompt;
    const addBtn = document.querySelector('.add-button');
    addBtn.style.display = 'none';
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      deferredPrompt = e;
      addBtn.style.display = 'block';
      addBtn.addEventListener('click', e => {
        addBtn.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') console.log('User accepted app prompt');
          else console.log('User dismissed the app prompt');
          deferredPrompt = null;
        });
      });
   });
  }
  
  render(){
    return (
      <ul class="sidenav" id="side1">
        <li>
          <div class="user-view">
	    <span role="button" class="userInfo">
	      <span class="name">Electrónica Internacional</span>
	      <span class="email">14-74 Avenida Centro America Zona 1<br/><i class="material-icons">call</i> 2220-0073 | <span id="isClosed"></span></span>
	    </span>
	  </div>
	</li>
	<Link to="/"><li class="sBtn mBtn">
          <a href="#toHome" class="waves-effect">
            <i class="material-icons">home</i> Inicio
          </a>
        </li></Link>
	<Link to="/tienda"><li class="sBtn mBtn">
          <a href="#toShop" class="waves-effect">
            <i class="material-icons">local_grocery_store</i> Tienda
          </a>
        </li></Link>
	<Link to="/contactar"><li class="sBtn mBtn">
          <a href="#toService" class="waves-effect">                         
	    <i class="material-icons">headset_mic</i> Contactar
	  </a>
        </li></Link>
        <li>
	  <div class="divider"></div>
	</li>
	<li>
	  <a href="#div" class="subheader disable">Applicación</a>
	</li> 
	<li class="sBtn shareBtn" >
	  <a class="waves-effect">
	    <i class="material-icons">share</i>Compartir
	  </a>
	</li>
	<li class="sBtn download">
	  <a href="#download" class="waves-effect add-button">
	    <i class="material-icons">arrow_downward</i>Descargar app
	  </a>
	</li>
      </ul> 
    )
  }
}

export default withRouter(Sidenav);
