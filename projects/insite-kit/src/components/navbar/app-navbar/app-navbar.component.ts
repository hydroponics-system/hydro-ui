import { Component, Inject, Input, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'projects/insite-kit/src/service/jwt-service/jwt.service';
import { NotificationMessageService } from 'projects/insite-kit/src/service/notification-message/notification-message.service';
import { NotificationService } from 'projects/insite-kit/src/service/notification/notification.service';
import { StompWebSocketService } from 'projects/insite-kit/src/service/stomp/stomp-websocket.service';
import { BaseNavbarComponent } from '../base-navbar/base-navbar.component';
@Component({
  selector: 'ik-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
})
export class AppNavbarComponent extends BaseNavbarComponent {
  @Input() appName: string;

  constructor(
    router: Router,
    notificationService: NotificationService,
    jwt: JwtService,
    stompService: StompWebSocketService,
    notificationMessageService: NotificationMessageService,
    @Inject(ViewContainerRef) viewContainerRef
  ) {
    super(
      router,
      notificationService,
      jwt,
      stompService,
      notificationMessageService,
      viewContainerRef
    );
  }
}
