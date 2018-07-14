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

// Routes
import Home from "Templates/Home";
import About from "Templates/About";
import Downloads from "Templates/Downloads";
import Opportunities from "Templates/Opportunities";
import Contact from "Templates/Contact";

// Constants and Utils
import { Paths } from "Base/Constants";
import MainTheme from "Base/MainTheme";

function App() {
    const HomeComponent = () => <Home message="Home" />;
    const AboutComponent = () => <About message="About" />;
    const DownloadsComponent = () => <Downloads message="Downloads" />;
    const OpportunitiesComponent = () => <Opportunities message="Opportunities" />;
    const ContactComponent = () => <Contact message="Contact" />;
    return (
        <ThemeProvider theme={MainTheme}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={Paths.home} component={HomeComponent} />
                    <Route exact path={Paths.about} component={AboutComponent} />
                    <Route exact path={Paths.downloads} component={DownloadsComponent} />
                    <Route exact path={Paths.opportunities} component={OpportunitiesComponent} />
                    <Route exact path={Paths.contact} component={ContactComponent} />
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}

/* prettier-ignore */ ReactDOM.render(<App />, ((document): any).getElementById("app"));
