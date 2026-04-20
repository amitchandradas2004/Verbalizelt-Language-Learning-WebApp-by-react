import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-5 text-center md:text-start">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">VerbalizeIt</h2>
          <p className="text-sm font-medium">
            Learning is a global training provider <br /> based across the UK
            that specialises in <br /> accrodited and bespoke training course.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 text-center md:text-start gap-3 font-medium mt-5">
          <a href="#">
            <p>About Us</p>
          </a>
          <a href="#">
            <p>Service</p>
          </a>
          <a href="#">
            <p>Blog</p>
          </a>
          <a href="#">
            <p>Terms & conditions</p>
          </a>
          <a href="#">
            <p>Privacy Policy</p>
          </a>
          <a href="#">
            <p>Become a Partner</p>
          </a>
          <a href="#">
            <p>Twitter</p>
          </a>
          <a href="#">
            <p>Facebook</p>
          </a>
          <a href="#">
            <p>Instagram</p>
          </a>
        </div>
      </div>
      <hr />
      <p className="mt-5 text-center font-semibold">
        <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a> |{" "}
        <a href="#">Cookies Policy</a>{" "}
      </p>
    </footer>
  );
};

export default Footer;
