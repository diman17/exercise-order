import { useState } from "react";
import { useDrop } from "react-dnd";
import { Item } from "./elements/Item";

type Item = {
    value: string;
    bgImage: string;
};

const DropArea = () => {
    const [board, setBoard] = useState<Item[]>([]);

    const [, drop] = useDrop(
        () => ({
            accept: "item",
            drop: (item: Item, monitor) => {
                const updateBoard = [...board];
                updateBoard.push(item);
                setBoard(updateBoard);
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
