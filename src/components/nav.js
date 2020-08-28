import React,{Component} from 'react';
import '../style/navbar.css';
import {Link} from "react-router-dom";
class NavBar extends Component{
  state={
  	 isOpen:false
  }
  handleClick=()=>{
  	 this.setState({
  	 	isOpen:!this.state.isOpen, 
  	 });
  }
  closeNavbar=()=>{
  	 this.setState({
   isOpen:false

  	 });
  }
render(){
  return(   
   <nav>	
 <div className="logoBtn">
       <div className="logo">
      <a href='/' className="logo">SANDEEP</a>
      </div>
    <div className="btn" onClick={this.handleClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
   </div>
   </div>
      <ul className={this.state.isOpen ? 'showNav':'undefined'}>
       <li>
         <Link to='/About' onClick={this.closeNavbar}>ABOUT</Link>
       </li>  
          <li>
            <Link to='/project'  onClick={this.closeNavbar}>PROJECTS </Link>
         </li>
           <li>
            <Link to='/contact' onClick={this.closeNavbar}>CONTACT </Link>
         </li>
      </ul>
      </nav>
     );
}
}

export default NavBar;