import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JwtService } from 'insite-kit';
import { HydroTestBed } from 'src/test/test-bed';
import { setupTests } from 'src/test/test-setup';
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
