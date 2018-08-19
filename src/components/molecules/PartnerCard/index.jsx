// @flow

// node_Modules
import React from "react";
import styled from "styled-components";

// Components
// import Card from "Atoms/Card";

// Types
import type { PartnerLink } from "Base/Constants";

// Styles
import PartnerCardStyle from "./style";

type Props = {
    className?: "",
    partnerLink: PartnerLink
};

const StyledCard = styled.div`
    ${PartnerCardStyle};
`;

export default function PartnerCard(props: Props) {
    const { partnerLink, ...passthrough } = props;
    return (
        <a href={partnerLink.url}>
            <StyledCard
                hover
                key={partnerLink.label}
                width={partnerLink.width}
                widtht={partnerLink.width_t}
                widthd={partnerLink.width_d}
                level={1}
                {...passthrough}
            >
                <img src={partnerLink.logoUrl} style={{ width: "100%" }} alt="" />
            </StyledCard>
        </a>
    );
}

PartnerCard.defaultProps = {
    className: ""
};
