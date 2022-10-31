import styled from "@emotion/styled";

export const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 5;

    width: 660px;
    height: 520px;

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

    transform: translate(-50%, -50%);

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
