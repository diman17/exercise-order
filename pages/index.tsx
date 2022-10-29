import Head from "next/head";
import WelcomeScreen from "../components/WelcomeScreen";

const Home = () => {
    return (
        <>
            <Head>
                <title>Exercise Order</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <WelcomeScreen />
        </>
    );
};

export default Home;
