import React from 'react'
import Header2 from './components/header/header'


function HomePage() {
  return (
    <>
    <Header2/>
    <div id="page">
    <div id="fh5co-product">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span>Top Quality Blazors</span>
              <h2>My Desings</h2>
              <p>Desingerrss</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center animate-box">
              <div className="product">
                <div className="product-grid" style={{backgroundImage: 'url(images/product-1.jpg)'}}>
                  <div className="inner">
                    <p>
                      <a href="single.html" className="icon"><i className="icon-shopping-cart" /></a>
                      <a href="single.html" className="icon"><i className="icon-eye" /></a>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a href="single.html">Blazor 01</a></h3>
                  <span className="price">$350</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="product">
                <div className="product-grid" style={{backgroundImage: 'url(images/product-2.jpg)'}}>
                  <span className="sale">Sale</span>
                  <div className="inner">
                    <p>
                      <a href="single.html" className="icon"><i className="icon-shopping-cart" /></a>
                      <a href="single.html" className="icon"><i className="icon-eye" /></a>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a href="single.html">Blazor 02</a></h3>
                  <span className="price">$600</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="product">
                <div className="product-grid" style={{backgroundImage: 'url(images/product-3.jpg)'}}>
                  <div className="inner">
                    <p>
                      <a href="single.html" className="icon"><i className="icon-shopping-cart" /></a>
                      <a href="single.html" className="icon"><i className="icon-eye" /></a>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a href="single.html">Blazor 03</a></h3>
                  <span className="price">$780</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center animate-box">
              <div className="product">
                <div className="product-grid" style={{backgroundImage: 'url(images/product-4.jpg)'}}>
                  <div className="inner">
                    <p>
                      <a href="single.html" className="icon"><i className="icon-shopping-cart" /></a>
                      <a href="single.html" className="icon"><i className="icon-eye" /></a>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a href="single.html">Blazor 04</a></h3>
                  <span className="price">$800</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="product">
                <div className="product-grid" style={{backgroundImage: 'url(images/product-5.jpg)'}}>
                  <div className="inner">
                    <p>
                      <a href="single.html" className="icon"><i className="icon-shopping-cart" /></a>
                      <a href="single.html" className="icon"><i className="icon-eye" /></a>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a href="single.html">Blazor 05</a></h3>
                  <span className="price">$100</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="product">
                <div className="product-grid" style={{backgroundImage: 'url(images/product-6.jpg)'}}>
                  <div className="inner">
                    <p>
                      <a href="single.html" className="icon"><i className="icon-shopping-cart" /></a>
                      <a href="single.html" className="icon"><i className="icon-eye" /></a>
                    </p>
                  </div>
                </div>
                <div className="desc">
                  <h3><a href="single.html">Blazor 06</a></h3>
                  <span className="price">$960</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
     </>
  )
}

export default HomePage