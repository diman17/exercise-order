import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Fieldset } from "./elements/Fieldset";
import { InputRadio } from "./elements/InputRadio";

type ModeProps = {
    setMode: Dispatch<SetStateAction<string>>;
};

const Mode = ({ setMode }: ModeProps) => {
    const mode = useAppSelector((state) => state.main.mode);
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

    const onModeChange = (event: ChangeEvent<unknown>) => {
        const target = event.target as HTMLInputElement;
        setMode(target.value);
        playSound();
    };

    return (
        <Fieldset onChange={onModeChange}>
            <legend className="visually-hidden">Mode</legend>
            <InputRadio
                type="radio"
                id="asc"
                name="mode"
                value="asc"
                defaultChecked={mode === "asc"}
            />
            <label htmlFor="asc">По возрастанию</label>
            <InputRadio
                type="radio"
                id="desc"
                name="mode"
                value="desc"
                defaultChecked={mode === "desc"}
            />
            <label htmlFor="desc">По убыванию</label>
        </Fieldset>
    );
};

export default Mode;
