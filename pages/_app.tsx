import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";
import globalCSS from "../styles/global.css";
import { Provider } from "react-redux";
import { store } from "../store";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <Global styles={css(globalCSS)} />
            <Component {...pageProps} />
        </Provider>
    );
};

export default App;
