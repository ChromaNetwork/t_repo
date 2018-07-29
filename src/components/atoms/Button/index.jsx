// @flow

// node_modules
import React from "react";
import styled from "styled-components";
import * as Feather from "react-feather";

// Components
import { NormalText } from "Atoms/Text";

// Constants
import MainTheme from "Base/MainTheme";

// Styles
import ButtonStyle from "./Button.style";

type Props = {
    onClick: () => mixed,
    className?: string,
    text: string,
    iconName?: string
};

const StyleButton = styled.button`
    ${ButtonStyle};
`;

export default function CircleButton(props: Props) {
    const { iconName, text, ...passThrough } = props;
    const Icon = iconName ? Feather[iconName] : "";
    return (
        <StyleButton role="button" {...passThrough}>
            <NormalText color={MainTheme.accentDarkColor}>{text}</NormalText>
            {iconName && <Icon color={MainTheme.accentDarkColor} size={24} style={{ marginLeft: "10px" }} />}
        </StyleButton>
    );
}

CircleButton.defaultProps = {
    className: "",
    iconName: ""
};
