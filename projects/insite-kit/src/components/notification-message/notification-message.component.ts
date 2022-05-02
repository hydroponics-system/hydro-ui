import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from '../../models/notification.model';

@Component({
  selector: 'ik-notification-message',
  templateUrl: './notification-message.component.html',
  styleUrls: ['./notification-message.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':leave', animate(600, style({ opacity: 0 }))),
    ]),
  ],
})
export class NotificationMessageComponent {
  notifications: Notification[] = [];
  num = 0;

  constructor(private readonly router: Router) {}

  onNotificationRouteClick(notification: Notification) {
    this.router.navigate([`/notification/details/${notification.id}`]);
  }

  addNotification(notification: Notification) {
    this.notifications = [...this.notifications, notification];
    setTimeout(() => {
      this.notifications = this.notifications.filter(
        (m) => m.id !== notification.id
      );
    }, 3500);
  }
}
