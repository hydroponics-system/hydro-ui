import { ComponentFixture, TestBed } from '@angular/core/testing';
import { setupTests } from 'projects/insite-kit/src/service/test/test-setup';
import { HydroTestBed } from 'src/test-bed';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  setupTests(async () => HydroTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
