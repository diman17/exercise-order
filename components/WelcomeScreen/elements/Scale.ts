import styled from "@emotion/styled";
import { COLORS } from "../../../styles/constants";

type ScaleProps = {
    left?: number;
};

export const Scale = styled("div")<ScaleProps>`
    display: flex;
    justify-content: space-between;

    width: 100%;

    margin-bottom: 0.125rem;

    font-size: 1.5rem;
    font-weight: 700;
    color: ${COLORS.shipGray};

    & > span:not(:first-of-type):not(:last-of-type) {
    position: relative;
    left: ${props => props.left ? `${props.left}px` : '0'};
`;
