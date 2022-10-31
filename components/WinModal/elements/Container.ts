import styled from "@emotion/styled";

type ContainerProps = {
    isModalShown: boolean;
};

export const Container = styled("div")<ContainerProps>`
    padding: 20px;

    background: linear-gradient(
        0deg,
        rgba(141, 103, 223, 0) 0%,
        rgba(132, 130, 204, 0) 10%,
        rgba(126, 149, 190, 0.3) 20%,
        rgba(120, 168, 176, 0.8) 60%,
        rgba(103, 223, 137, 1) 90%,
        rgba(103, 223, 137, 1) 100%
    );

    border-radius: 40px;

    transform-style: preserve-3d;
    transform: ${(props) =>
        props.isModalShown ? "translateZ(0px) rotateX(0deg)" : "translateZ(600px) rotateX(20deg)"};

    transition: all 0.3s ease-in;

    opacity: ${(props) => (props.isModalShown ? "1" : "0")};

    &::before,
    &::after {
        content: "";
        position: absolute;

        width: 230px;
        height: 230px;

        background-image: url("/star.svg");
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;

        transform: rotate(-20deg);
    }

    &::before {
        bottom: -35px;
        left: -105px;
    }

    &::after {
        top: 70px;
        right: -95px;
    }
`;
