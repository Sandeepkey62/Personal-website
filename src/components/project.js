import React,{Component} from 'react';
import Course from '../images/onlinecourse.jpg';
import Chat from '../images/chat.JPG';
import '../style/project.css';
class Project extends Component{
	 render(){
	 	 return (
	 	 	   <div className="container">
                 <h4>Projects</h4>
                 <p>A SELECTION OF PROJECTS THAT I'M NOT TOO ASHAMED OF</p>
                 <hr/>
                 <div className="child">
                   <h4> Online Courses and Certificate</h4>
                   <img id="imge" src={Course}/>
                    <p id="course">A PHP MYSQL based application for online course and certification.
With features of Self Evaluation and Marking.
Database records for tracking the number of courses offered, number of students enrolled, results evaluating, Pending Courses, Completed Courses, with Admin records.
</p>
                    
                 </div>
                 <div className="child-two child">
                    <h4>Chat</h4>
                <img id="imges" src={Chat}/>
                    <p style={{fontFamily:'serif',fontSize:'43px;'}} className="Ecomm">
                
   Chat programs are common on the web these days.
 Now developers have a wider range of options
  when building chat programs. 
  This article gets you a PHP based chat application.
  Person can chat with individual Person.

                    </p>
                 </div>
                 <div className="child-three child">
                    <h4 >E-Commerce website</h4>
  <p className="Ecomm"> Crud Operations like.</p>
   <p className="Ecomm">Add To Basket feature implemented.</p>
   <p className="Ecomm">Admin can add product to the product list</p>
   <p className="Ecomm">Admin can edit the product details.</p>
   <p className="Ecomm">Admin can delete the product from the list.</p>
   <p className="Ecomm">Technology Used: Reactjs .</p>
   <p className="Ecomm">Searching</p>
                 </div>
             <div className="child">
         <h4> Personal website</h4>
     <p id="course">
     My personal website. Easily modifiable, 
     and built using modern javascript with React,
      React-Router,  Webpack and many other technologies.
</p>
                    
                 </div>
      <div className="child">
         <h4> Crud in MERN</h4>
     <p id="course">
     My crud website. Easily modifiable,Delte, Update, Insert 
     and built using modern javascript with React,
      React-Router, Axios, Nodejs, ExpressJs,  Webpack and many other technologies.
</p>
                    
                 </div>
                </div>
	 	 	)
	 }
}
export default Project