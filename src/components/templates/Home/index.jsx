// @flow

// node_modules
import React from "react";
import { Link } from "react-router-dom";

// Constants and Utils
import { Paths } from "Base/Constants";

type Props = {
    message: string
};

function Home(props: Props) {
    const { message }: { message: string } = props;
    return (
        <div>
            {message}
            <br />
            <Link to={Paths.home}>Home</Link>
            <Link to={Paths.about}>About</Link>
            <Link to={Paths.downloads}>Downloads</Link>
            <Link to={Paths.opportunities}>Opportunities</Link>
        </div>
    );
}

export default Home;
