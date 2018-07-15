// @flow

// node_modules
import React from "react";
import styled from "styled-components";

// Styles
import SeparatorStyle from "./style";

const StyledSeparator = styled.hr.attrs({ align: "left" })`
    ${SeparatorStyle};
`;

export default function Separator() {
    return <StyledSeparator />;
}
