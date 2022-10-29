import styled from "@emotion/styled";
import { COLORS } from "../../../styles/constants";

export const Button = styled.button`
    padding: 0.5rem 4.75rem;

    font-family: Helvetica;
    font-weight: 400;
    font-size: 2rem;
    color: ${COLORS.white};

    background: ${COLORS.cornflowerBlue};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
    border-radius: 1.25rem;
    border: none;

    cursor: pointer;
`;
