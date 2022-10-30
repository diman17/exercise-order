import styled from "@emotion/styled";
import { COLORS } from "../../../styles/constants";

type ContainerProps = {
    mode: string;
};

export const Arrow = styled("div")<ContainerProps>`
    position: absolute;
    bottom: 35%;

    display: flex;
    justify-content: flex-start;
    align-self: ${(props) => (props.mode === "asc" ? "start" : "end")};

    font-size: 2.25rem;
    color: ${COLORS.white};

    text-shadow: 3px 0 ${COLORS.ebonyClay}, -3px 0 ${COLORS.ebonyClay}, 0 3px ${COLORS.ebonyClay},
        0 -3px ${COLORS.ebonyClay}, 2px 2px ${COLORS.ebonyClay}, -2px -2px ${COLORS.ebonyClay},
        2px -2px ${COLORS.ebonyClay}, -2px 2px ${COLORS.ebonyClay};

    &::after {
        content: "";

        position: absolute;
        top: -10px;
        left: ${(props) => (props.mode === "asc" ? "-15px" : "-100px")};

        width: 358px;
        height: 69px;

        background-image: url("/arrow.svg");

        transform: ${(props) => (props.mode === "asc" ? "" : "scaleX(-1)")};
    }

    & > span {
        position: relative;
        z-index: 1;
    }
`;
