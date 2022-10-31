import { useAppDispatch } from "../../hooks/useAppDispatch";
import { finishExercise, hideModal } from "../../store/slices/main";
import { Button } from "./elements/Button";
import { Container } from "./elements/Container";
import { Message } from "./elements/Message";
import { Title } from "./elements/Title";
import { Wrapper } from "./elements/Wrapper";

const WinModal = () => {
    const dispatch = useAppDispatch();

    const onButtonClick = () => {
        dispatch(finishExercise());
        dispatch(hideModal());
    };

    return (
        <Container>
            <Wrapper>
                <Title>Победа!</Title>
                <Message>Молодец! Ты успешно справился с заданием!</Message>
                <Button onClick={onButtonClick} type="button">
                    Заново
                </Button>
            </Wrapper>
        </Container>
    );
};

export default WinModal;
