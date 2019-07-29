import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./MainNav";
import Footer from "./Footer";

class Layout extends Component {
    render() {
        console.log(this.props);
        return (
            <Fragment>
                <MainNav />
                {/* <div className="container" style={{marginTop: "80px"}} > */}
                <div>{this.props.children}</div>
                {/* </div> */}
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;
