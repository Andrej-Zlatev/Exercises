import { Question } from "../questions";

interface Props {
  currentQuestion: Question | null;
}
const QuestionList = ({ currentQuestion }: Props) => {
  return (
    <div>
      <p>Question Generated</p>
      {currentQuestion && <p>{currentQuestion.text}</p>}
    </div>
  );
};

export default QuestionList;
