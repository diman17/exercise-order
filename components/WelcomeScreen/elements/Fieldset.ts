import styled from "@emotion/styled";

type FieldsetProps = {
    column?: boolean;
};

export const Fieldset = styled("fieldset")<FieldsetProps>`
    display: flex;
    flex-direction: ${(props) => (props.column ? "column" : "row")};
    align-items: center;

    width: 100%;

    margin: 0;
    padding: 0;

    border: none;

    &:last-of-type {
        margin-bottom: 6rem;
    }
`;
