import {useState, useEffect} from "react" ; 


const Header = () => {

	const [dropHome, setDropHome] = useState(false) ; 
	const [dropPages, setDropPages] = useState(false) ; 
	const [dropFeatues, setDropFeatues] = useState(false) ; 
	const [closeMenu, setCloseMenu] =useState(false) ; 
	const [fixedHeader, setFixedHeader] = useState(false) ;
	const [showSearch, setShowSearch] = useState(false) ;

	const domSlider = document.getElementsByClassName("slider") ;

	const changeStyleHeader = () => {

		if(document.documentElement.scrollTop > 500) {
			if(fixedHeader === false) {
				setFixedHeader(true) ;
				domSlider[0].style.paddingTop = "77px" ;
				return 0 ;
			}
		}
		else {
			setFixedHeader(false) ;	
			domSlider[0].style.paddingTop = "0px" ;
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeStyleHeader) ;
		return () => window.removeEventListener('scroll', changeStyleHeader) ;
	}, [fixedHeader]) ;

	return(
		<header className="header" style={fixedHeader === true ? {position : "fixed", padding : "0", boxShadow : "0 0 20px #6797ff40"} : {}}>
			<nav>
				<div className="container-header">
					<div className="destop-header" >
						<div className="block-img">
							<a href="#" ><img src="https://3.bp.blogspot.com/-C_9SDVXSkcg/XTDG5T-buGI/AAAAAAAADyQ/9TmjbVh0XcUyHDcA91-PKuoCq6VVH5cWQCK4BGAYYCw/w240/logo_nemesis.png" alt="logo" /></a>
						</div>
						<ul className="menu">
							<li className="li" onMouseEnter={() => setDropHome(true)} onMouseLeave={() => setDropHome(false)} > 
								HOME <i className="fas fa-angle-down"></i> 
								<ul style={dropHome === true ? {display : "block"} : {}} >
									<li><a href="#"> HOME 1 </a></li>
									<li><a href="#"> HOME 2 </a></li>
									<li><a href="#"> HOME 3 </a></li>
									<li><a href="#"> HOME 4 </a></li>
									<li><a href="#"> HOME 5 </a></li>
								</ul>
							</li> 
							<li onMouseEnter={() => setDropPages(true)} onMouseLeave={() => setDropPages(false)} >
								PAGES <i className="fas fa-angle-down"></i>
								<ul style={dropPages === true ? {display : "block"} : {}} >
									<li><a href="#"> ABOUT </a></li>
									<li><a href="#"> CONTACT </a></li>
									<li><a href="#"> SERVIES </a></li>
								</ul>
							</li>
							<li><a href="#" > SPORT </a></li>
							<li><a href="#" > POLICY </a></li>
							<li onMouseEnter={() => setDropFeatues(true)} onMouseLeave={() => setDropFeatues(false)} >
								FEATUES <i className="fas fa-angle-down"></i>
								<ul style={dropFeatues === true ? {display : "block"} : {}} >
									<li><a href="#"> SUBMENU 1 </a></li>
									<li><a href="#"> SUBMENU 2 </a></li>
									<li><a href="#"> SUBMENU 3 </a></li>
								</ul>
							</li>
							<li><a href="#" > ERROR PAGE </a></li>
							<li><a href="#" > LIFESTYLE </a></li>
						</ul>
						<div className="search" >
							<i onClick={() => setShowSearch(true)} className="fas fa-search"  ></i>
							<span onClick={() => setCloseMenu(!closeMenu)} > ☰ </span>
							<form className="searched" style={showSearch === false ? {display : "none"} : {} }>
								<div className="controlCloseSearch" ><i onClick={() => setShowSearch(false)} className="fas fa-times"></i></div>
								<div className="block-searched" >
									<input type="text" placeholder="Search..."/>
									<button type="submit" >	<i className="fas fa-search"></i></button>
								</div>
							</form>
						</div>
					</div>
					<div className="block_mobile-header" onClick={() => setCloseMenu(false)} style={closeMenu === true ? {display : "block"} : {display : "none"}}>
						<div className="mobile-header" onClick={(e) =>  e.stopPropagation()} >
							<div className="block_m-h" > 
								<div onClick={() => setCloseMenu(false)} className="controlClose" ><i className="fas fa-times"></i></div>
								<ul className="menu">
									<li onClick={() => setDropHome(!dropHome)} className="li"> HOME <i className="fas fa-angle-down"></i></li> 
									<div style={dropHome === true ? {display : "block"} : {}} >
										<a href="#"> HOME 1 </a>
										<a href="#"> HOME 2 </a>
										<a href="#"> HOME 3 </a>
										<a href="#"> HOME 4 </a>
										<a href="#"> HOME 5 </a>
									</div>
									<li onClick={() => setDropPages(!dropPages)} > PAGES <i className="fas fa-angle-down"></i></li>
									<div style={dropPages === true ? {display : "block"} : {}} >
										<a href="#"> ABOUT </a>
										<a href="#"> CONTACT </a>
										<a href="#"> SERVIES </a>
									</div>
									<li><a href="#" > SPORT </a></li>
									<li><a href="#" > POLICY </a></li>
									<li onClick={() => setDropFeatues(!dropFeatues)} > FEATUES <i className="fas fa-angle-down"></i></li>
									<div style={dropFeatues === true ? {display : "block"} : {}} >
										<a href="#"> SUBMENU 1 </a>
										<a href="#"> SUBMENU 2 </a>
										<a href="#"> SUBMENU 3 </a>
									</div>
									<li><a href="#" > ERROR PAGE </a></li>
									<li><a href="#" > LIFESTYLE </a></li>
								</ul>
								<div className="categories-archive" >
									<div className="categories" >
										<h3> Categories </h3>
										<div className="line" ></div>
										<div className="child">
											<span><a href="#"> Business </a></span>
											<span><a href="#"> Carousel </a></span>
											<span><a href="#"> Design </a></span>
											<span><a href="#"> Entertainment </a></span>
											<span><a href="#"> Featured </a></span>
											<span><a href="#"> Freind </a></span>
											<span><a href="#"> Home </a></span>
											<span><a href="#"> Lifestyle </a></span>
											<span><a href="#"> People </a></span>
											<span><a href="#"> Slider </a></span>
											<span><a href="#"> Sport </a></span>
											<span><a href="#"> Technology </a></span>
											<span><a href="#"> Training </a></span>
										</div>
									</div>
									<div className="archive">
										<h3> Archive </h3>
										<div className="line" ></div>
										<div className="child-archive">
											<div> June <div><span>2</span></div> </div>
											<div> September <div><span>1</span></div> </div>
											<div> May <div><span>1</span></div> </div>
											<div> April <div><span>1</span></div> </div>
											<div> March <div><span>26</span></div> </div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	) ; 
}  ;

export default Header ;