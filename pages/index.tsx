import Head from "next/head";
import ExerciseScreen from "../components/ExerciseScreen";
import Overlay from "../components/Overlay";
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
            {renderScreen()}
            {isModalShown && (
                <>
                    <WinModal />
                    <Overlay />
                </>
            )}
        </>
    );
};

export default Home;
