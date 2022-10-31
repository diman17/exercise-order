import Mode from "./Mode";
import Settings from "./Settings";
import { Button } from "./elements/Button";
import { Container } from "./elements/Container";
import { Form } from "./elements/Form";
import { Wrapper } from "./elements/Wrapper";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
    setItems,
    setModeInStore,
    setQuantityInStore,
    setTheme,
    setValuesInStore,
    startExercise,
} from "../../store/slices/main";
import { createItems } from "../../utils";

const WelcomeScreen = () => {
    const dispatch = useAppDispatch();

    const initialQuantity = useAppSelector((state) => state.main.quantity);
    const initialValues = useAppSelector((state) => state.main.values);
    const initialMode = useAppSelector((state) => state.main.mode);
    const isSoundOn = useAppSelector((state) => state.main.isSoundOn);

    const [quantity, setQuantity] = useState(initialQuantity);
    const [values, setValues] = useState(initialValues);
    const [mode, setMode] = useState(initialMode);
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
        dispatch(setQuantityInStore(quantity));
        dispatch(setValuesInStore(values));
        dispatch(setModeInStore(mode));
        dispatch(setItems(createItems(quantity, values)));
        dispatch(startExercise());
        dispatch(setTheme());
        playSound();
    };

    return (
        <Container>
            <Wrapper>
                <Form>
                    <Settings
                        quantity={quantity}
                        setQuantity={setQuantity}
                        values={values}
                        setValues={setValues}
                    />
                    <Mode setMode={setMode} />
                    <Button onClick={onButtonClick} type="button">
                        Играть
                    </Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default WelcomeScreen;
