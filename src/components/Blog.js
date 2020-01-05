import React from "react";
import { Link } from "react-router-dom";


function Blog() {
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

                <div className="bradcam_area">
                    <div className="bradcam_inner bradcam_bg_2 d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="bradcam_text text-center">
                                        <h3>Blog </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="blog_area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-5 mb-lg-0">
                                <div className="blog_left_sidebar">
                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                            <img className="card-img rounded-0" src="../img/blog/single_blog_1.png" alt=""/>
                                                <Link to="#" className="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>Jan</p>
                                                </Link>
                                        </div>

                                        <div className="blog_details">
                                            <Link className="d-inline-block" to="/single">
                                                <h2>Google inks pact for new 35-storey office</h2>
                                            </Link>
                                            <p>That dominion stars lights dominion divide years for fourth have don't stars is
                                                that
                                                he earth it first without heaven in place seed it second morning saying.</p>
                                            <ul className="blog-info-link">
                                                <li><Link to="#"><i className="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                                <li><Link to="#"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>

                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                            <img className="card-img rounded-0" src="../img/blog/single_blog_2.png" alt=""/>
                                                <Link to="#" className="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>Jan</p>
                                                </Link>
                                        </div>

                                        <div className="blog_details">
                                            <Link className="d-inline-block" to="/single">
                                                <h2>Google inks pact for new 35-storey office</h2>
                                            </Link>
                                            <p>That dominion stars lights dominion divide years for fourth have don't stars is
                                                that
                                                he earth it first without heaven in place seed it second morning saying.</p>
                                            <ul className="blog-info-link">
                                                <li><Link to="#"><i className="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                                <li><Link to="#"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>

                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                            <img className="card-img rounded-0" src="../img/blog/single_blog_3.png" alt=""/>
                                                <Link to="#" className="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>Jan</p>
                                                </Link>
                                        </div>

                                        <div className="blog_details">
                                            <Link className="d-inline-block" to="/single">
                                                <h2>Google inks pact for new 35-storey office</h2>
                                            </Link>
                                            <p>That dominion stars lights dominion divide years for fourth have don't stars is
                                                that
                                                he earth it first without heaven in place seed it second morning saying.</p>
                                            <ul className="blog-info-link">
                                                <li><Link to="#"><i className="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                                <li><Link to="#"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>

                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                            <img className="card-img rounded-0" src="../img/blog/single_blog_4.png" alt=""/>
                                                <Link to="#" className="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>Jan</p>
                                                </Link>
                                        </div>

                                        <div className="blog_details">
                                            <Link className="d-inline-block" to="/single">
                                                <h2>Google inks pact for new 35-storey office</h2>
                                            </Link>
                                            <p>That dominion stars lights dominion divide years for fourth have don't stars is
                                                that
                                                he earth it first without heaven in place seed it second morning saying.</p>
                                            <ul className="blog-info-link">
                                                <li><Link to="#"><i className="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                                <li><Link to="#"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>

                                    <article className="blog_item">
                                        <div className="blog_item_img">
                                            <img className="card-img rounded-0" src="../img/blog/single_blog_5.png" alt=""/>
                                                <Link to="#" className="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>Jan</p>
                                                </Link>
                                        </div>

                                        <div className="blog_details">
                                            <Link className="d-inline-block" to="/single">
                                                <h2>Google inks pact for new 35-storey office</h2>
                                            </Link>
                                            <p>That dominion stars lights dominion divide years for fourth have don't stars is
                                                that
                                                he earth it first without heaven in place seed it second morning saying.</p>
                                            <ul className="blog-info-link">
                                                <li><Link to="#"><i className="fa fa-user"></i> Travel, Lifestyle</Link></li>
                                                <li><Link to="#"><i className="fa fa-comments"></i> 03 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </article>

                                    <nav className="blog-pagination justify-content-center d-flex">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <Link to="#" className="page-link" aria-label="Previous">
                                                    <i className="ti-angle-left"></i>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link to="#" className="page-link">1</Link>
                                            </li>
                                            <li className="page-item active">
                                                <Link to="#" className="page-link">2</Link>
                                            </li>
                                            <li className="page-item">
                                                <Link to="#" className="page-link" aria-label="Next">
                                                    <i className="ti-angle-right"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog_right_sidebar">
                                    <aside className="single_sidebar_widget search_widget">
                                        <form action="#">
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder='Search Keyword'/>
                                                        <div className="input-group-append">
                                                            <button className="btn" type="button"><i className="ti-search"></i>
                                                            </button>
                                                        </div>
                                                </div>
                                            </div>
                                            <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                                    type="submit">Search
                                            </button>
                                        </form>
                                    </aside>

                                    <aside className="single_sidebar_widget post_category_widget">
                                        <h4 className="widget_title">Category</h4>
                                        <ul className="list cat-list">
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Restaurant food</p>
                                                    <p>(37)</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Travel news</p>
                                                    <p>(10)</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Modern technology</p>
                                                    <p>(03)</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Product</p>
                                                    <p>(11)</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Inspiration</p>
                                                    <p>21</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="d-flex">
                                                    <p>Health Care (21)</p>
                                                    <p>09</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </aside>

                                    <aside className="single_sidebar_widget popular_post_widget">
                                        <h3 className="widget_title">Recent Post</h3>
                                        <div className="media post_item">
                                            <img src="../img/post/post_1.png" alt="post"/>
                                                <div className="media-body">
                                                    <Link to="/single">
                                                        <h3>From life was you fish...</h3>
                                                    </Link>
                                                    <p>January 12, 2019</p>
                                                </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="../img/post/post_2.png" alt="post"/>
                                                <div className="media-body">
                                                    <Link to="/single">
                                                        <h3>The Amazing Hubble</h3>
                                                    </Link>
                                                    <p>02 Hours ago</p>
                                                </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="../img/post/post_3.png" alt="post"/>
                                                <div className="media-body">
                                                    <Link to="/single">
                                                        <h3>Astronomy Or Astrology</h3>
                                                    </Link>
                                                    <p>03 Hours ago</p>
                                                </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="../img/post/post_4.png" alt="post"/>
                                                <div className="media-body">
                                                    <Link to="/single">
                                                        <h3>Asteroids telescope</h3>
                                                    </Link>
                                                    <p>01 Hours ago</p>
                                                </div>
                                        </div>
                                    </aside>
                                    <aside className="single_sidebar_widget tag_cloud_widget">
                                        <h4 className="widget_title">Tag Clouds</h4>
                                        <ul className="list">
                                            <li>
                                                <Link to="#">project</Link>
                                            </li>
                                            <li>
                                                <Link to="#">love</Link>
                                            </li>
                                            <li>
                                                <Link to="#">technology</Link>
                                            </li>
                                            <li>
                                                <Link to="#">travel</Link>
                                            </li>
                                            <li>
                                                <Link to="#">restaurant</Link>
                                            </li>
                                            <li>
                                                <Link to="#">life style</Link>
                                            </li>
                                            <li>
                                                <Link to="#">design</Link>
                                            </li>
                                            <li>
                                                <Link to="#">illustration</Link>
                                            </li>
                                        </ul>
                                    </aside>


                                    <aside className="single_sidebar_widget instagram_feeds">
                                        <h4 className="widget_title">Instagram Feeds</h4>
                                        <ul className="instagram_row flex-wrap">
                                            <li>
                                                <Link to="#">
                                                    <img className="img-fluid" src="../img/post/post_5.png" alt=""/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img className="img-fluid" src="../img/post/post_6.png" alt=""/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img className="img-fluid" src="../img/post/post_7.png" alt=""/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img className="img-fluid" src="../img/post/post_8.png" alt=""/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img className="img-fluid" src="../img/post/post_9.png" alt=""/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <img className="img-fluid" src="../img/post/post_10.png" alt=""/>
                                                </Link>
                                            </li>
                                        </ul>
                                    </aside>


                                    <aside className="single_sidebar_widget newsletter_widget">
                                        <h4 className="widget_title">Newsletter</h4>

                                        <form action="#">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder='Enter email'
                                                       required/>
                                            </div>
                                            <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                                    type="submit">Subscribe
                                            </button>
                                        </form>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
export default Blog;
