// @flow

// node_modules
import React, { Fragment } from "react";
import styled from "styled-components";
import * as FontAwesome from "react-icons/fa";

// Constants
import { DownloadableFiles, Wallets } from "Base/Constants";
import type { Wallet } from "Base/Constants";

// Components
import Button from "Atoms/Button";
import SectionItem from "Atoms/SectionItem";
import Section from "Molecules/Section";
import ArrowHeading from "Molecules/ArrowHeading";
import { NormalHeading } from "Atoms/Heading";
import { NormalText } from "Atoms/Text";

// Styles
import WalletContainerStyle from "./WalletContainer.style";
import WalletHeadingStyle from "./WalletHeading.style";
import DownloadButtonStyle from "./DownloadButton.style";
import OlderVersionsLabelStyle from "./OlderVersionsLabel.style";
import OlderVersionLinkStyle from "./OlderVersionLink.style";
import OlderVersionLinkTextStyle from "./OlderVersionLinkText.style";
import ContainerStyle from "./Container.style";

const Container = styled(Section)`
    ${ContainerStyle};
`;

const DownloadButton = styled(Button)`
    ${DownloadButtonStyle};
`;

const OlderVersionsLabel = styled(NormalText)`
    ${OlderVersionsLabelStyle};
`;

const OlderVersionLink = styled.a`
    ${OlderVersionLinkStyle};
`;

const OlderVersionLinkText = styled(NormalText)`
    ${OlderVersionLinkTextStyle};
`;

const WalletContainer = styled(SectionItem)`
    ${WalletContainerStyle};
`;

const WalletHeading = styled(NormalHeading)`
    ${WalletHeadingStyle};
`;

function WalletsSection(props: {}) {
    return (
        <div {...props}>
            <ArrowHeading text="Wallet Software" align="left" />
            {Wallets.map((WalletGroup, i) => (
                <Container key={i}>
                    {WalletGroup.map((WalletItem: Wallet) => {
                        const Icon = FontAwesome[WalletItem.iconName];
                        return (
                            <WalletContainer key={WalletItem.name}>
                                <WalletHeading align="center">{WalletItem.name}</WalletHeading>
                                <Icon style={{ alignSelf: "center" }} color="white" size={150} />
                                {WalletItem.file && (
                                    <DownloadButton
                                        externalLink
                                        href={DownloadableFiles.windowsWallet.currentLink.url}
                                        text={WalletItem.file.currentLink.label}
                                    />
                                )}
                                {!WalletItem.file && (
                                    <NormalText style={{ marginTop: "48px", textAlign: "center" }}>
                                        Coming Soon
                                    </NormalText>
                                )}
                                {WalletItem.file &&
                                    WalletItem.file.olderLinks.length > 0 && (
                                        <Fragment>
                                            <OlderVersionsLabel>Older Versions</OlderVersionsLabel>
                                            {WalletItem.file.olderLinks.map(oldLink => (
                                                <OlderVersionLink key={oldLink.url} href={oldLink.url}>
                                                    <OlderVersionLinkText>{oldLink.label}</OlderVersionLinkText>
                                                </OlderVersionLink>
                                            ))}
                                        </Fragment>
                                    )}
                            </WalletContainer>
                        );
                    })}
                </Container>
            ))}
        </div>
    );
}

export default WalletsSection;
