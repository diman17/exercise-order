import styled from "@emotion/styled";

type OuterProps = {
    isModalShown: boolean;
};

export const Outer = styled("div")<OuterProps>`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 5;

    width: 660px;
    height: 520px;

    transform: translate(-50%, -50%);

    transition: all 0.3s;

    visibility: ${(props) => (props.isModalShown ? "visible" : "hidden")};

    perspective: 1300px;
`;
