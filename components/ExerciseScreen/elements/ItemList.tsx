import styled from "@emotion/styled";
import { ITEMS_LIST_LAYOUT } from "../../../styles/constants";

type ItemsListProps = {
    quantity: string;
    exerciseTheme: number;
};

export const ItemsList = styled("ul")<ItemsListProps>`
    display: flex;
    justify-content: center;

    width: 100%;
    height: 40%;

    margin: 0;
    padding: 0;

    ${(props) =>
        ITEMS_LIST_LAYOUT(props.exerciseTheme)[props.quantity as keyof typeof ITEMS_LIST_LAYOUT]};
`;
