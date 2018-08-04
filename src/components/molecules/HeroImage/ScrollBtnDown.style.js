// @flow

// node_modules
import { css, keyframes } from "styled-components";
import { prop } from "styled-tools";

// Constants
import { ThemeProps } from "Base/MainTheme";
import { Depths, Measurements } from "Base/Constants";

const float = keyframes`
    0% {
		transform: translatey(0px);
	}
    50% {
		transform: translatey(20px);
    }
	100% {
		transform: translatey(0px);
	}
`;

export default css`
animation: ${float} 2s ease-in-out infinite
    cursor: pointer;
    color: ${prop(ThemeProps.white)};
    z-index: ${Depths.high};
    position: absolute;
    bottom: ${Measurements.basePadding};
    width: 100%;
`;
