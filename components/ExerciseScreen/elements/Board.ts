import styled from "@emotion/styled";
import { EXERCISE_THEMES } from "../../../styles/constants";

type BoardProps = {
    exerciseTheme: number;
    mode: string;
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

    & > div {
        display: flex;
        align-items: center;
        flex-direction: ${(props) => (props.mode === "asc" ? "row" : "row-reverse")};

        padding: 20px 35px;

        width: 100%;
        height: 100%;
    }

    & > div > li > span {
        width: 120px;
        height: 120px;

        margin-right: 15px;

        background-size: cover;
    }
`;
