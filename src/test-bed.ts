import { TestModuleMetadata } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InsiteKitModule } from 'projects/insite-kit/src/insite-kit.module';
import { AbstractTestBed } from 'projects/insite-kit/src/service/test/abstract-test-bed';
import { AppComponent } from './app/app.component';

export class SoftwareCenterTestBed extends AbstractTestBed {
  static getModuleMetaData(): TestModuleMetadata {
    return {
      imports: [InsiteKitModule, RouterTestingModule],
      declarations: [AppComponent],
      providers: [],
    };
  }
}
