import Color from '../domain/color.model';
import { IFilter } from './filter.interface';

export interface AppState {
  colors: Color[];
  filters: IFilter<string>
}
