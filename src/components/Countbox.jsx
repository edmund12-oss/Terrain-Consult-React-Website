import React from "react";

const countBox = () => {
    return (
<section>
<div className="row count-box-container">
  <div className="col-lg-11">
    <div className="row">

      <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
        <div className="count-box">
          <i className="bi bi-emoji-smile"></i>
          <span className="count" data-target="1000">0</span><span>+</span>
          <p>Happy Clients</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
        <div className="count-box">
          <i className="bi bi-journal-richtext"></i>
          <span className="count" data-target="1000">0</span><span>+</span>
          <p>Projects</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
        <div className="count-box">
          <i className="bi bi-clock"></i>
          <span className="newcount" data-target="21">0</span>
          <p>Years of experience</p>
        </div>
      </div>

    </div>
  </div>
</div>
</section>

    );

};

export default countBox;