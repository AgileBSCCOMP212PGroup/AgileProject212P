import React from 'react'
import './header.css';
import '../../css/animate.css'
import '../../css/icomoon.css'
import '../../css/owl.carousel.min.css'
import '../../css/owl.theme.default.min.css'
import '../../css/style.css'


function Header2() {
  return (

<nav class="fh5co-nav" role="navigation">
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-xs-2">
					<div id="fh5co-logo"><a href="index.html">Blazor Rental</a></div>
				</div>
				<div class="col-md-6 col-xs-6 text-center menu-1">
					<ul>
						<li class="has-dropdown">
							<a href="product.html">Blazors</a>
							<ul class="dropdown">
								<li><a href="single.html">Single Shop</a></li>
							</ul>
						</li>
						<li><a href="about.html">About</a></li>
						<li class="has-dropdown">
							<a href="services.html">Services</a>
							<ul class="dropdown">
								<li><a href="#">Check More</a></li>
							</ul>
						</li>
						<li><a href="contact.html">Contact</a></li>
					</ul>
				</div>
				<div class="col-md-3 col-xs-4 text-right hidden-xs menu-2">
					<ul>
						<li class="search">
							<div class="input-group">
						      <input type="text" placeholder="Search.."/>
						      <span class="input-group-btn">
						        <button class="btn btn-primary" type="button"><i class="icon-search"></i></button>
						      </span>
						    </div>
						</li>
						<li class="shopping-cart"><a href="#" class="cart"><span><small>0</small><i class="icon-shopping-cart"></i></span></a></li>
					</ul>
				</div>
			</div>
			
		</div>
	</nav>
  )
}

export default Header2