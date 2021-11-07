import {useState, useEffect} from "react" ;

const Footer = () => {

	const [ScrollTop, setScrollTop] = useState(false) ;

	const changeScrollTop = () => {
		if(document.documentElement.scrollTop > 800) {
			if(ScrollTop === false)
				setScrollTop(true) ;
		}
		else { 
			if(ScrollTop === true)
				setScrollTop(false) ;
		}
	} ;

	useEffect(() => {
		window.addEventListener('scroll', changeScrollTop) ;
		return () => window.removeEventListener('scroll', changeScrollTop) ;
	}, [ScrollTop]) ;

	const clickScrollTop = () => {
		window.scrollTo({
			top : 0 ,
			behavior : "smooth"
		}) ;
	} ;

	return (
		<div className="footer" >
			<div className="container-footer" >
				<div >
					<svg  preserveAspectRatio="none" version="1.1" viewBox="5 0 1366 222" width="100%">
						<path d="M-2.19,238H1366v-4.27c-67.87-24-146.44-43.08-230.75-53.19-253.33-27.78-293.94,51.64-541.13,29.89C318.08,186.31,289.49,32.92,6.9,11.73c-5.21-.42-10.56-.7-15.9-1V238Z" transform="translate(9.5 -10.22)"></path>
					</svg>
				</div>
				<div className="center-footer">
					<div className="block" >
						<div className="content-footer" >
							<div className="block-img">
								<img src="https://2.bp.blogspot.com/-3fdCgKHtE6c/XXPPE_0pSxI/AAAAAAAAD2c/vX9sxmXcDqslmy_T4MDrabL4zirLUFSjQCK4BGAYYCw/s1600/logo_nemesis--light.png" alt="" />
								<p> Phasellus deserunt. Convallis perspiciatis fusce fermentum accumsan, arcu aliquam, velit venenatis augue proin, enim etiam dolor. Mi ac lectus vitae cum, fusce purus posuere. </p>
							</div>
							<div className="left-about">
								<h3 > About </h3>
								<a href="#" > Home </a>
								<a href="#" > Lifestyle </a>
								<a href="#" > People </a>
								<a href="#" > Slider </a>
								<a href="#" > Sport </a>
							</div>
							<div className="about">
								<h3 > About </h3>
								<a href="#" > Home </a>
								<a href="#" > Lifestyle </a>
								<a href="#" > People </a>
								<a href="#" > Slider </a>
								<a href="#" > Sport </a>
							</div>
							<div className="about">
								<h3 > About </h3>
								<a href="#" > Home </a>
								<a href="#" > Lifestyle </a>
								<a href="#" > People </a>
								<a href="#" > Slider </a>
								<a href="#" > Sport </a>
							</div>
						</div>
						<div className="info" >
							<p> © 2021 Nemesis | All Rights Reserved </p>
							<ul>
								<li>
									<a href="#" id="fb" ><i className="fab fa-facebook-f"></i></a>
								</li>
								<li>
									<a href="#" id="twitter"><i className="fab fa-twitter"></i></a>
								</li>
								<li>
									<a href="#" id="linkedin"><i className="fab fa-linkedin-in"></i></a>
								</li>
								<li>
									<a href="#" id="pinterest"><i className="fab fa-pinterest-p"></i></a>
								</li>
								<li>
									<a href="#" id="envelope"><i className="far fa-envelope"></i></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="scrollTop" onClick={clickScrollTop} style={ScrollTop === false ? {display : "none"} : {}}>
				<i className="fas fa-chevron-up" ></i>
			</div>
		</div>
	) ;
} ;

export default Footer ; 