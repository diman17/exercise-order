import styled from "@emotion/styled";
import { COLORS } from "../../../styles/constants";

export const Button = styled.button`
    padding: 0.5rem 4.125rem;
    margin-top: auto;

    font-family: Circe Rounded Alt;
    font-weight: 400;
    font-size: 2.5rem;
    color: ${COLORS.white};

    background: ${COLORS.harlequin};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 1.25rem;
    border: none;

    cursor: pointer;

    transition: all 200ms ease-out;

    &:hover {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    }

    &:active {
        box-shadow: inset 1px 1px 5px -1px;
    }
`;
