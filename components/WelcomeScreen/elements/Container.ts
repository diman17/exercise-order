import styled from "@emotion/styled";
import { COLORS } from "../../../styles/constants";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 980px;
    height: 810px;

    padding: 2rem;

    background-image: url("/bg-welcome.jpg");
    background-size: cover;

    border-radius: 50px;
    box-shadow: 0 0 15px 5px ${COLORS.shipGray};
`;
