import styled from "@emotion/styled";
import { COLORS, EXERCISE_THEMES } from "../../../styles/constants";

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

    border-radius: 50px;
    box-shadow: 0 0 15px 5px ${COLORS.shipGray};

    overflow: hidden;
`;
