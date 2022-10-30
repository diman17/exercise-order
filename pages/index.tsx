import Head from "next/head";
import ExerciseScreen from "../components/ExerciseScreen";
import WelcomeScreen from "../components/WelcomeScreen";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

const Home = () => {
    const isExerciseStart = useAppSelector((state) => state.main.isExerciseStart);

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
        </>
    );
};

export default Home;
