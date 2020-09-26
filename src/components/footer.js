import React from "react";

export default function footer() {
  return (
    <footer
      className="white-text page-footer font-small pt-4"
      style={{ backgroundColor: "#1d2f47" }}
    >
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Contact Us
            </h5>
            <p>
              <i className="fa fa-home mr-3"></i> NITK, Surathkal, Karnataka,
              India- 575025
            </p>
            <p>
              <i className="fa fa-envelope mr-3"></i>{" "}
              <span className="f-link">
                <a
                  href="mailto:webclub@nitk.edu.in"
                  style={{ color: "#52c5c2", textDecoration: "none" }}
                >
                  webclub@nitk.edu.in
                </a>
              </span>
            </p>
            <p>Faculty Advisor: Professor Sowmya Kamath S</p>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-6 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              About Us
            </h5>
            <p>
              A group of passionate computer science students helping the
              community of NITK
            </p>
          </div>
        </div>
        <hr />

        <div className="row pb-3">
          <div className="col-md-12">
            <div className="mb-5 text-center">
              <a
                className="fb-ic"
                href="https://www.facebook.com/web.club.nitk/"
              >
                <i className="fa fa-facebook fa-lg white-text mr-4"> </i>
              </a>
              <a
                className="li-ic"
                href="https://www.linkedin.com/school/web-enthusiasts-club-nitk/"
              >
                <i className="fa fa-linkedin fa-lg white-text mr-4"> </i>
              </a>
              <a className="ins-ic" href="https://www.instagram.com/wecnitk/">
                <i className="fa fa-instagram fa-lg white-text mr-4"> </i>
              </a>
              <a className="pin-ic" href="https://www.github.com/WebClub-NITK">
                <i className="fa fa-github fa-lg white-text"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// export default Footer;
