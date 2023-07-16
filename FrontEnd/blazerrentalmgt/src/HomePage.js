import React, { useState } from 'react';
import Header2 from './components/header/header';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Make the API request with the search term
    fetch(`http://localhost:4000/api/blazer?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error('Error while searching:', error);
      });
  };

  return (
    <>
      <Header2 />
      <div id="page">
        <div id="fh5co-product">
          <div className="container">
            <div className="row animate-box">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <span>Top Quality Blazors</span>
                <h2>My Designs</h2>
                <p>Designerss</p>
              </div>
            </div>
      
          <div className="row">
              {searchResults.map((item) => (
                <div className="col-md-4 text-center animate-box" key={item._id}>
                  <div className="product">
                    <div className="product-grid" style={{ backgroundImage: `url(${item.image})` }}>
                      <div className="inner">
                        <p>
                          <a href="single.html" className="icon">
                            <i className="icon-shopping-cart" />
                          </a>
                          <a href="single.html" className="icon">
                            <i className="icon-eye" />
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="desc">
                      <h3>
                        <a href="single.html">{item.name}</a>
                      </h3>
                      <span className="price">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search.."
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={handleSearch}>
                      <i className="icon-search"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
