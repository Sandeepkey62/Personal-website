import React,{Component} from 'react';
import images from '../images/Sandeep.jpg';
import "../style/image.css";
import "../style/contatc.css";
import {Link } from "react-router-dom";

import { AiFillGithub
  ,AiFillFacebook
  ,AiOutlineInstagram,
  AiFillLinkedin
   } from "react-icons/ai";

class Contact extends Component{
	 render(){
	 	 return (
	 	 
             <div className="img_div">
               <a href=""><img src={images}/></a>
               <h2>Sandeep kumar</h2>
               <p>sandeepkanoujiya1@gmail.com</p>
                <h3>Contact</h3>
               <div className="profile_name">
               <p>Feel free to get in touch. You can email me at:</p>
               </div>
               <ol className="icons">
               <li>
               <a href="https://github.com/Sandeepkey62">
               <AiFillGithub/></a></li>
               <li><a href="https://www.facebook.com/may.bikapur"><AiFillFacebook/></a></li>
               <li><a href="https://www.instagram.com/sandeepkanoujiya72/"><AiOutlineInstagram/></a> </li>
               <li><a href="https://www.linkedin.com/in/sandeep-kumar-a807b3149/"><AiFillLinkedin/></a> </li>
               </ol>
               
    
         </div>
	 	 	)
	 }
}
export default Contact