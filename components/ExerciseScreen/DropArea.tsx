import { useState } from "react";
import { useDrop } from "react-dnd";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { finishExercise } from "../../store/slices/main";
import { Item } from "./elements/Item";

type Item = {
    value: string;
    bgImage: string;
};

type DropAreaProps = {
    items: string[];
    mode: string;
};

const DropArea = ({ items, mode }: DropAreaProps) => {
    const [board, setBoard] = useState<Item[]>([]);

    const dispatch = useAppDispatch()

    const [, drop] = useDrop(
        () => ({
            accept: "item",
            drop: (item: Item) => {
                const updateBoard = [...board];

                let sortBoard = [""];

                if (mode === "asc") {
                    sortBoard = [...items].sort();
                }
                if (mode === "desc") {
                    sortBoard = [...items].sort().reverse();
                }

                if (item.value === sortBoard[updateBoard.length]) {
                    updateBoard.push(item);
                    setBoard(updateBoard);
                }

                if (items.length === updateBoard.length) {
                    dispatch(finishExercise())
                }
            },
        }),
        [board]
    );

    return (
        <div ref={drop}>
            {board.map((item, i) => {
                return (
                    <Item key={i} bgImage={item.bgImage}>
                        <span>{item.value}</span>
                    </Item>
                );
            })}
        </div>
    );
};

export default DropArea;
