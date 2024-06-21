import React from 'react'
import '../styles/Landing.css'
import imgland from '../assets/hero.png'
import Navbar from '../components/Navbar'
	; import ModuleList from '../helpers/ModuleList';
import Footer from '../components/Footer';
import Logo1 from '../assets/LOGO1.jpg';
import Logo2 from '../assets/LOGO2.png';
import Logo3 from '../assets/LOGO3.png';
import Logo4 from '../assets/LOGO4.jpg';

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
						<div className='module-item'>
							<div className='icon' style={{ backgroundColor: moduleItem.background }}>
								{moduleItem.image}
							</div>
							<h4>{moduleItem.tilte}</h4>
						</div>
					)
				})}
			</div>
			<section className='presentation'>
				<h1>GLISH help users master the English language!</h1>
				<button onClick={(e) => window.location.href = "/login"}>Get Started For Free</button>
			</section>
			<div class="partenaire">
				<div class="division"></div>
				<div class="partenaire-list">
					<div><img src={Logo1} alt="partenaire" /></div>
					<div><img src={Logo2} alt="partenaire" /></div>
					<div><img src={Logo3} alt="partenaire" /></div>
					<div><img src={Logo4} alt="partenaire" /></div>
					<div><img src={Logo1} alt="partenaire" /></div>
				</div>
			</div>
			<div class="testimonials section">
				<h3 class="title">Testimonials</h3>
				<p class="sub-title">What People Says</p>
				<div className='testimonial'>
					<img src={} alt='testimonial' />
					<div className='testimonial-content'>
						<p>“I have been using Glish for a few months now and I have to say that it is the best platform for learning English. The quizzes are fun and engaging and the pronunciation practice has helped me a lot.”</p>
						<h4>John Doe</h4>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Landing