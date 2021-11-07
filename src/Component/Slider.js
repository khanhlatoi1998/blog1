import {useState} from "react" ;

const TopContent = (props) => {

	const {keeped, changeKeeped} = props ;

	const changeKeeped2 = () => {
		changeKeeped("cc") ;
	} ;


	return (
		<section className="slider">
			<div className="container-slider" >
				<div className="top-content" >
					<div className="block_img-slider" >
						<img src="https://1.bp.blogspot.com/-fFs-6gRtasc/X4R3_FkbgyI/AAAAAAAAEbg/VvINo99USGQUvAQ-bsSlYvKt7T7F-ML8QCNcBGAsYHQ/w750/unsplash-10-min.jpg" alt="logo" />
					</div>
					<div className="content-slider" >
						<h1> Nunc tellus libero, tempus id luctus eget, fermentum et quam. </h1>
						<p> FBTEMPLATES / March 28, 2017 </p>
						<div className="btn-keep" onClick= {changeKeeped2} >
							<a href="#" >Keep reading ...</a> 
						</div>
						<div className="social">
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
				<div className="keeped" style={keeped === false ? {display : "none"} : {} }>
					<div className="center-content" >
						<div className="content" >
							<p>Donec dolor elit, pellentesque a massa pellentesque, euismod sagittis ipsum. Nullam a diam ac turpis iaculis vulputate. Nunc tellus libero, tempus id luctus eget, fermentum et quam. Aliquam erat volutpat. Donec sit amet nunc vitae justo dapibus dignissim. Vivamus sagittis</p>
						</div>
						<div className="tarot">
							<span><i className="fa fa-quote-left" aria-hidden="true"></i></span>
							<p> Donec dolor elit, pellentesque a massa pellentesque, euismod sagittis ipsum. Nullam a diam ac turpis iaculis vulputate. Nunc tellus libero, tempus id luctus eget, fermentum et quam. Aliquam erat volutpat. Donec sit amet nunc vitae justo dapibus dignissim. Vivamus sagittis dignissim massa, auctor aliquam nibh aliquam ut. </p>
						</div>
						<div className="content" >
							<p>Donec dolor elit, pellentesque a massa pellentesque, euismod sagittis ipsum. Nullam a diam ac turpis iaculis vulputate. Nunc tellus libero, tempus id luctus eget, fermentum et quam. Aliquam erat volutpat. Donec sit amet nunc vitae justo dapibus dignissim. Vivamus sagittis</p>
						</div>
						<div className="bottom_c-c" >
							<div className="left" >
								<span > Categories: </span>  
								<a href="#" > Lifestyle </a>
								<a href="#" > People </a>
								<a href="#" > Slider </a>
							</div>
							<div className="social">
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
					<div className="bottom-content" >
						<div className="pre" >
							<a href="#" > 
								<h3> &#60; Previous </h3>
								<p> Donec dolor elit,das  pellentesque </p>  
							</a>
						</div>
						<div className="next" >
							<a href="#" > 
								<h3> Next &#62; </h3> 
								<p> Donec dolor elit, pellentesque </p> 
							</a>
						</div>
					</div>
					<div className="more-content" >
						<div className="left-title" >
							<p> You may like these posts </p>
						</div>
						<div className="right-content" >
							<div className="block" >
								<div className="singel-block" >
									<div className="single-pro" >
										<div className="tall_s-p" >
											<a href="#" >
												<div className="block-img" ><img src="https://1.bp.blogspot.com/-q4CLaPBqosc/XR8b7Y9tJ2I/AAAAAAAADts/N-BhgR4wXfsjxIum3ruXsbQg-sKaeD3swCLcBGAs/w400/img-254.jpg" alt="logog" /></div> 
												<div className="content-white" >
													<h1 >Nunc tellus libero, tempus id luctus eget, fermentum </h1>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div className="singel-block" >
									<div className="single-pro" >
										<div className="tall_s-p" >
											<a href="#" >
												<div className="block-img" ><img src="https://1.bp.blogspot.com/-q4CLaPBqosc/XR8b7Y9tJ2I/AAAAAAAADts/N-BhgR4wXfsjxIum3ruXsbQg-sKaeD3swCLcBGAs/w400/img-254.jpg" alt="logog" /></div> 
												<div className="content-white" >
													<h1 >Nunc tellus libero, tempus id luctus eget, fermentum et quam.</h1>
												</div>
											</a>
										</div>
									</div>
								</div>
								<div className="singel-block" >
									<div className="single-pro" >
										<div className="tall_s-p" >
											<a href="#" >
												<div className="block-img" ><img src="https://1.bp.blogspot.com/-jZlVsEtGNg8/XdUnxwIu2qI/AAAAAAAAEEc/WYpL5xla-boy9IP4jrc4EX4UprH68bIGwCNcBGAsYHQ/w400/3-min-compressor.jpg" alt="logog" /></div> 
												<div className="content-white" >
													<h1 >Nunc tellus libero, tempus id luctus eget, fermentum et quam.</h1>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="comment">
						<div className="block" >
							<a href="#" >
								Comments
								<br />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
} ;

export default TopContent ;  