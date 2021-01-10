import { QuationItem } from './quationItem';
import { Color } from './color';
export interface Quation {
  quations: Array<QuationItem>;
  choiceItems: Array<Color>;
  useIndex: number;
}
