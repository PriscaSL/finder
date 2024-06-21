import React from 'react'
import '../styles/Landing.css'
import imgland from '../assets/hero.png'
import Navbar from '../components/Navbar'
;import ModuleList from '../helpers/ModuleList';
import Footer from '../components/Footer';

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
								<div className='icon' style={{backgroundColor: moduleItem.background}}>
									{moduleItem.image}
								</div>
								<h4>{moduleItem.tilte}</h4>
							</div>
					)
				})}
			</div>
			<section className='presentation'>
				<h1>GLISH help users master the English language!</h1>
				<button>Get Started For Free</button>
			</section>
			<div class="partenaire">
            <div class="division"></div>
            <div class="partenaire-list">
                <div><img src={} alt="partenaire"/></div>
                <div><img src={} alt="partenaire"/></div>
                <div><img src={} alt="partenaire"/></div>
                <div><img src={} alt="partenaire"/></div>
                <div><img src={} alt="partenaire"/></div>
            </div>
            <div class="division"></div>
        </div>
			<Footer	/>
		</>
	)
}

export default Landing