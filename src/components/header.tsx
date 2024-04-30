import React, { useState } from 'react';
import Settings from './settings';

function Header() {

    return (
        <nav className="navbar top-navbar">
            <div className="container-fluid">
                <div
                className="navbar-left"
                style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                >
                <div className="navbar-btn">
                    <button type="button" className="btn-toggle-offcanvas">
                    <i className="lnr lnr-menu fa fa-bars" />
                    </button>
                </div>
                <h4 style={{ margin: "0 !important" }}>Title</h4>
                </div>
                <div className="navbar-right">
                <div id="navbar-menu">
                    <ul className="nav navbar-nav">
                    <li>
                        <a
                        href="javascript:void(0);"
                        className="search_toggle icon-menu"
                        title="Search Result"
                        >
                        <i className="icon-magnifier" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="icon-menu">
                        <i className="icon-power" />
                        </a>
                    </li>
                    <li>
                        <Settings />
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="progress-container">
                <div className="progress-bar" id="myBar" />
            </div>
        </nav>
    );
}

export default Header;