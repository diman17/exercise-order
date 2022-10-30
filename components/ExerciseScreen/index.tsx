import { useAppSelector } from "../../hooks/useAppSelector";
import { Arrow } from "./elements/Arrow";
import { Board } from "./elements/Board";
import { Container } from "./elements/Container";
import { Item } from "./elements/Item";
import { ItemsList } from "./elements/ItemList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragItem from "./DragItem";
import DropArea from "./DropArea";
import { EXERCISE_THEMES } from "../../styles/constants";
import { generateRandomInteger } from "../../utils";

const ExerciseScreen = () => {
    const theme = useAppSelector((state) => state.main.theme);
    const quantity = useAppSelector((state) => state.main.quantity);
    const items = useAppSelector((state) => state.main.items);
    const mode = useAppSelector((state) => state.main.mode);

    return (
        <Container exerciseTheme={theme}>
            <DndProvider backend={HTML5Backend}>
                <ItemsList quantity={quantity} exerciseTheme={theme}>
                    {items.map((item) => {
                        const bgImage =
                            EXERCISE_THEMES[theme].itemImages[
                                generateRandomInteger(
                                    0,
                                    EXERCISE_THEMES[theme].itemImages.length - 1
                                )
                            ];
                        return (
                            <Item key={item} bgImage={bgImage}>
                                <DragItem value={item} bgImage={bgImage}>
                                    {item}
                                </DragItem>
                            </Item>
                        );
                    })}
                </ItemsList>
                <Arrow mode={mode}>
                    <span>{mode === "asc" ? "По возрастанию" : "По убыванию"}</span>
                </Arrow>
                <Board exerciseTheme={theme} mode={mode}>
                    <DropArea />
                </Board>
            </DndProvider>
        </Container>
    );
};

export default ExerciseScreen;
