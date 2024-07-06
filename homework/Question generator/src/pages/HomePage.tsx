import { useState } from "react";
import GenerateQuestion from "../components/GenerateQuestion";
import QuestionList from "../components/QuestionList";
import { Question } from "../questions";
import styles from "./HomePage.module.css";
const HomePage = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  return (
    <div id={styles.Home}>
      <div>
        <GenerateQuestion setCurrentQuestion={setCurrentQuestion} />
        <QuestionList currentQuestion={currentQuestion} />
      </div>
    </div>
  );
};

export default HomePage;
