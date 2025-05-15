import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ColorsActions } from '../../../core/state/actions';
import { Color } from '../../../domains/color/domain/models';

import { Observable } from 'rxjs';
import { ColorStatus } from '../../../domains/color/domain/enums';
import { FilterActions } from '../../../core/state/actions';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss',
})
export class DropdownMenuComponent {
  // This property contains the list of items that we are going to show in the dropdown menu.

  selectedValue: string = ColorStatus.ACTIVE;

  @Input()
  menuItems: string[] = [];

  @Input()
  id!: string;

  @Input()
  type: 'only' | 'multiple' = 'only';

  // We use Set to set a set of selected items to handle the selected elements
  @Output()
  itemSeleted = new EventEmitter<string[]>();

  // [isOpen] is the property to handle if the [dropdownmenu] is open o closed
  isOpen: boolean = false;
  selectedItems = new Set<string>();

  constructor(
    private readonly __store: Store,
    private __colorSActions: ColorsActions,
    private __filterActions: FilterActions,
    private __ref: ElementRef,
    private __render: Renderer2
  ) {}

  /**
   * This method is used to toggle the dropdown menu.
   * @param e - HTML event
   * @param toggle - boolean value to toggle the menu
   */
  toggleMenu(e: Event): void {
    e.stopPropagation(); //  This
    this.isOpen = !this.isOpen;
  }

  onCloseMenu(): void {
    this.isOpen = false;
  }

  /**
   * This method is used select a item in the dropdown menu
   * @param i - Item used to select a item option
   * @emits Array[string] - Emit a array of string to do performance any actions at the parent container
   */
  onSelectItem(i: string): void {
    if (this.type === 'only') {
      this.selectedItems.clear(); // cler the set of elements if exist any storaged
      this.selectedItems.add(i); // then we add the only [i] in the set
      this.onCloseMenu(); // exectue the close menu method to close the [dropdown menu]
    } else {
      if (this.selectedItems.has(i)) {
        // if exists the [i] item in the menu, we delete the item
        this.selectedItems.delete(i);
      } else {
        // else we add in the set o selectedItems set
        this.selectedItems.add(i);
      }
    }
    this.itemSeleted.emit(Array.from(this.selectedItems));
  }

  /**
   * This method is used to add the style [.selected] class to item
   * @param i - Item used to selecte in the menu
   * @returns {Set<string>} - Set of items elements
   */
  isItemSelected(i: string): boolean {
    return this.selectedItems.has(i);
  }

  trackByItem(index: number, i: string): string {
    return i;
  }
}
