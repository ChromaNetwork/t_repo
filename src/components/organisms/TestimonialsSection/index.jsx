// @flow

// node_modules
import React, { Fragment } from "react";
import styled from "styled-components";
import Slider from "react-slick";

// Constants and Utils
import { Testimonials } from "Base/Constants";

// Components
import Section from "Atoms/Section";
import SectionItem from "Atoms/SectionItem";
import { LargeHeading } from "Atoms/Heading";
import { NormalText, SmallText } from "Atoms/Text";
import CircleButton from "Atoms/CircleButton";

// Styles
import TestimonialSectionContainerStyle from "./TestimonialSectionContainer.style";
import TestimonialContainerStyle from "./TestimonialContainer.style";
import CenteredTitleStyle from "./CenteredTitle.style";
import QuoteStyle from "./Quote.style";
import NameTextStyle from "./NameText.style";
import TitleTextStyle from "./TitleText.style";

const CenteredLargeTitle = styled(LargeHeading)`
    ${CenteredTitleStyle};
`;

const StyledSection = styled(Section)`
    ${TestimonialSectionContainerStyle};
`;

const TestimonialContainer = styled(Section)`
    ${TestimonialContainerStyle};
`;

const QuoteText = styled(NormalText)`
    ${QuoteStyle};
`;

const NameText = styled(NormalText)`
    ${NameTextStyle};
`;

const TitleText = styled(SmallText)`
    ${TitleTextStyle};
`;

const StyledSlider = styled(Slider)`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

function PrevArrow(props: { onClick: any }) {
    return <CircleButton onClick={props.onClick} size="small" iconName="ArrowLeft" />;
}

function NextArrow(props: { onClick: any }) {
    return <CircleButton onClick={props.onClick} size="small" iconName="ArrowRight" />;
}

function Home() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        // $FlowFixMe -- Props will be provided by Slider.
        prevArrow: <PrevArrow />,
        // $FlowFixMe -- Props will be provided by Slider.
        nextArrow: <NextArrow />
    };
    return (
        <Fragment>
            <StyledSection>
                <SectionItem>
                    <CenteredLargeTitle>Testimonials</CenteredLargeTitle>
                </SectionItem>
                <StyledSlider {...settings}>
                    {Testimonials.map(testimonial => (
                        <TestimonialContainer key={testimonial.sourceName}>
                            <QuoteText>{testimonial.quote}</QuoteText>
                            <NameText>{testimonial.sourceName}</NameText>
                            <TitleText>{testimonial.sourceTitle}</TitleText>
                        </TestimonialContainer>
                    ))}
                </StyledSlider>
            </StyledSection>
        </Fragment>
    );
}

export default Home;