import Head from "next/head";
import ButtonSound from "../components/ButtonSound";
import ExerciseScreen from "../components/ExerciseScreen";
import Overlay from "../components/Overlay";
import { Container } from "../components/PageWrapper/elements/Container";
import WelcomeScreen from "../components/WelcomeScreen";
import WinModal from "../components/WinModal";
import { useAppSelector } from "../hooks/useAppSelector";

const Home = () => {
    const isExerciseStarted = useAppSelector((state) => state.main.isExerciseStarted);
    const isModalShown = useAppSelector((state) => state.main.isModalShown);

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
            </Head>
            <Container>
                <ButtonSound />
                {renderScreen()}
                {isModalShown && (
                    <>
                        <WinModal />
                        <Overlay />
                    </>
                )}
            </Container>
        </>
    );
};

export default Home;
