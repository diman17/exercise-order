import React from "react";
import { Container } from "./elements/Container";

type PageWrapperProps = {
    children: JSX.Element[];
};

const PageWrapper = ({ children }: PageWrapperProps) => {
    return <Container>{children}</Container>;
};

export default PageWrapper;
