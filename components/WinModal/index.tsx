import { Button } from "./elements/Button";
import { Container } from "./elements/Container";
import { Message } from "./elements/Message";
import { Title } from "./elements/Title";
import { Wrapper } from "./elements/Wrapper";

const WinModal = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Победа!</Title>
                <Message>Молодец! Ты успешно справился с заданием!</Message>
                <Button type="button">Заново</Button>
            </Wrapper>
        </Container>
    );
};

export default WinModal;
