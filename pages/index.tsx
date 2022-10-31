import Head from "next/head";
import ButtonSound from "../components/ButtonSound";
import ExerciseScreen from "../components/ExerciseScreen";
import Overlay from "../components/Overlay";
import PageWrapper from "../components/PageWrapper";
import WelcomeScreen from "../components/WelcomeScreen";
import WinModal from "../components/WinModal";
import { useAppSelector } from "../hooks/useAppSelector";

const Home = () => {
    const isExerciseStarted = useAppSelector((state) => state.main.isExerciseStarted);

    const renderScreen = () => {
        if (isExerciseStarted) {
            return <ExerciseScreen />;
        } else {
            return <WelcomeScreen />;
        }
    };
    return (
        <>
            <Head>
                <title>Exercise Order</title>
                <link rel="icon" href="/favicon.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <PageWrapper>
                <ButtonSound />
                {renderScreen()}
                <WinModal />
                <Overlay />
            </PageWrapper>
        </>
    );
};

export default Home;
