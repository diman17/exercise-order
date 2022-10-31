import Head from "next/head";
import ExerciseScreen from "../components/ExerciseScreen";
import Overlay from "../components/Overlay";
import WelcomeScreen from "../components/WelcomeScreen";
import WinModal from "../components/WinModal";
import { useAppSelector } from "../hooks/useAppSelector";

const Home = () => {
    const isExerciseStart = useAppSelector((state) => state.main.isExerciseStart);
    const isExerciseFinish = useAppSelector((state) => state.main.isExerciseFinish);

    const renderScreen = () => {
        if (isExerciseStart) {
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
            {isExerciseFinish && (
                <>
                    <WinModal />
                    <Overlay />
                </>
            )}
        </>
    );
};

export default Home;
