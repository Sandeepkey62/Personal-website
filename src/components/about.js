import React,{Component} from 'react';
import '../style/about.css';
class About extends Component{
	 render(){
	 	 return (
	 	 	   <div className="containers">
                 <h5 id="header">ABOUT ME</h5>
                 <p id="sa">In about 100 words</p>
                 <hr/>
                   <h3> INTRO</h3>
                   <p className="intros">I am Sandeep kumar. My primary job functions are as a software engineer.
                   I am available to consult on interesting projects.
                    I am particularly interested in social impact, education, 
                    inclusivity.</p>
                    <h3>CURRENTLY</h3>
                   <p id="introes">
                   I have learned how to build teams and manage people, build relationships with customers, sell enterprise products, and build on-line predictive models for production environments. I've also learned
                    how to build and maintain large web applications.
                   </p>
              <h3 className="like">I LIKE</h3>
                      <span>Books</span>
                      <span>Gaming</span>
                      <span>Summer</span>
                      <span>Music</span>
              <h3 className="likes">I DREAM OF</h3>
                      <span>always finding inspiration.</span>
                      <span>enabling a brighter future.</span>
                      <span>doing better.</span> 
              <h3 className="likes">TRAVEL </h3>
                      <span>I am from originally from Uttar Pradesh, India.I have lived in Delhi, Mumbai, Chennai
                      </span>
                      <span>I've been to ~  6 states, some of which 
                      I have forgotten, and many of which I would like to revisit..</span>
                      <span>doing better.</span>
                      
                </div>
	 	 	)
	 }
}
export default About