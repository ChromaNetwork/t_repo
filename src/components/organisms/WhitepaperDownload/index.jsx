// @flow

// node_modules
import React, { Fragment } from "react";
import styled from "styled-components";

// Constants
import { DownloadableFiles, PlaceholderText } from "Base/Constants";

// Components
import Button from "Atoms/Button";
import SectionItem from "Atoms/SectionItem";
import Section from "Molecules/Section";
import TextBlock from "Molecules/TextBlock";
import ArrowHeading from "Molecules/ArrowHeading";

// Styles
import ButtonStyle from "./Button.style";

const StyledBytton = styled(Button)`
    ${ButtonStyle};
`;

function WhitepaperDownload(props: {}) {
    return (
        <Fragment>
            <ArrowHeading text="Tao Roadmap and Vision" align="right" />
            <Section {...props}>
                <SectionItem>
                    <TextBlock style={{ marginBottom: "48px" }} text={PlaceholderText} />
                    <StyledBytton
                        href={DownloadableFiles.whitepaper.currentLink.url}
                        externalLink
                        text="Download Roadmap"
                    />
                </SectionItem>
            </Section>
        </Fragment>
    );
}

export default WhitepaperDownload;
