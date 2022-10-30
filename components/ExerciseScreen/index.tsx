import { useAppSelector } from "../../hooks/useAppSelector";
import { Arrow } from "./elements/Arrow";
import { Board } from "./elements/Board";
import { Container } from "./elements/Container";
import { Item } from "./elements/Item";
import { ItemsList } from "./elements/ItemList";

const ExerciseScreen = () => {
    const theme = useAppSelector((state) => state.main.theme);
    const quantity = useAppSelector((state) => state.main.quantity);
    const items = useAppSelector((state) => state.main.items);
    const mode = useAppSelector((state) => state.main.mode);

    return (
        <Container exerciseTheme={theme}>
            <ItemsList quantity={quantity} exerciseTheme={theme}>
                {items.map((item) => (
                    <Item key={item} exerciseTheme={theme}>
                        {item}
                    </Item>
                ))}
            </ItemsList>
            <Arrow mode={mode}>
                <span>{mode === "asc" ? "По возрастанию" : "По убыванию"}</span>
            </Arrow>
            <Board exerciseTheme={theme} />
        </Container>
    );
};

export default ExerciseScreen;
