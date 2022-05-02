import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  Access,
  Feature,
  WebRole,
} from 'projects/insite-kit/src/models/common.model';
import { JwtService } from 'projects/insite-kit/src/service/jwt-service/jwt.service';
import { NotificationMessageService } from 'projects/insite-kit/src/service/notification-message/notification-message.service';
import { NotificationService } from 'projects/insite-kit/src/service/notification/notification.service';
import { StompWebSocketService } from 'projects/insite-kit/src/service/stomp/stomp-websocket.service';
import { Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
@Component({
  selector: 'ik-app-navbar',
  template: '',
})
export class BaseNavbarComponent implements OnInit, OnDestroy {
  notificationCount = 0;
  destroy = new Subject();

  Feature = Feature;
  Access = Access;
  notificationAccess: boolean;

  constructor(
    private readonly router: Router,
    private readonly notificationService: NotificationService,
    private readonly jwt: JwtService,
    private readonly stompService: StompWebSocketService,
    private readonly notificationMessageService: NotificationMessageService,
    @Inject(ViewContainerRef) viewContainerRef
  ) {
    notificationMessageService.setRootViewContainerRef(viewContainerRef);
  }

  ngOnInit() {
    // this.stompService.init();
    // this.notificationUpdates();
    // this.listenToWebSocket();
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  onLogoClick() {
    this.router.navigate(['/home']);
  }

  onWaffleClick() {
    this.router.navigate(['home']);
  }

  onBellClick() {
    this.router.navigate(['/notification']);
  }
  onProfileClick() {
    this.router.navigate(['/profile']);
  }

  onLogOutClick() {
    this.jwt.logOut();
    this.stompService.deactivate();
  }

  getNotifications(params?: Map<string, string[]>) {
    return this.notificationService.getNotifications(params);
  }

  notificationUpdates() {
    this.notificationService
      .notificationChange()
      .pipe(
        switchMap(() => this.getNotifications(this.getParams())),
        takeUntil(this.destroy)
      )
      .subscribe((res) => (this.notificationCount = res.length));
  }

  listenToWebSocket() {
    return this.stompService
      .listen()
      .pipe(
        tap((res) => this.notificationMessageService.triggerNotification(res)),
        tap(() => this.notificationService.triggerNotificationUpdate()),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  getParams() {
    const currentUserRole = WebRole[this.jwt.get('webRole')];

    if (Number(currentUserRole) >= WebRole.ADMIN.valueOf()) {
      return new Map().set('read', false);
    } else {
      return new Map()
        .set('receiverId', this.jwt.get('userId'))
        .set('read', false);
    }
  }
}
