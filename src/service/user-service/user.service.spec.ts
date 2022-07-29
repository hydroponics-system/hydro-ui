import { TestBed } from '@angular/core/testing';
import { RequestService } from 'projects/insite-kit/src/service/request-service/request.service';
import { setupTests } from 'projects/insite-kit/src/service/test/test-setup';
import { HydroTestBed } from 'src/test-bed';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let requestService: RequestService;

  setupTests(async () => HydroTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(UserService);
    requestService = TestBed.inject(RequestService);

    spyOn(requestService, 'get');
  });

  it('should call get user by id endpoint', () => {
    service.getUserById(1);
    expect(requestService.get).toHaveBeenCalledWith('api/user-app/profile/1');
  });
});
