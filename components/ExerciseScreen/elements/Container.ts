import styled from "@emotion/styled";
import { EXERCISE_BACKGROUNDS } from "../../../styles/constants";

type ContainerProps = {
    exerciseTheme: number;
};

export const Container = styled("div")<ContainerProps>`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 980px;
    height: 810px;

    ${(props) => EXERCISE_BACKGROUNDS[props.exerciseTheme]};

    overflow: hidden;
`;
