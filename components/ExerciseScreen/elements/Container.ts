import styled from "@emotion/styled";
import { EXERCISE_THEMES } from "../../../styles/constants";

type ContainerProps = {
    exerciseTheme: number;
};

export const Container = styled("div")<ContainerProps>`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 980px;
    height: 810px;

    padding: 30px 45px;

    ${(props) => EXERCISE_THEMES[props.exerciseTheme].background};

    overflow: hidden;
`;
