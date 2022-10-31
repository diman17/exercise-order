import styled from "@emotion/styled";
import { COLORS } from "../../../styles/constants";

export const InputRadio = styled.input`
    display: none;

    & + label {
        padding: 0.125rem 1.375rem;

        font-size: 2rem;
        font-weight: 700;
        color: ${COLORS.shipGray};
        text-align: center;

        border-radius: 1.25rem;
        background: ${COLORS.brightSun};

        cursor: pointer;

        opacity: 0.56;

        transition: all 200ms ease-out;

        &:hover {
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        }

        &:active {
            box-shadow: inset 1px 1px 5px -1px;
        }
    }

    & + label:first-of-type {
        margin-right: 2rem;
    }

    &:checked + label {
        opacity: 1;
    }
`;
