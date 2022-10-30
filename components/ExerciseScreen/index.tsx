import { useAppSelector } from "../../hooks/useAppSelector";
import { Container } from "./elements/Container";

const ExerciseScreen = () => {
    const theme = useAppSelector((state) => state.main.theme);

    return <Container exerciseTheme={theme}>ExerciseScreen</Container>;
};

export default ExerciseScreen;
