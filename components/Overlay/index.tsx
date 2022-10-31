import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Container } from "./elements/Container";

const Overlay = () => {
    const isModalShown = useAppSelector((state) => state.main.isModalShown);

    return <Container isModalShown={isModalShown}></Container>;
};

export default Overlay;
