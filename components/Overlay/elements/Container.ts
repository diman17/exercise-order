import styled from "@emotion/styled";

type ContainerProps = {
    isModalShown: boolean;
};

export const Container = styled("div")<ContainerProps>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;

    width: 100vw;
    height: 100vh;

    background-color: rgba(32, 21, 54, 0.6);

    visibility: ${(props) => (props.isModalShown ? "visible" : "hidden")};
    opacity: ${(props) => (props.isModalShown ? "1" : "0")};

    transition: all 0.3s;
`;
