import { TestBed } from '@angular/core/testing';
import { RequestService } from 'insite-kit-temp';
import { PasswordUpdate } from 'projects/insite-kit/src/models/password-update.model';
import { User } from 'projects/insite-kit/src/models/user.model';
import { setupTests } from 'projects/insite-kit/src/test/test-setup';
import { HydroTestBed } from 'src/test/test-bed';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let requestService: RequestService;

  setupTests(async () => HydroTestBed.setup());

  beforeEach(() => {
    service = TestBed.inject(UserService);
    requestService = TestBed.inject(RequestService);

    spyOn(requestService, 'get');
    spyOn(requestService, 'post');
    spyOn(requestService, 'put');
    spyOn(requestService, 'delete');
  });

  it('should call get users endpoint', () => {
    const userMap = new Map().set('userId', 1);
    service.getUsers(userMap);

    expect(requestService.get).toHaveBeenCalledWith(
      'api/user-app/profile',
      userMap
    );
  });

  it('should call get current user endpoint', () => {
    service.getCurrentUser();
    expect(requestService.get).toHaveBeenCalledWith(
      'api/user-app/profile/current-user'
    );
  });

  it('should call get user by id endpoint', () => {
    service.getUserById(1);
    expect(requestService.get).toHaveBeenCalledWith('api/user-app/profile/1');
  });

  it('should call to check if email exist', () => {
    service.doesEmailExist('fake@mail.com');
    expect(requestService.get).toHaveBeenCalledWith(
      'api/user-app/profile/check-email?email=fake@mail.com'
    );
  });

  it('should call endpoint to create new user', () => {
    const newUser: User = {
      firstName: 'Test',
      lastName: 'Test',
      email: 'Test@mail.com',
      password: 'testPassword',
    };

    service.createUser(newUser);
    expect(requestService.post).toHaveBeenCalledWith(
      'api/user-app/profile',
      newUser
    );
  });

  it('should call endpoint to update user', () => {
    const updatedUser: User = {
      firstName: 'NewFirstName',
    };

    service.updateUserProfile(updatedUser);
    expect(requestService.put).toHaveBeenCalledWith(
      'api/user-app/profile',
      updatedUser
    );
  });

  it('should call endpoint to update user by id', () => {
    const updatedUser: User = {
      firstName: 'NewFirstName',
    };

    service.updateUserProfileById(12, updatedUser);
    expect(requestService.put).toHaveBeenCalledWith(
      'api/user-app/profile/12',
      updatedUser
    );
  });

  it('should call endpoint to update user password', () => {
    const newPass: PasswordUpdate = {
      currentPassword: 'current',
      newPassword: 'new',
    };

    service.updateUserPassword(newPass);
    expect(requestService.put).toHaveBeenCalledWith(
      'api/user-app/credentials/password',
      newPass
    );
  });

  it('should call endpoint to update user password by id', () => {
    const newPass: PasswordUpdate = {
      currentPassword: 'current',
      newPassword: 'new',
    };

    service.updateUserPasswordById(1, newPass);
    expect(requestService.put).toHaveBeenCalledWith(
      'api/user-app/credentials/password/1',
      newPass
    );
  });

  it('should call endpoint to reset user password', () => {
    const newPass: PasswordUpdate = { newPassword: 'new' };

    service.resetUserPassword(newPass);
    expect(requestService.put).toHaveBeenCalledWith(
      'api/user-app/credentials/password/reset',
      newPass
    );
  });

  it('should delete user', () => {
    service.deleteUser(10);
    expect(requestService.delete).toHaveBeenCalledWith(
      'api/user-app/profile/10'
    );
  });
});
