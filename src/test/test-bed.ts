import { TestModuleMetadata } from '@angular/core/testing';
import { AbstractTestBed, InsiteKitModule } from 'insite-kit';
import { AppComponent } from 'src/app/app.component';
import { BaseInitModule } from 'src/app/common/base-init.module';
import { PagesModule } from 'src/app/pages/pages.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TEST_ENVIRONMENT } from './test-env';

export class HydroTestBed extends AbstractTestBed {
  static getModuleMetaData(): TestModuleMetadata {
    return {
      imports: [
        InsiteKitModule.forRoot(TEST_ENVIRONMENT),
        BaseInitModule,
        PagesModule,
        SharedModule,
      ],
      declarations: [AppComponent],
      providers: [],
    };
  }
}
