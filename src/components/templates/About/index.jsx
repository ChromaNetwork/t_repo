// @flow

// node_modules
import React from "react";
import { NavLink } from "react-router-dom";

// Constants and Utils
import { Paths } from "Base/Constants";

type Props = {
    message: string
};

function About(props: Props) {
    const { message }: { message: string } = props;
    return (
        <div>
            {message} <br />
            <NavLink to={Paths.home}>Home</NavLink>
            <br />
            <NavLink to={Paths.about}>About</NavLink>
            <br />
            <NavLink to={Paths.downloads}>Downloads</NavLink>
            <br />
            <NavLink to={Paths.opportunities}>Opportunities</NavLink>
            <br />
            <NavLink to={Paths.contact}>Contact</NavLink>
        </div>
    );
}

export default About;
