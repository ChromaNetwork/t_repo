// @flow

// node_modules
import React from "react";
import styled from "styled-components";
import * as Feather from "react-feather";

// Styles
import CircleButtonStyle from "./style";

type Props = {
    onClick: () => mixed,
    className?: string,
    size?: "large" | "normal" | "small",
    iconName?: string
};

const StyledCircleButton = styled.button`
    ${CircleButtonStyle};
`;

const sizes = {
    small: 16,
    normal: 24,
    large: 32
};

export default function CircleButton(props: Props) {
    const { size, iconName, ...passThrough } = props;
    const Icon = iconName ? Feather[iconName] : "";
    return (
        <StyledCircleButton role="button" size={size} {...passThrough}>
            {iconName && <Icon color="white" size={sizes[size || "normal"]} />}
        </StyledCircleButton>
    );
}

CircleButton.defaultProps = {
    className: "",
    size: "normal",
    iconName: ""
};
