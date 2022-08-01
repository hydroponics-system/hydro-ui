import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { InsiteKitModule } from 'insite-kit-temp';
import { ToastrModule } from 'ngx-toastr';
import { DeprecatedInsiteKitModule } from 'projects/insite-kit/src/deprecated-insite-kit.module';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    InsiteKitModule.forRoot(environment),
    DeprecatedInsiteKitModule,
  ],
  exports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    NgxChartsModule,
    InsiteKitModule,
    DeprecatedInsiteKitModule,
  ],
})
export class SharedModule {}
