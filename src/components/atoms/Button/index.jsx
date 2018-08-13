// @flow

// node_modules
import React from "react";
import styled from "styled-components";
import * as Feather from "react-feather";
import { Link } from "react-router-dom";

// Components
import { NormalText } from "Atoms/Text";

// Constants
import MainTheme from "Base/MainTheme";

// Styles
import ButtonStyle from "./Button.style";

type Props = {
    onClick?: () => mixed,
    href?: string,
    className?: string,
    text: string,
    iconName?: string
};

const StyleButtonLink = styled(Link)`
    ${ButtonStyle};
`;

const StyleButton = styled.button`
    ${ButtonStyle};
`;

export default function CircleButton(props: Props) {
    const { iconName, text, href, ...passThrough } = props;
    const Icon = iconName ? Feather[iconName] : "";
    return href ? (
        <StyleButtonLink to={href} {...passThrough}>
            <NormalText color={MainTheme.white}>{text}</NormalText>
            {iconName && <Icon color={MainTheme.white} size={24} style={{ marginLeft: "10px" }} />}
        </StyleButtonLink>
    ) : (
        <StyleButton {...passThrough}>
            <NormalText color={MainTheme.white}>{text}</NormalText>
            {iconName && <Icon color={MainTheme.white} size={24} style={{ marginLeft: "10px" }} />}
        </StyleButton>
    );
}

CircleButton.defaultProps = {
    className: "",
    iconName: "",
    href: "",
    onClick: () => {}
};
