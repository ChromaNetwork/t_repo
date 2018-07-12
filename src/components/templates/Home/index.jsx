// @flow

// node_modules
import React from "react";
import { NavLink } from "react-router-dom";

// Constants and Utils
import { Paths } from "Base/Constants";

// Components
import { LargeText, NormalText, SmallText } from "Atoms/StyledText";
import { LargeHeading, NormalHeading, SmallHeading } from "Atoms/StyledHeading";
import ColorsDemo from "Molecules/dev/Colors";

function Home() {
    return (
        <div>
            <NavLink to={Paths.home}>Home</NavLink>
            <br />
            <NavLink to={Paths.about}>About</NavLink>
            <br />
            <NavLink to={Paths.downloads}>Downloads</NavLink>
            <br />
            <NavLink to={Paths.opportunities}>Opportunities</NavLink>

            <LargeHeading>Large Heading</LargeHeading>
            <NormalHeading>Normal Heading</NormalHeading>
            <SmallHeading>Small Heading</SmallHeading>
            <LargeText>Large Text</LargeText>
            <NormalText>Normal Text</NormalText>
            <SmallText>Small Text</SmallText>

            <ColorsDemo />
        </div>
    );
}

export default Home;
