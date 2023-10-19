/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import getSiblings from '../../common/getSiblings'

const Navbarsker = ({ navbarRef, logoRef, logoClass }) => {
    const handleDropdown = (e) => {
        getSiblings(e.target.parentElement)
            .filter((item) => item.classList.contains("show"))
            .map((item) => {
                item.classList.remove("show");
                if (item.childNodes[0]) {
                    item.childNodes[0].setAttribute("aria-expanded", false);
                }
                if (item.childNodes[1]) {
                    item.childNodes[1].classList.remove("show");
                }
            });
        e.target.parentElement.classList.toggle("show");
        e.target.setAttribute("aria-expanded", true);
        e.target.parentElement.childNodes[1].classList.toggle("show");
    };

    const handleMobileDropdown = (e) => {
        document
            .getElementById("navbarSupportedContent")
            .classList.toggle("show-with-trans");
    };

    return (
        <>
            <nav className="navbar change  navbar-expand-lg pb-5" ref={navbarRef}>
                <div className="container-fluid">
                    
                        <div className="col-lg-3">
                            <Link href="/demos">
                                <a className={`logo ${logoClass && logoClass}`}>
                                    <img src={appData.lightLogo} alt="logo" ref={logoRef} />
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-6 sliderForNavbarText justify-content-center">
                            <div className="textForNavbarText">This is dummy text for slider, Here all the latest news will be apeared</div>
                        </div>
                        <div className="col-lg-3">
                            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                                <ul className="navbar-nav ">
                                <button type="button" class="btn btn-primary">
                                        <Link href="/about">
                                            <a>Testing button for download</a>
                                        </Link>
                                        </button>
                                </ul>
                            </div>
                        </div>
                    
                </div>
            </nav>
        </>
    );
};

export default Navbarsker;
