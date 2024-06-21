import React from 'react'
import '../styles/Landing.css'
import imgland from '../assets/hero.png'
import Navbar from '../components/Navbar';
import ModuleList from '../helpers/ModuleList';
import Footer from '../components/Footer';
import Logo1 from '../assets/LOGO1.jpg';
import Logo2 from '../assets/LOGO2.png';
import Logo3 from '../assets/LOGO3.png';
import Logo4 from '../assets/LOGO4.jpg';
import arisoa from '../assets/arisoa.jpg';
import banner from '../assets/Bannerimg.png';

function Landing() {
	return (
		<>
			<Navbar />
			<div className="landing" >
				<div className="leftSide-hero">
					<h1>The best way <span>To learn</span> English</h1>
					<p>Unlock your potential with Glish, the ultimate English learning platform that adapts to your needs.</p>
					<button onClick={() => window.location.href = "/login"} className="start-for-free-btn">Start for free</button>
				</div>
				<div className="rightSide-hero">
					<img src={imgland} alt="Landing" className='imgland' />
				</div>
			</div>
			<div className='landing-module'>
				{ModuleList.map((moduleItem, key) => {
					return (
						<div className='module-item' key={key}>
							<div className='icon' style={{ backgroundColor: moduleItem.background }}>
								{moduleItem.image}
							</div>
							<h4>{moduleItem.tilte}</h4>
						</div>
					)
				})}
			</div>
			<section className='presentation'>
				<img src={banner} alt='banner' />
				<h1>GLISH help users master the English language!</h1>
				<button onClick={(e) => window.location.href = "/login"}>Get Started For Free</button>
			</section>
			<div className="partenaire">
				<div className="division"></div>
				<div className="partenaire-list">
					<div><img src={Logo1} alt="partenaire" /></div>
					<div><img src={Logo2} alt="partenaire" /></div>
					<div><img src={Logo3} alt="partenaire" /></div>
					<div><img src={Logo4} alt="partenaire" /></div>
					<div><img src={Logo1} alt="partenaire" /></div>
				</div>
			</div>
			<div className="testimonials section">
				<h3 className="title">Testimonials</h3>
				<p className="sub-title">What People Says</p>
				<div className='testimonial'>
					<div className='image-container'>
						<img src={arisoa} alt='testimonial' />
					</div>
					<div className='testimonial-content'>
						<p>“I have been using Glish for a few months now and I have to say that it is the best platform for learning English. The quizzes are fun and engaging and the pronunciation practice has helped me a lot.”</p>
						<h4>Arisoa RABE</h4>
					</div>
				</div>
				<div className="testimonial-footer">
					<div className="circle"></div>
					<div className="circle"></div>
					<div className="circle"></div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Landing