import React,{Component} from 'react';
import images from '../images/Sandeep.jpg';
import "../style/image.css";
class Home extends Component{
	 render(){
	 	 return (
	 	 
             <div className="img_div">
               <a href=""><img src={images}/></a>
               <h2>Sandeep kumar</h2>
               <p>sandeepkanoujiya1@gmail.com</p>
                <h3>ABOUT</h3>
               <div className="profile_name">
               <p>Hi, I'm Sandeep. I like building things.I have completed my postgraduate in</p>
               <p> Master of Computer Applications from National Institute of Technology, Tiruchirappalli</p>
             
               
       </div>
         </div>
	 	 	)
	 }
}
export default Home