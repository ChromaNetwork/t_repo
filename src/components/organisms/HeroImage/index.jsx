// @flow
// Video player background styles adapted from https://codebushi.com/react-youtube-background/

// node_modules
import React from "react";
import styled from "styled-components";
import * as Scroll from "react-scroll";
import { ChevronsDown } from "react-feather";
import YouTubePlayer from "react-player/lib/players/YouTube";

// Components
import Section from "Molecules/Section";
// import SectionItem from "Atoms/SectionItem";

// types
import type { Node } from "react";

// Styles
import HeroContainerStyle from "./HeroContainer.style";
import CenteredSectionStyle from "./CenteredSection.style";
import ScrollBtnStyle from "./ScrollBtnDown.style";
import VideoBackgroundStyle from "./VideoBackground.style";
import VideoForegroundStyle from "./VideoForeground.style";
import PlayerStyle from "./Player.style";

const HeroContainer = styled.div`
    ${HeroContainerStyle};
`;

const CenteredSection = styled(Section)`
    ${CenteredSectionStyle};
`;

const ScrollDownBtn = styled(ChevronsDown)`
    ${ScrollBtnStyle};
`;

const VideoBackground = styled.div`
    ${VideoBackgroundStyle};
`;

const VideoForeground = styled.div`
    ${VideoForegroundStyle};
`;

const StyledPlayer = styled(YouTubePlayer)`
    ${PlayerStyle};
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
    Scroll.animateScroll.scrollMore(window.innerHeight - window.pageYOffset - 50); // Header height magic number :/
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
                {fullscreen && (
                    <VideoBackground>
                        <VideoForeground>
                            <StyledPlayer
                                style={{ objectFit: "cover" }}
                                muted
                                loop
                                preload="true"
                                url="https://www.youtube.com/watch?v=sjekGOb95IM"
                                playing
                            />
                        </VideoForeground>
                    </VideoBackground>
                )}
                <CenteredSection>{children}</CenteredSection>
                {fullscreen && <ScrollDownBtn color="white" size="56" onClick={() => ScrollDown()} />}
            </HeroContainer>
        );
    }
}
