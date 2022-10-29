import type { AppProps } from "next/app";
import { Global, css } from '@emotion/react'
import globalCSS from "../styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Global styles={css(globalCSS)} />
            <Component {...pageProps} />
        </>
    );
};

export default App;
