import { Pipe, PipeTransform } from '@angular/core';
import {
  Notification,
  NotificationType,
} from '../../models/notification.model';

@Pipe({ name: 'formatNotitication' })
export class NotificationMessagePipe implements PipeTransform {
  transform(notification: Notification) {
    if (notification) {
      return this.determineMessage(notification.type);
    } else {
      return 'New Request';
    }
  }

  determineMessage(type: NotificationType) {
    if (type === NotificationType.USER) {
      return 'New User Request';
    } else if (type === NotificationType.SYSTEM_UPDATE) {
      return 'Change to System Settings';
    } else {
      return 'New Request';
    }
  }
}
