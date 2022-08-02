import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { InsiteKitModule } from 'insite-kit';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    InsiteKitModule.forRoot(environment),
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
    FontAwesomeModule,
    InsiteKitModule,
  ],
})
export class SharedModule {}
