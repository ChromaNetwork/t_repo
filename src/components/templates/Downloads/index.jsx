// @flow

// node_modules
import React, { Fragment } from "react";

// Components
import WhitepaperDownload from "Organisms/WhitepaperDownload";
import Wallets from "Organisms/Wallets";
import Header from "Organisms/Header";
import Footer from "Organisms/Footer";
import TextBlock from "Molecules/TextBlock";
import HeroImage from "Organisms/HeroImage";

// Constants
import { ImageAssets, PlaceholderText } from "Base/Constants";

function Downloads() {
    return (
        <Fragment>
            <Header />
            <HeroImage {...ImageAssets.panorama}>
                <TextBlock
                    header="Downloads"
                    headerSize="large"
                    text={PlaceholderText}
                    textSize="large"
                    align="center"
                />
            </HeroImage>
            <WhitepaperDownload />
            <Wallets />
            <Footer />
        </Fragment>
    );
}

export default Downloads;
