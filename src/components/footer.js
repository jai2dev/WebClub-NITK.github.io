import React from "react";
import "../styles/global.css";

export default function footer() {
  return (
    <footer
      className="white-text page-footer font-small pt-4"
      style={{ backgroundColor: "#1d2f47" }}
    >
      <div class="container text-center text-md-left">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">
              Contact Us
            </h5>
            <p>
              <i class="fa fa-home mr-3"></i> NITK, Surathkal, Karnataka, India-
              575025
            </p>
            <p>
              <i class="fa fa-envelope mr-3"></i>{" "}
              <span class="f-link">
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

          <hr class="clearfix w-100 d-md-none" />

          <div class="col-md-6 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">About Us</h5>
            <p>
              A group of passionate computer science students helping the
              community of NITK
            </p>
          </div>
        </div>
        <hr />

        <div class="row pb-3">
          <div class="col-md-12">
            <div class="mb-5 text-center">
              <a class="fb-ic" href="https://www.facebook.com/web.club.nitk/">
                <i class="fa fa-facebook fa-lg white-text mr-4"> </i>
              </a>
              <a
                class="li-ic"
                href="https://www.linkedin.com/school/web-enthusiasts-club-nitk/"
              >
                <i class="fa fa-linkedin fa-lg white-text mr-4"> </i>
              </a>
              <a class="ins-ic" href="https://www.instagram.com/wecnitk/">
                <i class="fa fa-instagram fa-lg white-text mr-4"> </i>
              </a>
              <a class="pin-ic" href="https://www.github.com/WebClub-NITK">
                <i class="fa fa-github fa-lg white-text"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// export default Footer;
