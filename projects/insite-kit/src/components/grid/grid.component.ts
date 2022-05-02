import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  QueryList,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { GridColumnComponent } from './grid-column/grid-column.component';
import { GridPagerComponent } from './grid-pager/grid-pager.component';
import { GridSearchComponent } from './grid-search/grid-search.component';
import { GridShowAllComponent } from './grid-show-all/grid-show-all.component';

@Component({
  selector: 'ik-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnChanges, OnDestroy, AfterViewInit {
  @ContentChildren(GridColumnComponent) columns: QueryList<GridColumnComponent>;
  @ContentChild(GridPagerComponent) pager: GridPagerComponent;
  @ContentChild(GridShowAllComponent) showAll: GridShowAllComponent;
  @ContentChild(GridSearchComponent) search: GridSearchComponent;

  @Input() dataLoader: any[] = [];
  @Input() translationKey: any;
  @Input() pageSize = 15;
  @Input() padding = true;
  @Input() basePath = '';
  @Input() overflowEnabled = false;
  @Input() storageTag = 'gridCurrentPage';
  @Input() alwaysDestroy = false;

  @Output() rowClick = new EventEmitter<any>();

  gridContent = [[]];
  gridIndex = 0;

  loading = true;
  destroy = new Subject();
  initialLoadComplete = false;

  constructor(private readonly router: Router) {}

  ngAfterViewInit() {
    this.checkDataLoader();
    this.initialLoadComplete = true;
  }

  ngOnChanges() {
    if (this.initialLoadComplete) {
      this.checkDataLoader();
    }
  }

  checkDataLoader() {
    if (this.dataLoader) {
      this.initGrid();
    } else {
      this.loading = true;
    }
  }

  ngOnDestroy() {
    if (this.isNewAppRoute() || this.alwaysDestroy) {
      localStorage.removeItem(this.storageTag);
    }
    this.destroy.next();
  }

  initGrid() {
    this.gridIndex = Number(localStorage.getItem(this.storageTag)) | 0;
    this.loading = false;

    if (this.pager) {
      this.pager.initPager(
        this.dataLoader.length,
        this.gridIndex,
        this.pageSize,
        this.translationKey,
        this.storageTag
      );
    } else {
      this.gridIndex = 0;
    }

    if (this.showAll) {
      this.showAll.init(this.dataLoader.length);
    }

    if (this.search) {
      this.search.search.pipe(takeUntil(this.destroy)).subscribe(() => {
        this.loading = true;
        this.pager.updateRoute(0);
      });
    }

    this.getPageData();
    this.listenToRoute();
  }

  refresh() {
    this.loading = true;
  }

  listenToRoute() {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntil(this.destroy)
      )
      .subscribe(() => this.onGridChange());
  }

  onGridChange() {
    this.gridIndex = Number(localStorage.getItem(this.storageTag));
    this.getPageData();
  }

  onRowClick(event: number) {
    this.rowClick.emit(
      this.dataLoader[event + this.gridIndex - this.gridContent.length]
    );
  }

  getPageData() {
    this.gridContent = [];

    for (let i = 0; i < this.pageSize && this.dataLoader[this.gridIndex]; i++) {
      this.gridContent.push(Object.values(this.getRowData(this.gridIndex++)));
    }

    if (this.pager) {
      this.pager.updatePageFooter(this.gridIndex);
    }
  }

  getRowData(index: number) {
    const arrayData = [];
    this.columns?.forEach((col) => {
      const val = this.dataLoader[index][col.field];
      arrayData.push(val ? val : '-');
    });
    return arrayData;
  }

  isDate(value: any) {
    if (typeof value === 'number') {
      return false;
    } else {
      let dateWrapper = new Date(value);
      return !isNaN(dateWrapper.getDate());
    }
  }

  isNewAppRoute() {
    return !this.router.url.includes(`/${this.basePath}`);
  }
}
