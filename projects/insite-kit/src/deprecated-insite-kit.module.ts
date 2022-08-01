import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InsiteKitModule } from 'insite-kit-temp';
import { BannerComponent } from './components/banner/banner.component';
import { CardHeaderComponent } from './components/card/card-header/card-header.component';
import { CardInfoComponent } from './components/card/card-info/card-info.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { GridColumnComponent } from './components/grid/grid-column/grid-column.component';
import { GridPagerComponent } from './components/grid/grid-pager/grid-pager.component';
import { GridSearchComponent } from './components/grid/grid-search/grid-search.component';
import { GridShowAllComponent } from './components/grid/grid-show-all/grid-show-all.component';
import { GridComponent } from './components/grid/grid.component';
import { HeaderBackComponent } from './components/header/header-back/header-back.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    GridComponent,
    GridColumnComponent,
    GridPagerComponent,
    GridShowAllComponent,
    HeaderComponent,
    CardComponent,
    CardInfoComponent,
    CardHeaderComponent,
    BannerComponent,
    GridSearchComponent,
    CheckboxComponent,
    HeaderBackComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    InsiteKitModule,
  ],
  exports: [
    GridComponent,
    GridColumnComponent,
    GridPagerComponent,
    GridShowAllComponent,
    HeaderComponent,
    CardComponent,
    CardInfoComponent,
    CardHeaderComponent,
    BannerComponent,
    GridSearchComponent,
    CheckboxComponent,
    HeaderBackComponent,
    FontAwesomeModule,
  ],
})
export class DeprecatedInsiteKitModule {}
