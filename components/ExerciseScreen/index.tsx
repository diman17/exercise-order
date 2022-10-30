import { useAppSelector } from "../../hooks/useAppSelector";
import { Container } from "./elements/Container";
import { Item } from "./elements/Item";
import { ItemsList } from "./elements/ItemList";

const ExerciseScreen = () => {
    const theme = useAppSelector((state) => state.main.theme);
    const quantity = useAppSelector((state) => state.main.quantity);
    const items = useAppSelector((state) => state.main.items);

    return (
        <Container exerciseTheme={theme}>
            <ItemsList quantity={quantity} exerciseTheme={theme}>
                {items.map((item) => (
                    <Item key={item} exerciseTheme={theme}>
                        {item}
                    </Item>
                ))}
            </ItemsList>
        </Container>
    );
};

export default ExerciseScreen;
