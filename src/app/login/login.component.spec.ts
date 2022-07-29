import { ComponentFixture, TestBed } from '@angular/core/testing';
import { setupTests } from 'projects/insite-kit/src/service/test/test-setup';
import { HydroTestBed } from 'src/test-bed';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  setupTests(async () => HydroTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
