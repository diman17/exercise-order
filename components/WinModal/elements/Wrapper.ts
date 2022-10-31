import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

    padding: 20px 20px 30px 20px;

    background: radial-gradient(384.16% 384.16% at 50% 50%, #ffffff 12.29%, #aa92d2 21.15%);
    border-radius: 40px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);

    &::before,
    &::after {
        content: "";
        position: absolute;

        background-image: url("/star.svg");
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;

        transform: rotate(-20deg);
    }

    &::before {
        bottom: -10px;
        right: -55px;

        width: 120px;
        height: 120px;
    }

    &::after {
        top: -30px;
        left: -45px;

        width: 145px;
        height: 145px;
    }
`;
