import { Color } from '../../domains/color/domain/models';
import { IFilter } from './filter.interface';

export interface AppState {
  colors: Color[];
  filters: IFilter<string>
}
