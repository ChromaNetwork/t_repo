// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Components
import Section from "Atoms/Section";
// import SectionItem from "Atoms/SectionItem";

// types
import type { Node } from "react";

// Styles
import HeroContainerStyle from "./HeroContainer.style";
import CenteredSectionStyle from "./CenteredSection.style";
// import CenteredSectionItemStyle from "./CenteredSectionItem.style";

const HeroContainer = styled.div`
    ${HeroContainerStyle};
`;

const CenteredSection = styled(Section)`
    ${CenteredSectionStyle};
`;

type Props = {
    // srcMobile?: string,
    // srcTablet?: string,
    // srcDesktop?: string,
    // srcWide?: string,
    fullscreen?: boolean,
    srcPlaceholder: string,
    srcDefault: string,
    divideType?: null | "blue" | "purple",
    scrollDown?: boolean,
    children?: Node
};

type State = {
    loaded: boolean
};

export default class HeroImage extends React.Component<Props, State> {
    static defaultProps = {
        // srcMobile: "",
        // srcTablet: "",
        // srcDesktop: "",
        // srcWide: "",
        fullscreen: false,
        divideType: null,
        scrollDown: false,
        children: null
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        const { srcDefault } = this.props;
        const imageLoader = new Image();
        imageLoader.src = srcDefault;
        imageLoader.onload = () => {
            this.setState({ loaded: true });
        };
    }

    render() {
        const { children, divideType, scrollDown, ...passthrough } = this.props;
        const { loaded } = this.state;
        return (
            <HeroContainer loaded={loaded} {...passthrough}>
                <CenteredSection>{children}</CenteredSection>
            </HeroContainer>
        );
    }
}
