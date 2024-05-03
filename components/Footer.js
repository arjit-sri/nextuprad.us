"use client";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      {/* <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>
                Subscribe to our newsletter to stay in touch with the latest.
              </h2>
            </div>
            <div className="col-md-4">2</div>
            <div className="col-md-4 companydetail">
              <h3>DROP US A LINE</h3>
              <Link href="mailto:hello@nextupgrad.us">hello@nextupgrad.us</Link>
              <h3>CALL US</h3>
              <Link href="tel:+1(408)%20786-5558">+1(408) 786-5558</Link>
            </div>
            <div className="col-md-12 certificate">
              <Link href="#">
                <img src="/20131-1.png" />
              </Link>
              <Link href="#">
                <img src="/Untitled-design-13.png" />
              </Link>
              <Link href="#">
                <img src="/2015-1.png" />
              </Link>
              <Link href="#">
                <img src="/digital_marketing_design_2017_0.png" />
              </Link>
              <Link href="#">
                <img src="/2-1.png" />
              </Link>
            </div>

            <div className=" copyright">
              <div className="footer-lastsec">
                <div className=" companycopy">Copyright © 2024 nextupgrad</div>
                <div className=" social-footer">
                  <Link
                    href="https://www.facebook.com/nextupgrad.usa/"
                    target="_blank"
                  >
                    <svg
                      className="e-font-icon-svg e-fab-facebook"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.instagram.com/nextupgradusa/"
                    target="_blank"
                  >
                    <svg
                      className="e-font-icon-svg e-fab-instagram"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://twitter.com/nextupgrad_usa"
                    target="_blank"
                  >
                    <svg
                      className="e-font-icon-svg e-fab-twitter"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.youtube.com/@nextupgrad-usa"
                    target="_blank"
                  >
                    <svg
                      className="e-font-icon-svg e-fab-youtube"
                      viewBox="0 0 576 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/nextupgrad-usa"
                    target="_blank"
                  >
                    <svg
                      className="e-font-icon-svg e-fab-linkedin"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.pinterest.com/nextupgradusa/"
                    target="_blank"
                  >
                    <svg
                      className="e-font-icon-svg e-fab-pinterest"
                      viewBox="0 0 496 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
                    </svg>
                  </Link>
                </div>
                <div className=" privacy">
                  <Link href="#">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}

      <div className="ftr-main">
        <div className="ftr-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-4 ftr-subs">
                <h2>
                  Subscribe to our newsletter to stay in touch with the latest.
                </h2>
                <form>
                  <div className="mail-inpt">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="mail-sub">
                    <input type="submit" />
                  </div>
                </form>
              </div>
              <div className="col-md-4">
                <nav className="navbar">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Our Services
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item" href="#">
                          Digital Marketing
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Mobile App Development
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Software Development
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Website Development
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Hire Dedicated Developer
                        </a>
                      </div>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        About Me
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Bolg
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Portfolio
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-4 con-info">
                <h2 className="con-hd">DROP US A LINE</h2>
                <h2>
                  <a href="mailto:hello@nextupgrad.us">hello@nextupgrad.us</a>
                </h2>
                <h2 className="con-hd">CALL US</h2>
                <ul className="con-lis">
                  <li>
                    <i className="bi bi-telephone" />
                    <a href="tel:+1(408) 786-5558">+1(408) 786-5558</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row logos">
              <div className="ftr-logos">
                <img src="ISO.png" alt="ISO-logo" />
                <img src="PMP.png" alt="PMP-logo" />
                <img src="ISO-2.png" alt="ISO-logo" />
                <img src="Clutch.png" alt="Clutch-logo" />
                <img src="ISO-3.png" alt="ISO-logo" />
              </div>
            </div>
            <div className="row below-ftr">
              <div className="col-md-4 copy-right">
                <h2>Copyright © 2024 nextupgrad</h2>
              </div>
              <div className="col-md-4">
                <div className="ftr-socio">
                  <a
                    href="https://www.facebook.com/nextupgrad.usa/"
                    target="_blank"
                  >
                    <i className="bi bi-facebook" />
                  </a>
                  <a
                    href="https://www.instagram.com/nextupgradusa/"
                    target="_blank"
                  >
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="https://twitter.com/nextupgrad_usa" target="_blank">
                    <i className="bi bi-twitter" />
                  </a>
                  <a
                    href="https://www.youtube.com/@nextupgrad-usa"
                    target="_blank"
                  >
                    <i className="bi bi-youtube" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nextupgrad-usa"
                    target="_blank"
                  >
                    <i className="bi bi-linkedin" />
                  </a>
                  <a
                    href="https://www.pinterest.com/nextupgradusa/"
                    target="_blank"
                  >
                    <i className="bi bi-pinterest" />
                  </a>
                </div>
              </div>
              <div className="col-md-4 pre-policy">
                <h2>
                  <a href="#">Privacy Policy</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
