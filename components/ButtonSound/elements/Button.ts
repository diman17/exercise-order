import styled from "@emotion/styled";

type ButtonProps = {
    isSoundOn: boolean;
};

export const Button = styled("button")<ButtonProps>`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;

    width: 70px;
    height: 70px;

    background: transparent;
    background-image: url("/sound.png");
    background-repeat: no-repeat;
    background-position: ${(props) => (props.isSoundOn ? "100%" : "0")} 50%;
    background-size: cover;

    border: none;

    cursor: pointer;
`;
