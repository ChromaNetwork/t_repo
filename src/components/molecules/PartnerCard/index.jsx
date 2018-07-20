// @flow

// node_Modules
import React from "react";
import styled from "styled-components";

// Components
import Card from "Atoms/Card";

// Types
import type { PartnerLink } from "Base/Constants";

// Styles
import PartnerCardStyle from "./style";

type Props = {
    className?: "",
    partnerLink: PartnerLink
};

const StyledCard = styled(Card)`
    ${PartnerCardStyle};
`;

function onPartnerClick(url: ?string): void {
    // https://stackoverflow.com/questions/47789347/open-link-in-new-tab-in-react-router-programmatically?rq=1
    if (!url) {
        return;
    }
    const win = window.open(url, "_blank");
    win.focus();
}

export default function PartnerCard(props: Props) {
    const { partnerLink, ...passthrough } = props;
    return (
        <StyledCard
            key={partnerLink.label}
            hover
            level={1}
            onClick={() => {
                onPartnerClick(partnerLink.url);
            }}
            {...passthrough}
        >
            <img src={partnerLink.logoUrl} style={{ width: "100%" }} alt="" />
        </StyledCard>
    );
}

PartnerCard.defaultProps = {
    className: ""
};
