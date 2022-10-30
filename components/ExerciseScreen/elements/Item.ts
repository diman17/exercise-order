import styled from "@emotion/styled";
import { COLORS } from "../../../styles/constants";

type ItemProps = {
    bgImage: string;
};

export const Item = styled("li")<ItemProps>`
    position: relative;

    margin: 0;
    padding: 0;

    font-size: 3.5rem;
    letter-spacing: 0.125rem;
    color: ${COLORS.white};

    text-shadow: 3px 0 ${COLORS.ebonyClay}, -3px 0 ${COLORS.ebonyClay}, 0 3px ${COLORS.ebonyClay},
        0 -3px ${COLORS.ebonyClay}, 2px 2px ${COLORS.ebonyClay}, -2px -2px ${COLORS.ebonyClay},
        2px -2px ${COLORS.ebonyClay}, -2px 2px ${COLORS.ebonyClay};

    list-style-type: none;

    & > span {
        position: relative;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 180px;
        height: 180px;

        background-image: url(${(props) => props.bgImage});
        background-repeat: no-repeat;
        background-position: 50% 50%;

        cursor: grab;
    }
`;
