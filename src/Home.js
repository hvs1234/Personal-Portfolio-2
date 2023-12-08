import React from 'react'
import './style.css'
import shoe from './images/shoe.jpg'
import pizza from './images/pizza.jpg'
import phone from './images/phone.png'

const Home = () => {
  return (
    <div className="home-body">
      <div className="head-container">
        <h1>Harshvardhan Sharma&nbsp; <i class="fa-solid fa-user-secret"></i></h1>
        <div className="head-nav">
          <a href="#">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="work" id="work">
        <h3>I'm ready to design your website and build it with <span>REACT&nbsp;<i class="fa-brands fa-react"></i></span> and <span>ELECTRON&nbsp;<i class="fa-brands fa-sketch"></i></span></h3>
        <p>I am a code enthusiast. I am learning REACT and ELECTRON currently.</p>
        <a href='#'>Check out my work</a>

        <div className="project">
          <p id='git'>Github Projects&nbsp; <i class="fa-brands fa-github"></i></p>
          <h3>These are some of the projects I have made using different technologies</h3>
          <p>This is a project I have created using Html, Css, Javascript...</p>
          <p>These are some unique projects that I have created. You can create and get an idea of these projects made by me.</p>
          <a href="https://github.com/hvs1234" target='_blank'>See it now</a>
        </div>
        
        <div className="project-names project1">
          <p id='project-name'>Samsh Boot&nbsp; <i class="fa-brands fa-shopify"></i></p>
          <h4>Smash Boot made by using React&nbsp;<i class="fa-brands fa-react"></i></h4>
          <p>This is smash boot. Basically this is intermediate E-Commerce website for online boot and shoe shopping. In this project I have designed cool website for online boot shopping and have a collection of both men and women categories with their choices.</p>
          <p>You can buy boot, shoe and slipper for both men and women categories.</p>
          <a href="#">Get It Now</a>
          <img src={shoe} alt="shoe" />
        </div>

        <div className="project-names project2">
          <p id='project-name'>Get Your Taste&nbsp; <i class="fa-solid fa-pizza-slice"></i></p>
          <h4>Get Your Taste made by using React&nbsp;<i class="fa-brands fa-react"></i></h4>
          <p>This is smash boot. Basically this is intermediate E-Commerce website for online boot and shoe shopping. In this project I have designed cool website for online boot shopping and have a collection of both men and women categories with their choices.</p>
          <p>You can buy boot, shoe and slipper for both men and women categories.</p>
          <a href="#">Get It Now</a>
          <img src={pizza} alt="pizza" />
        </div>
      </div>

      <div className="capabilities" id='capabilities'>
        <div className="content">
          <h1>Capabilites</h1>
          <h3>Programmer</h3>
          <p id='capa-para'>I am exploring web development and I am ready to learn new technologies. I am a self taught programmer.</p>
          <div className="capa-para2">
            <p>I am Btech Computer Science and Engineering Student. I have been coding since my 11th standard. I know many programming languages like C,C++,Python,Javascript,PHP,HTML,CSS,ReactJs,NodeJS,Mongodb,Sql.</p>
          </div>
          <div className="capa-box">
            <p><i class="fa-solid fa-circle"></i>&nbsp; Web Development</p>
            <p><i class="fa-solid fa-circle"></i>&nbsp; Competitive Programming</p>
            <p><i class="fa-solid fa-circle"></i>&nbsp; Python Development</p>
            <p><i class="fa-solid fa-circle"></i>&nbsp; Data Analyis Using Python</p>
          </div>
        </div>

        <div className="capa-img">
          <img src={phone} alt="python" />
        </div>
      </div>

      <div className="contact" id='contact'>
        <h1>Do you want a new website that looks good and converts well?</h1>
        <p id='contact-para1'>If you have a project in mind or are simply interested in finding out more, please fill the form below and let's get things moving.</p>
        <form action="https://formsumbit.co/3469harshsharma@gmail.com" method='POST' target='_blank' className='form'>
          <div className="input-here">
            <input type="text" name="Name" placeholder='Name' required/>
            <input type="number" name='Phone number' placeholder='Phone Number' required/>
          </div>
          <div className="input-here">
            <input type="email" name="Email" placeholder='Email Address' required/>
          </div>
          <div className="input-here">
            <textarea name="Message" cols="30" rows="4" placeholder='Message' required></textarea>
          </div>
          <div className="input-here">
            <button type='Submit'>Submit</button>
          </div>
        </form>
        <div id="contact-para2">
          <p>For everything else, you can email to</p>
          <a href='https://gmail.com' target='_blank'>3469harshsharma@gmail.com</a>
        </div>
        <div id="contact-para3">
          <p>Web Developer and Programmer</p>
          <p><i class="fa-regular fa-copyright"></i>&nbsp; 2023 | Harshvardhan Sharama | All Right Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Home