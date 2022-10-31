import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { QUANTITY_SCALE, VALUES_SCALE } from "../../constants";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Fieldset } from "./elements/Fieldset";
import { InputContainer } from "./elements/InputContainer";
import { InputRange } from "./elements/InputRange";
import { LabelRange } from "./elements/LabelRange";
import { Scale } from "./elements/Scale";

type SettingsProps = {
    quantity: string;
    setQuantity: Dispatch<SetStateAction<string>>;
    values: string;
    setValues: Dispatch<SetStateAction<string>>;
};

const Settings = ({ quantity, setQuantity, values, setValues }: SettingsProps) => {
    const [audio, setAuduo] = useState<HTMLAudioElement>();

    const isSoundOn = useAppSelector((state) => state.main.isSoundOn);

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

    const onQuantityChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setQuantity(value);
        playSound();
    };

    const onValuesChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setValues(
            `${
                Object.values(VALUES_SCALE)
                    .sort((a, b) => +b - +a)
                    .reverse()[+value - 1]
            }`
        );
        playSound();
    };

    return (
        <Fieldset column>
            <legend className="visually-hidden">Settings</legend>
            <LabelRange htmlFor="quantity">Кол-во предметов</LabelRange>
            <InputContainer width="70%">
                <Scale>
                    {QUANTITY_SCALE.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </Scale>
                <InputRange
                    onChange={onQuantityChange}
                    type="range"
                    id="quantity"
                    name="quantity"
                    min={2}
                    max={QUANTITY_SCALE.length + 1}
                    defaultValue={quantity}
                />
            </InputContainer>
            <LabelRange htmlFor="values">Значения</LabelRange>
            <InputContainer width="100%">
                <Scale left={15}>
                    {Object.values(VALUES_SCALE)
                        .sort((a, b) => +b - +a)
                        .reverse()
                        .map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                </Scale>
                <InputRange
                    onChange={onValuesChange}
                    type="range"
                    id="values"
                    name="values"
                    min={1}
                    max={Object.values(VALUES_SCALE).length}
                    defaultValue={
                        Object.values(VALUES_SCALE)
                            .sort((a, b) => +b - +a)
                            .reverse()
                            .indexOf(values) + 1
                    }
                />
            </InputContainer>
        </Fieldset>
    );
};

export default Settings;
