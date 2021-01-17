import { QuestionItem } from './QuestionItem';
import { Color } from './color';
export interface Question {
  questions: Array<QuestionItem>;
  choiceItems: Array<Color>;
  useIndex: number;
}
