import React from "react";
import mailImage from "../../assets/mail.png";
import facebookImage from "../../assets/Facebook.png";
import twitterImage from "../../assets/Twitter.png";
import linkedinImage from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white">
      <div className="container mx-auto">
        <div className="footer  lg:footer-horizontal   p-10 py-20">
          <aside>
            <h1 className="font-bold text-xl md:text-3xl">
              CS — Ticket System
            </h1>
            <p className="text-white/70 mt-5">
              Lorem Ipsum is simply dummy text of the <br />
              printing and typesetting industry. Lorem Ipsum <br /> has been the
              industry's standard <br /> dummy text ever since the 1500s, when
              an <br /> unknown printer took a galley of type and <br />
              scrambled it to make a type specimen book.
            </p>
          </aside>
          <nav>
            <h6 className="text-lg text-white">Company</h6>
            <a className="link link-hover text-white/70">About Us</a>
            <a className="link link-hover text-white/70">Our Mission</a>
            <a className="link link-hover text-white/70">Contact Saled</a>
          </nav>
          <nav>
            <h6 className="text-lg text-white">Services</h6>
            <a className="link link-hover text-white/70">Products & Services</a>
            <a className="link link-hover text-white/70">Customer Stories</a>
            <a className="link link-hover text-white/70">Download Apps</a>
          </nav>
          <nav>
            <h6 className="text-lg text-white">Information</h6>
            <a className="link link-hover text-white/70">Privacy Policy</a>
            <a className="link link-hover text-white/70">Terms & Conditions</a>
            <a className="link link-hover text-white/70">Join Us</a>
          </nav>
          <nav>
            <h6 className="text-lg text-white">Social links</h6>

            {/* Social Icons */}
            <div className="flex flex-col text-white/70 justify-center gap-3">
              <div className="flex items-center gap-2">
                <a
                  href=""
                  className="w-5 h-5 bg-white rounded-full flex items-center justify-center"
                >
                  <img src={facebookImage} alt="Twitter" />
                </a>
                <p>@CS — Ticket System</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href=""
                  className=" w-5 h-5  bg-white rounded-full flex items-center justify-center"
                >
                  <img src={linkedinImage} alt="Twitter" />
                </a>
                <p>@CS — Ticket System</p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href=""
                  className=" w-5 h-5 bg-white rounded-full flex items-center justify-center"
                >
                  <img src={twitterImage} alt="Twitter" />
                </a>
                <p>@CS — Ticket System</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href=""
                  className=" w-5 h-5 rounded-full flex items-center justify-center"
                >
                  <img src={mailImage} alt="Twitter" />
                </a>
                <p>@CS — Ticket System</p>
              </div>
            </div>
          </nav>
        </div>
        <div className="h-px w-full bg-white/30 my-5 mt-10"></div>
        <div className="footer sm:footer-horizontal  p-4 flex flex-col md:flex-row items-center  md:justify-between">
          <aside>
            <p className="text-white/50">
              Copyright © {new Date().getFullYear()} - Ticket System. All right reserved by
              ACME Industries Ltd
            </p>
          </aside>
          <ul className="flex items-center gap-7 flex-wrap ">
            <li>
              <a className="link link-hover text-white/50">Privacy Policy </a>
            </li>
            <li>
              <a className="link link-hover text-white/50">Terms of Service</a>
            </li>
            <li>
              <a className="link link-hover text-white/50">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
