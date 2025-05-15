import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'destruct',
})
export class DestructPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}
  transform(value: Object, ...args: unknown[]): unknown {
    // 1. We need to apply the destructuring the value objet { k: v}
    const [k, v] = [...Object.keys(value), Object.values(value)];
    if (args[0] == 'k') {
      return k;
    } else {
      return this._sanitizer.bypassSecurityTrustHtml(v as string) as SafeHtml;
    }
  }
}
