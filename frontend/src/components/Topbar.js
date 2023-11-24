import React, { useState } from "react";
import "./topbar.css";

function Topbar() {
  
  return (
    <div className="container-fluid">
      <div className="row bg-secondary py-1 px-xl-5">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="d-inline-flex align-items-center h-100">
            <a className="text-body mr-3" href="">
              About
            </a>
            <a className="text-body mr-3" href="">
              Contact
            </a>
            <a className="text-body mr-3" href="">
              Help
            </a>
            <a className="text-body mr-3" href="">
              FAQs
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-6 text-right">
        <p className="m-0">Customer Service</p>
        <h5 className="m-0">9840033029</h5>
      </div>
    </div>
  );
}

export default Topbar;
