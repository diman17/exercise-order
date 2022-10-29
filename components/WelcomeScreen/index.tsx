import Mode from "./Mode";
import Settings from "./Settings";
import { Button } from "./elements/Button";
import { Container } from "./elements/Container";
import { Form } from "./elements/Form";
import { Wrapper } from "./elements/Wrapper";

const WelcomeScreen = () => {
    return (
        <Container>
            <Wrapper>
                <Form>
                    <Settings />
                    <Mode />
                    <Button type="button">Играть</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default WelcomeScreen;
