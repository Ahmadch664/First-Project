import './project2.css'
import { Link } from "react-router-dom";
import fddimage from './assets/F D.png' 
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandHtml5 } from "react-icons/tb";
import { FaReact } from "react-icons/fa";




 const Project2 =()=>{
    return(
        <div>
             <div className='Main_card'>
                <div className='project2header'>
                  <h2 className='project2headertext'>
                     <p className='project2headertext2'>
                        Ahmad Ch
                     </p>
                     <p>|</p>
                     <p className='project2headertext2'>Welcome</p>
                     
                     <div className='project2links'>
                        <Link to="/login">
                        <button className='project2headerbutton' >Login</button>
                        </Link>
                        <Link to='/Contect'>
                        <button className='project2headerbutton2'>Contact Us?</button>
                        </Link>
                     </div>
                     </h2>
                </div>

                <div className='project2header2'>
                  <h2 className='project2headertext3'>Frontend Developer</h2>
                  <h1 className='project2headertext4'>How can i help you?</h1>
                  <input className='project2header2input' type='text' placeholder='Search'/>
                </div>
                <div className='project2reactmain'>
                  <FaReact className='project2reacticon' />
                  <Link to='/ReactProject'>
                  <button className='ReactProjectButton'><h3>REACT</h3></button>
                  </Link>
                  <p className='project2reacttext'>React is a widely-used, open-source JavaScript library for building user interfaces (UIs) based on a component-based architecture and an efficient Virtual Document Object Model (DOM). It is primarily focused on the view layer of an application and is maintained by Meta and a large community of developers. </p>
                </div>
                <div className='Project2html'>
                     <TbBrandHtml5  className='Project2practiceicon' />
                  <h3 className='Project2practicetext2'>HTML</h3>
                  <p className='Project2practicetext'>Skilled in semantic HTML to build well-structured, accessible, and SEO-friendly web pages.</p>
                </div>
                
                    <div className='project2js'>
                     <TbBrandJavascript className='project2jsicon' />
                     <h3>Javascript</h3>
                     <p className='project2jstext'>JavaScript is the Programming Language for the WebJavaScript can update and change both HTML and CSS.JavaScript can calculate, manipulate and validate data.</p>
                  </div>
                  
                <div className='Project2css'>
                  <h2 className='project2practiceicon'></h2>
                  <TbBrandCss3 className='Project2practiceicon2' />
                  <h3 className='Project2practicecss'>CSS</h3>
                  <p className='Project2rpaticecss2'>A tiny layout issue (alignment, spacing, centering),</p>
                  <p className='Project2rpaticecss2'>A visual polish detail (hover effect, border radius, shadow),</p>
                  <p className='Project2rpaticecss2'>A bug (one property not working as expected),</p>
                  <p className='Project2rpaticecss2'>A best-practice tip (one-line improvement).</p>
                  </div>
                
                
                  
                <div className='project2bottomheader'>
                  <div>
                     <h3 className='project2bottomheadertext'>Websites</h3>
                     <Link to='/'><button className='project2bottomheaderbutton'>Daraz</button></Link>
                       </div>
                       <div>
                        <h3 className='project2bottomheadertext2'>Contact Us</h3>
                        <Link to='/Contect'><button className='project2bottomheaderbutton2'>Contact@Us</button></Link>
                        </div>
                        <div>
                           <h3 className='project2bottomheadertext3'>Community</h3>
                           <Link to='https://web.facebook.com/profile.php?id=100077302900237'><button className='project2bottomheaderbutton3'>facebook</button></Link>

                        </div>
                        <div className='project2bottomheadertextintro'>
                           <img className='project2bottomheadertextintro-img' src={fddimage}/>
                           <h3>Frontend Design Developer</h3>
                           
                           <p className='project2bottomheadertextintro2'>Ahmad Ch</p>
                           <p className='project2bottomheadertextintro3'>2026</p>
                        </div>
                </div>
             </div>
        </div>
    );
 };
 export default Project2