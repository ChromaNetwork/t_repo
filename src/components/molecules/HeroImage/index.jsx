// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Components
import Section from "Atoms/Section";
import SectionItem from "Atoms/SectionItem";
import SectionDivide from "Atoms/SectionDivide";

// types
import type { Node } from "react";

// Styles
import HeroContainerStyle from "./HeroContainer.style";
import CenteredSectionStyle from "./CenteredSection.style";
import CenteredSectionItemStyle from "./CenteredSectionItem.style";

const HeroContainer = styled.div`
    ${HeroContainerStyle};
`;

const CenteredSection = styled(Section)`
    ${CenteredSectionStyle};
`;

const CenteredSectionItem = styled(SectionItem)`
    ${CenteredSectionItemStyle};
`;

const PositionedCenterDivide = styled(SectionDivide)`
    position: absolute;
    bottom: 0;
    width: 100%;
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
        const { children, divideType, ...passthrough } = this.props;
        const { loaded } = this.state;
        return (
            <HeroContainer loaded={loaded} {...passthrough}>
                <CenteredSection>
                    <CenteredSectionItem>{children}</CenteredSectionItem>
                </CenteredSection>
                {divideType && <PositionedCenterDivide direction="top" type={divideType} transparent />}
            </HeroContainer>
        );
    }
}
