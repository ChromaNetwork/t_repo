// @flow

// node_modules
import React, { Fragment } from "react";
import styled from "styled-components";
import Slider from "react-slick";

// Constants and Utils
import { Testimonials } from "Base/Constants";

// Components
import Section from "Molecules/Section";
import { NormalText, SmallText } from "Atoms/Text";
import CircleButton from "Atoms/CircleButton";

// Styles
import TestimonialSectionContainerStyle from "./TestimonialSectionContainer.style";
import TestimonialContainerStyle from "./TestimonialContainer.style";
import QuoteStyle from "./Quote.style";
import NameTextStyle from "./NameText.style";
import TitleTextStyle from "./TitleText.style";
import SliderStyle from "./Slider.style";

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
    ${SliderStyle};
`;

function PrevArrow(props: { onClick: any }) {
    return <CircleButton blue onClick={props.onClick} iconName="ChevronLeft" />;
}

function NextArrow(props: { onClick: any }) {
    return <CircleButton blue onClick={props.onClick} iconName="ChevronRight" />;
}

function Home() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        // $FlowFixMe -- Props will be provided by Slider.
        prevArrow: <PrevArrow />,
        // $FlowFixMe -- Props will be provided by Slider.
        nextArrow: <NextArrow />
    };
    return (
        <Fragment>
            <StyledSection titleAlign="right" title="Testimonials">
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
