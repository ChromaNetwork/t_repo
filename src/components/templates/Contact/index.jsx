// @flow

// node_modules
import React from "react";

// Components
import Header from "Organisms/Header";

type Props = {
    message: string
};

function Contact(props: Props) {
    const { message }: { message: string } = props;
    return (
        <div>
            <Header />
            {message}
        </div>
    );
}

export default Contact;
