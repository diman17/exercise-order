import styled from "@emotion/styled";
import { EXERCISE_THEMES } from "../../../styles/constants";

type BoardProps = {
    exerciseTheme: number;
};

export const Board = styled("div")<BoardProps>`
    position: relative;
    z-index: 1;

    display: flex;

    margin-top: auto;

    width: 890px;
    height: 225px;

    background-image: url("${(props) => EXERCISE_THEMES[props.exerciseTheme].board}");
    background-repeat: no-repeat;
    background-position: 50% 50%;

    overflow: hidden;
`;
