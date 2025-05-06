import { Pipe, PipeTransform } from '@angular/core';
import Color from '../models/domain/color.model';

/**
 * Pipe to get the size (length) of an array.
 *
 * @example
 *   {{ someArray | size }}
 *
 * @returns number of items in the array or 0 if invalid.
 */

@Pipe({
  name: 'size',
})
export class SizePipe implements PipeTransform {
  transform<T>(value: T[] | null | undefined, ...args: unknown[]): unknown {
    // 1. We only need to return the length of the array
    return value?.length || 0;
  }
}
