import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { showModal } from "../../store/slices/main";
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
    const [audioCorrect, setAudioCorrect] = useState<HTMLAudioElement>();
    const [audioWrong, setAudioWrong] = useState<HTMLAudioElement>();
    const [audioVictory, setAudioVictory] = useState<HTMLAudioElement>();

    const dispatch = useAppDispatch();
    const isSoundOn = useAppSelector((state) => state.main.isSoundOn);

    useEffect(() => {
        setAudioCorrect(new Audio("/sounds/correct.mp3"));
        setAudioWrong(new Audio("/sounds/wrong.mp3"));
        setAudioVictory(new Audio("/sounds/victory.mp3"));
    }, []);

    const playSound = (audio: HTMLAudioElement) => {
        if (isSoundOn) {
            audio.currentTime = 0;
            audio.play();
        }
    };

    const [, drop] = useDrop(
        () => ({
            accept: "item",
            drop: (item: Item) => {
                const updateBoard = [...board];

                let sortBoard = [""];

                if (mode === "asc")
                    sortBoard = [...items].sort((a, b) => new Intl.Collator().compare(a, b));

                if (mode === "desc")
                    sortBoard = [...items]
                        .sort((a, b) => new Intl.Collator().compare(a, b))
                        .reverse();

                if (item.value === sortBoard[updateBoard.length]) {
                    updateBoard.push(item);
                    setBoard(updateBoard);
                    if (audioCorrect) playSound(audioCorrect);
                } else {
                    if (audioWrong) playSound(audioWrong);
                }

                if (items.length === updateBoard.length) {
                    setTimeout(() => {
                        dispatch(showModal());
                        if (audioVictory) playSound(audioVictory);
                    }, 700);
                }
            },
        }),
        [board, audioWrong, audioCorrect, isSoundOn]
    );

    return (
        <ul ref={drop}>
            {board.map((item, i) => {
                return (
                    <Item key={i} bgImage={item.bgImage}>
                        <span>{item.value}</span>
                    </Item>
                );
            })}
        </ul>
    );
};

export default DropArea;
