import React from "react";
import { Link } from "react-router-dom";


function Main() {
    return (
        <html className="no-js" lang="zxx">

            <head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                <title>Lawyer</title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </head>
            <body>
                <header>
                    <div className="header-area ">
                        <div id="sticky-header" className="main-header-area">
                            <div className="container-fluid p-0">
                                <div className="row align-items-center justify-content-between no-gutters">
                                    <div className="col-xl-2 col-lg-2">
                                        <div className="logo-img">
                                            <Link to="/index">
                                                <img src="../img/logo.png" alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-8">
                                        <div className="main-menu  d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><Link className="active" to="/">home</Link></li>
                                                    <li><Link to="/about">About</Link></li>
                                                    <li><Link to="/practice">Practice Area</Link></li>
                                                    <li><Link to="#">blog <i className="ti-angle-down"></i></Link>
                                                        <ul className="submenu">
                                                            <li><Link to="/blog">blog</Link></li>
                                                            <li><Link to="/single">single-blog</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link to="#">pages <i className="ti-angle-down"></i></Link>
                                                        <ul className="submenu">
                                                            <li><Link to="/elements">elements</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link to="/contact">Contact</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-2 d-none d-lg-block">
                                        <div className="social_media_links">
                                            <ul>
                                                <li><Link to="https://www.facebook.com/"> <i className="fa fa-facebook"></i> </Link></li>
                                                <li><Link to="https://twitter.com/"> <i className="fa fa-twitter"></i> </Link></li>
                                                <li><Link to="https://www.instagram.com/"> <i className="fa fa-instagram"></i> </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="slider_area ">
                    <div className="slider_area_inner slider_bg_1 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7">
                                    <div className="single_slider">
                                        <div className="slider_text">
                                            <h3>High Quality Law <br></br>
                                                Advice and Support</h3>
                                            <p>Leading Polish Lawyer in your city</p>
                                            <Link to="#" className="boxed-btn4 ">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about_area">
                    <div className="opacity_icon d-none d-lg-block">
                        <i className="flaticon-balance"></i>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-6">
                                <div className="single_about_info text-center">
                                    <div className="about_thumb">
                                        <img src="../img/about/1.png" alt=""/>
                                    </div>
                                    <h3>Finest And Strongest Law <br></br>
                                        Firm Win The World</h3>
                                    <p>There are many variations of passages of Lorem Ipsum <br></br> available, but the majority
                                        have
                                        suffered alteration in <br></br> some form, by injected humour, or randomised
                                            words <br></br> which
                                                don't look even slightly believable.</p>
                                    <div className="signature">
                                        <img src="../img/about/signature.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                                <div className="single_about_info text-center">
                                    <div className="about_thumb">
                                        <div className="image_hover">
                                            <div className="hover_inner">
                                                <h2>93%</h2>
                                                <span>Success Case</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>About Lawyer Justice</h3>
                                    <p>There are many variations of passages of Lorem Ipsum <br></br>available, but the majority
                                        have
                                        suffered alteration in <br></br>some form, by injected humour, or randomised
                                        words <br></br> which
                                                don't look even slightly believable.</p>
                                    <div className="total_cases">
                                        <div className="single_cases">
                                            <h4>879</h4>
                                            <p>Total Cases</p>
                                        </div>
                                        <div className="single_cases">
                                            <h4>787</h4>
                                            <p>Case Won</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <footer className="footer">
                    <div className="footer_top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-md-6 col-lg-3">
                                    <div className="footer_widget">
                                        <div className="footer_logo">
                                            <Link to="/main">
                                                <img src="../img/logo.png" alt=""/>
                                            </Link>
                                        </div>
                                        <p className="footer_text">200, A-block, Green road, USA <br></br>
                                            +10 367 267 2678 <br></br>
                                            <Link className="domain" to="#">lawyer@contact.com</Link></p>
                                        <div className="socail_links">
                                            <ul>
                                                <li>
                                                    <Link to='#'>
                                                        <i className="fa fa-facebook"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='#'>
                                                        <i className="fa fa-twitter"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='#' >
                                                        <i className="fa fa-instagram"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-6 col-lg-2">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            Practice Area
                                        </h3>
                                        <ul>
                                            <li><Link to="/business">Business law</Link></li>
                                            <li><Link to="/finance">Finance law</Link></li>
                                            <li><Link to="/education">Education law</Link></li>
                                            <li><Link to="/family">Family law</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-6 col-lg-2">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            Useful Links
                                        </h3>
                                        <ul>
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/contact"> Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 col-lg-4">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            Subscribe
                                        </h3>
                                        <form action="#" className="newsletter_form">
                                            <input type="text" placeholder="Enter your mail"/>
                                                <button type="submit">Sign Up</button>
                                        </form>
                                        <p className="newsletter_text">Subscribe newsletter to get updates</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right_text">
                        <div className="container">
                            <div className="footer_border"></div>
                            <div className="row">
                                <div className="col-xl-12">

                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>

        </html>
    );
}
export default Main;
