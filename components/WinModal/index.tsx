import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { finishExercise, hideModal } from "../../store/slices/main";
import { Button } from "./elements/Button";
import { Container } from "./elements/Container";
import { Message } from "./elements/Message";
import { Outer } from "./elements/Outer";
import { Title } from "./elements/Title";
import { Wrapper } from "./elements/Wrapper";

const WinModal = () => {
    const dispatch = useAppDispatch();
    const isModalShown = useAppSelector((state) => state.main.isModalShown);
    const isSoundOn = useAppSelector((state) => state.main.isSoundOn);

    const [audio, setAuduo] = useState<HTMLAudioElement>();

    useEffect(() => {
        setAuduo(new Audio("/sounds/beep.mp3"));
    }, []);

    const playSound = () => {
        if (audio) {
            if (isSoundOn) {
                audio.currentTime = 0;
                audio.play();
            }
        }
    };

    const onButtonClick = () => {
        dispatch(finishExercise());
        dispatch(hideModal());
        playSound();
    };

    return (
        <Outer isModalShown={isModalShown}>
            <Container isModalShown={isModalShown}>
                <Wrapper>
                    <Title>Победа!</Title>
                    <Message>Молодец! Ты успешно справился с заданием!</Message>
                    <Button onClick={onButtonClick} type="button">
                        Заново
                    </Button>
                </Wrapper>
            </Container>
        </Outer>
    );
};

export default WinModal;
