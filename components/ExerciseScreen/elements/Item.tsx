import styled from "@emotion/styled";
import { COLORS, EXERCISE_THEMES } from "../../../styles/constants";
import { generateRandomInteger } from "../../../utils";

type ItemProps = {
    exerciseTheme: number;
};

export const Item = styled("li")<ItemProps>`
    position: relative;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 180px;
    height: 180px;

    margin: 0;
    padding: 0;

    font-size: 3.5rem;
    letter-spacing: 0.125rem;
    color: ${COLORS.white};

    text-shadow: 3px 0 ${COLORS.ebonyClay}, -3px 0 ${COLORS.ebonyClay}, 0 3px ${COLORS.ebonyClay},
        0 -3px ${COLORS.ebonyClay}, 2px 2px ${COLORS.ebonyClay}, -2px -2px ${COLORS.ebonyClay},
        2px -2px ${COLORS.ebonyClay}, -2px 2px ${COLORS.ebonyClay};

    background-image: url(${(props) =>
        EXERCISE_THEMES[props.exerciseTheme].itemImages[
            generateRandomInteger(0, EXERCISE_THEMES[props.exerciseTheme].itemImages.length - 1)
        ]});
    background-repeat: no-repeat;
    background-position: 50% 50%;

    list-style-type: none;
`;
