import { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { useAppSelector } from "../../hooks/useAppSelector";

type DragItemProps = {
    children: string;
    value: string;
    bgImage: string;
};

const DragItem = ({ children, value, bgImage }: DragItemProps) => {
    const [audio, setAuduo] = useState<HTMLAudioElement>();

    const isSoundOn = useAppSelector((state) => state.main.isSoundOn);

    useEffect(() => {
        setAuduo(new Audio("/sounds/take.mp3"));
    }, []);

    const playSound = () => {
        if (audio) {
            if (isSoundOn) {
                audio.currentTime = 0;
                audio.play();
            }
        }
    };

    const [, drag] = useDrag(
        () => ({
            type: "item",
            item: { value, bgImage },
            collect(monitor) {
                if (monitor.isDragging()) {
                    if (!monitor.didDrop()) {
                        playSound();
                    }
                }
            },
        }),
        [audio, isSoundOn]
    );

    return <span ref={drag}>{children}</span>;
};

export default DragItem;
