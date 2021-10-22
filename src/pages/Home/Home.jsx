import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom"
import Rellax from "rellax";
import './home.css'
import img2 from "../../assets/pngwing.png"
// import './home.js'
export default function Home() {

	const rellaxRef = useRef();

	useEffect(() => {
		new Rellax(".animate", { // <---- Via class name
			speed: -10,
			center: false,
			wrapper: null,
			round: true,
			vertical: true,
			horizontal: false
		});

		new Rellax(rellaxRef.current, { // <---- Via useRef element
			speed: -10,
			center: false,
			wrapper: null,
			round: true,
			vertical: true,
			horizontal: false
		});
	}, []);
	return (
		<div className="homebg">
			<section className="section section-top">
				<div className="content rellax" data-rellax-speed="5">
					<h1>Let's Create Cancer Awarness In Our Community </h1>
					<Link to="/" className="btn btn-primary">Learn More</Link>
				</div>
			</section>

			<section className="section section-stream">
				<img
					className="play rellax"
					// src="https://i.ibb.co/TvdbMhQ/play-button.png"
					src={img2}
					alt=""
					data-rellax-speed="-1" data-rellax-xs-speed="-5"
				/>
				<div className="content rellax" data-rellax-speed="10">
					<div>
						<h2 className="secondary-text">Cancer A-Z</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
							dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
						</p>
					</div>
					<div>
						<h2 className="secondary-text">Prevention 101</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
							dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
						</p>
					</div>
				</div>
			</section>

			<section className="section section-grid">
				<div className="rellax" data-rellax-speed="1" data-rellax-xs-speed="3">
					<i className="fas fa-video fa-3x secondary-text"></i>
					<h2>Help<span className="secondary-text dot">.</span></h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
						dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
					</p>
				</div>
				<div className="rellax" data-rellax-speed="4" data-rellax-xs-speed="3">
					<i className="fas fa-users fa-3x secondary-text"></i>
					<h2>Share<span className="secondary-text dot">.</span></h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
						dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
					</p>
				</div>
				<div className="rellax" data-rellax-speed="7" data-rellax-xs-speed="3">
					<i className="fas fa-usd fa-3x secondary-text"></i>
					<h2>Donate<span className="secondary-text dot">.</span></h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore et
						dicta consectetur incidunt omnis nam quis quidem nisi ipsa deserunt.
					</p>
				</div>
			</section>

			<footer className="footer">
				<ul>
					<li>  <Link className="link" to="/">  <span> Faq </span></Link></li>
					<li>  <Link className="link" to="/">  <span> Terms of Use </span></Link></li>
					<li>  <Link className="link" to="/">  <span> Privacy Notice </span></Link></li>
					<li>  <Link className="link" to="/">  <span> About Us </span></Link></li>


				</ul>
			</footer>
		</div>
	)
}