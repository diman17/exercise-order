import styled from "@emotion/styled";

type InputContainerProps = {
    width: string;
};

export const InputContainer = styled("div")<InputContainerProps>`
    width: ${(props) => props.width};

    margin-bottom: 53px;

    &:last-of-type {
        margin-bottom: 72px;
    }
`;
