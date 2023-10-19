/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const FooterAsker = ({ classText }) => {
    return (
        <footer className={`${classText ? classText : ""}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="item md-mb50">
                            <div className="title">
                                <h5>İletişim</h5>
                            </div>
                            <ul>
                                <li>
                                    <span className="icon pe-7s-map-marker"></span>
                                    <div className="cont">
                                        <h6>Officeal Address</h6>
                                        <p>504 White St . Dawsonville, GA 30534 , New York</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="icon pe-7s-mail"></span>
                                    <div className="cont">
                                        <h6>Email Us</h6>
                                        <p>support@gmail.com</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="icon pe-7s-call"></span>
                                    <div className="cont">
                                        <h6>Whatsapp Destek Hattı</h6>
                                        <p>+87986451666</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="item md-mb50">
                            <div className="title">
                                <h5>Güncel Haberler</h5>
                            </div>
                            <ul>
                                <li>
                                    <div className="img">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/assets/img/blog/1.jpg" alt="" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="sm-post">
                                        <Link href="/blog-details">
                                            <a>
                                                <p>
                                                    The Start-Up Ultimate Guide to Make Your WordPress
                                                    Journal.
                                                </p>
                                            </a>
                                        </Link>
                                        <span className="date">14 Jan 2022</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="img">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src="/assets/img/blog/2.jpg" alt="" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="sm-post">
                                        <Link href="/blog-details">
                                            <a>
                                                <p>
                                                    The Start-Up Ultimate Guide to Make Your WordPress
                                                    Journal.
                                                </p>
                                            </a>
                                        </Link>
                                        <span className="date">14 Jan 2022</span>
                                    </div>
                                </li>
                                <li>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="item md-mb50">
                            <div className="title">
                                <h5>Önemli Bağlantılar</h5>
                            </div>
                            
                                
                                    <div className="img mb-3">
                                        <Link href="/blog-details">
                                            <a>
                                                Hakkımızda
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="img mb-3">
                                        <Link href="/blog-details">
                                            <a>
                                                Referenslar
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="img mb-3">
                                        <Link href="/blog-details">
                                            <a>
                                                KVKK
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="img mb-3">
                                        <Link href="/blog-details">
                                            <a>
                                                Gizlilik Söz
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="img mb-3">
                                        <Link href="/blog-details">
                                            <a>
                                                Kullanım Söz
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="img mb-3">
                                        <Link href="/blog-details">
                                            <a clasName='askerr'>
                                                Sıkça sorulan sorular
                                            </a>
                                        </Link>
                                    </div>
                                
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="item">
                            <div className="logo">
                                <img src="/assets/img/logo-light.png" alt="" />
                            </div>
                            <div className="social">
                                <Link href="#">
                                    <a id='askerr'>
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a id='askerr'>
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a id='askerr'>
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a id='askerr'>
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </Link>
                            </div>
                            <div className="copy-right">
                                <p>
                                    © 2022, Testing Website. Made with passion by
                                    <Link href="#">Hilal Ahamd</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterAsker;
