// @flow

// node_modules
import React from "react";

// Components
import Header from "Organisms/Header";
import Footer from "Organisms/Footer";

type Props = {
    message: string
};

function Contact(props: Props) {
    const { message }: { message: string } = props;
    return (
        <div>
            <Header />
            {message}
            <Footer />
        </div>
    );
}

export default Contact;
