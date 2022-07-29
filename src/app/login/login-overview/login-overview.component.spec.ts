import { ComponentFixture, TestBed } from '@angular/core/testing';
import { setupTests } from 'projects/insite-kit/src/service/test/test-setup';
import { HydroTestBed } from 'src/test-bed';
import { LoginOverviewComponent } from './login-overview.component';

describe('LoginOverviewComponent', () => {
  let component: LoginOverviewComponent;
  let fixture: ComponentFixture<LoginOverviewComponent>;

  setupTests(async () => HydroTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOverviewComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
