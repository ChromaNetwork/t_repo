// @flow

// node_modules
import React from "react";
import styled from "styled-components";
import * as Scroll from "react-scroll";
import { ChevronsDown } from "react-feather";

// Components
import Section from "Atoms/Section";
// import SectionItem from "Atoms/SectionItem";

// types
import type { Node } from "react";

// Styles
import HeroContainerStyle from "./HeroContainer.style";
import CenteredSectionStyle from "./CenteredSection.style";
import ScrollBtnStyle from "./ScrollBtnDown.style";

const HeroContainer = styled.div`
    ${HeroContainerStyle};
`;

const CenteredSection = styled(Section)`
    ${CenteredSectionStyle};
`;

const ScrollDownBtn = styled(ChevronsDown)`
    ${ScrollBtnStyle};
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

function ScrollDown() {
    Scroll.animateScroll.scrollMore(window.innerHeight - window.pageYOffset - 50); // Header height magic number
}

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
        const { children, divideType, scrollDown, fullscreen, ...passthrough } = this.props;
        const { loaded } = this.state;
        return (
            <HeroContainer fullscreen={fullscreen} loaded={loaded} {...passthrough}>
                <CenteredSection>{children}</CenteredSection>
                {fullscreen && <ScrollDownBtn color="white" size="56" onClick={() => ScrollDown()} />}
            </HeroContainer>
        );
    }
}
