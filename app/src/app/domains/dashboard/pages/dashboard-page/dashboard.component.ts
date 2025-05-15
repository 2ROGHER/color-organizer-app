import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Color } from '../../../color/domain/models';
import { ColorsActions } from '../../../../core/state/actions';
import { FilterActions } from '../../../../core/state/actions';
import { selectFilteredColors } from '../../../../core/state/selectors';
import { DragDropService } from '../../../../core/services/drag-drop/drag-drop.service';
import { ColorStatus } from '../../../color/domain/enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  
})
export class DashboardPageComponent implements OnInit, OnDestroy, OnChanges {
  colors$!: Observable<Color[] | undefined>;
  count$!: Observable<number>;

  colorsList$!: Observable<Color[]>;

  dragOverIndex: number | null = null;
  draggedItemIndex: number | null = null;

  filterType: string = '';

  @HostListener('document:dragover', ['$event']) onDragOver(
    e: DragEvent
  ): void {
    e.preventDefault();
    let tag = (e.target as HTMLElement).tagName;
    let id = (e.target as HTMLElement).id;

    if (typeof tag === 'string' && tag === 'BUTTON') {
      this.filterType = id;
      (e.target as HTMLElement).classList.add('drag-over');
    }

    if (this.filterType == 'home') {
      this.__router.navigate(['home']);
    }
  }

  // =========================================================
  //                       life-cycle
  // =========================================================

  // This life-cycle hook is executed when the component is created.
  constructor(
    private readonly __colorsActions: ColorsActions,
    private readonly __filtersActions: FilterActions,
    private readonly __dragDropService: DragDropService,
    private readonly __router: Router,
    private __store: Store
  ) {
    // Select all colors registered at the store.
    // this.count$ = this.__store.select(selectColorCount);
    // this.__store.dispatch(this.__filtersActions.setFilterValue(ColorStatus.DEFAULT)); // 1.First we need to [dispatch]
    this.colors$ = this.__store.select(selectFilteredColors); // We need to select the filter colors
  }
  ngOnDestroy(): void {
    console.log('DashboardPageComponent destroyed');
  }

  ngOnChanges(prv: any): void {
    console.log('DashboardPageComponent changes detected', prv);
  }

  ngOnInit() {}

  // =========================================================
  //                       handlers
  // =========================================================

  /**
   * This method is called when the dragged item is dropped in a specif area
   * @param e
   */
  onDrop(e: DragEvent): void {
    e.preventDefault(); // we need to prevent the default behavior of the browser to allow the drag and drop functionality
    const item = this.__dragDropService.getData;
    e.dataTransfer!.setData('text/plain', item[0].name);
    if (item) {
      // TODO("implement the dispatch to perform any actions")
      this.__store.dispatch(
        this.__colorsActions.setColorStatus(
          item[0].id,
          this.filterType.toUpperCase()
        )
      );
      // this.__store.dispatch(this.__colorsActions.addColor(item));
      // then we need to clear the data
      this.__dragDropService.clearData();
    }
  }

  /**
   * This method is called when the user drags an item over a specif area
   * @param e DragEvent
   */

  // onDragOver(e: DragEvent): void {
  //   console.log('on drag over', e);
  //   e.preventDefault(); // we need to prevent the default behavior of the browser to allow the drag and drop functionality
  // }

  /**
   * This method is called when the user drags an item out of a specif area
   * @param e
   */

  onDragLeave(e: DragEvent): void {
    // console.log('on drag leave', e);
  }

  /**
   * This method is called when we start dragging an item in a specif area
   * @param e
   */

  onDragStart(e: Event): void {
    // console.log('on drag start', e);
  }

  /**
   * This method is called when we enter an item in a specif area
   * @param e
   */
  onDragEnter(e: DragEvent): void {
    // console.log('on drag enter', e);
  }

  /**
   * This method is called when we end dragging an item in a specif area
   */

  onDragEnd(): void {
    // console.log('on drag end');
    this.__dragDropService.setData = null;
  }

  // ===========================================
  //                Actions handlers
  // ===========================================
  handleFilter(e: string): void {
    
    this.__store.dispatch(
      this.__filtersActions.setFilterValue(e)
    );
  }

  handleSearchTask(s: string): void {
    this.__store.dispatch(this.__filtersActions.setSearchTerm(s));
  }
}
