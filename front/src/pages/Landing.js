import React from 'react'
import '../styles/Landing.css'
import imgland from '../assets/hero-img.png'
import Navbar from '../components/Navbar'
;import ModuleList from '../helpers/ModuleList';

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
								<div className='icon' style={{backgroundColor: moduleItem.bg}}>
									{moduleItem.image}
								</div>
								<h4>{moduleItem.tilte}</h4>
							</div>
					)
				})}
			</div>
		</>
	)
}

export default Landing