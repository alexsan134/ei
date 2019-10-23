import React, { Component } from "react";
import { withRouter , Redirect} from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import './Navbar.css';
import Logo from './logoWhite.png';

class Navbar extends Component{
  constructor(props){
    super(props);
    //Global Functions
    this.openSearch = this.openSearch.bind(this);
    this.state={redir:false}
  }

  openSearch(){
    //Select input field
    const cont = document.getElementById('search-container');
    const inp = document.getElementById('search-input');
    const shadow = document.getElementById('searchShadow');
    inp.value = '';
    cont.style.display="block";
    shadow.style.display="block";
    cont.style.opacity=1;
    inp.style.display="block";
    setTimeout(()=>shadow.style.opacity=1,10);
    setTimeout(()=>inp.setAttribute('placeholder','Buscar en la tienda'),200);
    inp.focus();
  }
  componentDidMount(){
    //Init autocomplete
    const cont = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');
    const shadow = document.getElementById('searchShadow');
    M.Autocomplete.init(searchInput, { data:this.autocomplete })
    function hideSearch(){
       searchInput.style.display="none";
       searchInput.setAttribute('placeholder','')
	shadow.style.opacity=0;                                      
	setTimeout(()=>{
        cont.style.display="none";                                             
	shadow.style.display="none";                                            
     },200);
    }
    searchInput.addEventListener('focusout',()=>{
      hideSearch();
    });
    searchInput.addEventListener('change',()=>{
      setTimeout(()=>this.setState({redir:`/buscar/${searchInput.value}`}),200);
    });
    searchInput.addEventListener('search',()=>{
      hideSearch();
    });
  }
  render(){
    return(
      <div>
        <nav>
          <div class="nav-wrapper">
	    <a data-target="side1" href="#menu" class="nbtn sidenav-trigger waves-effect">
	      <i class="material-icons">menu</i>
	    </a>
            <a class="brand-logo truncate" href="#search"><img src={Logo} alt="BrandLogo"/></a>
	    <a class="nbtn right waves-effect dropdown-trigger" href="#menuDot" data-target='dropdown1'>
	      <i class="material-icons">more_vert</i>
	    </a>
	    <a class="nbtn right waves-effect" href="#search" onClick={this.openSearch}>
	      <i class="material-icons">search</i>
	    </a>	
	    <div class="input-field" id="search-container">
              <input id="search-input" type="search"/>
	      
          <i class="material-icons" id="sendSearch">search</i>
	  <i class="material-icons" id="backSearch">arrow_back</i>
            </div>
	  </div>
          <div id="searchShadow"></div>
        </nav>
	{this.state.redir!==false?<Redirect to={this.state.redir}/>:''}
      </div>
    )
  }
}

export default withRouter(Navbar);
