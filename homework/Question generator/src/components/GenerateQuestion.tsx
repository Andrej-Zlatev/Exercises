import { Question, questions } from "../questions";

interface Props {
  setCurrentQuestion: (question: Question) => void;
}

const GenerateQuestion = ({ setCurrentQuestion }: Props) => {
  const handleQuestion = () => {
    const randomNumber = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomNumber]);
  };

  return (
    <div>
      <button onClick={handleQuestion}>Generate Question</button>
    </div>
  );
};

export default GenerateQuestion;
