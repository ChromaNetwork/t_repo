// @flow

// https://babeljs.io/docs/en/babel-polyfill
// Make sure polyfill is imported before any other code at entrypoint.
import "babel-polyfill";
//  standardize styles across browsers
import "normalize.css";

// node_modules
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Components
import ScrollToTop from "Atoms/ScrollToTop";
import HeaderPadding from "Atoms/HeaderPadding";

// Routes
import Home from "Templates/Home";
import About from "Templates/About";
import Downloads from "Templates/Downloads";

// Constants and Utils
import { Paths } from "Base/Constants";
import MainTheme from "Base/MainTheme";

function App() {
    const HomeComponent = () => <Home />;
    const AboutComponent = () => <About />;
    const DownloadsComponent = () => <Downloads />;
    return (
        <ThemeProvider theme={MainTheme}>
            <BrowserRouter>
                <ScrollToTop>
                    <HeaderPadding />
                    <Switch>
                        <Route exact path={Paths.home} component={HomeComponent} />
                        <Route exact path={Paths.about} component={AboutComponent} />
                        <Route exact path={Paths.downloads} component={DownloadsComponent} />
                    </Switch>
                </ScrollToTop>
            </BrowserRouter>
        </ThemeProvider>
    );
}

/* prettier-ignore */ ReactDOM.render(<App />, ((document): any).getElementById("app"));
