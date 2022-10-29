import styled from "@emotion/styled";
import { COLORS } from "../../../styles/constants";

export const InputRange = styled.input`
width: 100%;

margin: 0;
padding: 0;

-webkit-appearance: none;

&::-webkit-slider-runnable-track {
    height: 1.5rem;

    background: ${COLORS.brightSun};
    border-radius: 0.625rem;

    cursor: pointer;
}

&::-webkit-slider-thumb {
    width: 1.5rem;
    height: 1.5rem;

    border-radius: 50%;
    background: ${COLORS.chathamsBlue};

    cursor: pointer;

    -webkit-appearance: none;
}
`;
