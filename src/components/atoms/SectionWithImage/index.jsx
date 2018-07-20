// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// types
import type { Node } from "react";

// Styles
import SectionStyle from "./style";

const StyledSection = styled.div`
    ${SectionStyle};
`;

type Props = {
    // bgSrcMobile?: string,
    // bgSrcTablet?: string,
    // bgSrcDesktop?: string,
    // bgSrcWide?: string,
    bgSrcPlaceholder: string,
    bgSrcDefault: string,
    children?: Node
};

type State = {
    loaded: boolean
};

export default class Section extends React.Component<Props, State> {
    static defaultProps = {
        children: null
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        const { bgSrcDefault } = this.props;
        const imageLoader = new Image();
        imageLoader.src = bgSrcDefault;
        imageLoader.onload = () => {
            this.setState({ loaded: true });
        };
    }

    render() {
        const { children, ...passthrough } = this.props;
        const { loaded } = this.state;
        return (
            <StyledSection loaded={loaded} {...passthrough}>
                {children}
            </StyledSection>
        );
    }
}
