import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JwtService } from 'projects/insite-kit/src/service/jwt-service/jwt.service';
import { setupTests } from 'projects/insite-kit/src/service/test/test-setup';
import { HydroTestBed } from 'src/test/test-bed';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let jwtService: JwtService;

  setupTests(async () => HydroTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    jwtService = TestBed.inject(JwtService);

    spyOn(jwtService, 'get').and.returnValue('testName');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
