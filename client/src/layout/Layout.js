import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./MainNav";
import Footer from "./Footer";

class Layout extends Component {
    render() {
        return (
            <div>
                <MainNav />
                {/* <div className="container" style={{marginTop: "80px"}} > */}
                <main>{this.props.children}</main>
                {/* </div> */}
                <Footer />
            </div>
        );
    }
}

export default Layout;
