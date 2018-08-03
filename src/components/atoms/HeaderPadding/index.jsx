// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Styles
import HeaderPaddingStyle from "./style";

const HeaderPaddingContainer = styled.div`
    ${HeaderPaddingStyle};
`;

export default function HeaderPadding() {
    return <HeaderPaddingContainer />;
}
