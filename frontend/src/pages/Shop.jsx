import React from "react";
import "./shop.css";

const Shop = () => {
  return (
    <div className="page">
      <div className="section">
        <div className="container">
          <div className="text-wrapper">Welcome to our Shop!</div>
          <p className="description">Browse our collection of trendy products.</p>
          <div className="input">
            <input className="div" placeholder="Search for products" type="text" />
          </div>
          <div className="button">
            <div className="secondary">
              <div className="title-2">Filter</div>
            </div>
            <div className="primary">
              <div className="title-2">Search</div>
            </div>
          </div>
        </div>
        <img className="vector" alt="Vector" src="vector-200.svg" />
      </div>
      <div className="section-2">
        <div className="container-2">
          <div className="title-3">Product Details</div>
          <p className="p">Learn more about our products.</p>
        </div>
        <div className="list-2">
          <div className="row">
            <div className="article">
              <div className="image-wrapper">
                <div className="image" />
              </div>
              <div className="frame">
                <div className="title-7">Product Feature 1</div>
                <div className="subtitle-2">Additional information</div>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="selection">
                  <div className="label-normal">
                    <div className="label-text">New</div>
                  </div>
                  <div className="label-normal">
                    <div className="label-text">Sale</div>
                  </div>
                </div>
                <div className="user">
                  <div className="avatar">
                    <div className="avatar-2" />
                    <div className="div-wrapper">
                      <div className="title-8">John Doe</div>
                    </div>
                  </div>
                  <div className="icon-buttons-2">
                    <div className="icon">🔍</div>
                    <div className="icon">📖</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="article">
              <div className="image-wrapper">
                <div className="image" />
              </div>
              <div className="frame">
                <div className="title-7">Product Feature 2</div>
                <div className="subtitle-2">Additional information</div>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="selection">
                  <div className="label-text-wrapper">
                    <div className="label-text">Limited Edition</div>
                  </div>
                </div>
                <div className="user-2">
                  <div className="icon-buttons-2">
                    <div className="icon">🔍</div>
                    <div className="icon">📖</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="vector-2" alt="Vector" src="vector-200-2.svg" />
      </div>
      <div className="section-2">
        <div className="container-2">
          <div className="title-3">Customer Reviews</div>
          <p className="p">See what our customers are saying.</p>
          <div className="button">
            <div className="title-wrapper">
              <div className="title-4">View All Reviews</div>
            </div>
            <div className="primary">
              <div className="title-2">Write a Review</div>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="card-2">
            <div className="user-2">
              <div className="avatar">
                <div className="avatar-3" />
                <div className="div-wrapper">
                  <div className="title-8">Jane Smith</div>
                </div>
              </div>
              <img className="frame-2" alt="Frame" src="frame-427318817.svg" />
            </div>
            <p className="title-9">The product exceeded my expectations.</p>
            <div className="icon-buttons">
              <div className="icon">😃</div>
              <div className="icon">👍</div>
              <div className="icon">💬</div>
            </div>
          </div>
          <div className="card-2">
            <div className="user-2">
              <div className="avatar">
                <div className="avatar-3" />
                <div className="div-wrapper">
                  <div className="title-8">John Doe</div>
                </div>
              </div>
              <img className="frame-2" alt="Frame" src="frame-427318817-2.svg" />
            </div>
            <p className="title-9">Great quality and fast shipping.</p>
            <div className="icon-buttons">
              <div className="icon">😃</div>
              <div className="icon">👍</div>
              <div className="icon">💬</div>
            </div>
          </div>
        </div>
        <img className="vector-3" alt="Vector" src="vector-200-3.svg" />
      </div>
      <div className="container-wrapper">
        <div className="container-3">
          <div className="title-10">Contact Us</div>
          <div className="title-11">About Us</div>
          <div className="title-12">Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
