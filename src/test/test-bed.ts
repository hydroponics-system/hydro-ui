import { TestModuleMetadata } from '@angular/core/testing';
import { AbstractTestBed } from 'projects/insite-kit/src/service/test/abstract-test-bed';
import { AppComponent } from 'src/app/app.component';
import { HomeModule } from 'src/app/home/home.module';
import { LoginModule } from 'src/app/login/login.module';
import { SharedModule } from 'src/app/shared/shared.module';

export class HydroTestBed extends AbstractTestBed {
  static getModuleMetaData(): TestModuleMetadata {
    return {
      imports: [LoginModule, HomeModule, SharedModule],
      declarations: [AppComponent],
      providers: [],
    };
  }
}
