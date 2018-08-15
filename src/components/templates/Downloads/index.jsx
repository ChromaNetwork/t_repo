// @flow

// node_modules
import React, { Fragment } from "react";

// Components
import WhitepaperDownload from "Organisms/WhitepaperDownload";
import Wallets from "Organisms/Wallets";
import Header from "Organisms/Header";
import Footer from "Organisms/Footer";

function Downloads() {
    return (
        <Fragment>
            <Header />
            <WhitepaperDownload />
            <Wallets />
            <Footer />
        </Fragment>
    );
}

export default Downloads;
