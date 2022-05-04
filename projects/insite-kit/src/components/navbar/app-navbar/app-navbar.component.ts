import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  faBars,
  faBell,
  faClose,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
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
  @Input() sideBarOpen: boolean = false;
  @Output() menuClick = new EventEmitter<any>();

  menuIcon = faBars;
  notificationBellIcon = faBell;
  profileIcon = faUser;
  closeIcon = faClose;

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

  onMenuClick() {
    console.log('Menu Clicked');
    this.menuClick.emit();
  }

  onBellClick() {
    this.router.navigate(['/notification']);
  }

  onProfileClick() {
    // this.router.navigate(['/profile']);
    this.jwt.logOut();
  }

  onLogOutClick() {
    this.jwt.logOut();
    this.stompService.deactivate();
  }
}
