import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { turnOffSound, turnOnSound } from "../../store/slices/main";
import { Button } from "./elements/Button";

const ButtonSound = () => {
    const dispatch = useAppDispatch();
    const isSoundOn = useAppSelector((state) => state.main.isSoundOn);

    const [audio, setAudio] = useState<HTMLAudioElement>();

    useEffect(() => {
        setAudio(new Audio("/sounds/music.mp3"));
    }, []);

    const onButtonClick = () => {
        if (audio) {
            audio.loop = true;
            audio.volume = 0.1;
            if (isSoundOn) {
                dispatch(turnOffSound());
                audio.pause();
            } else {
                dispatch(turnOnSound());
                audio.play();
            }
        }
    };

    return <Button onClick={onButtonClick} isSoundOn={isSoundOn} type="button"></Button>;
};

export default ButtonSound;
