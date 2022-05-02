import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { NotificationMessageComponent } from '../../components/notification-message/notification-message.component';
import { Notification } from '../../models/notification.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationMessageService {
  componentInstance: ComponentRef<NotificationMessageComponent>;

  setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.componentInstance = viewContainerRef.createComponent(
      NotificationMessageComponent
    );
  }

  triggerNotification(notification: Notification) {
    this.componentInstance.instance.addNotification(notification);
  }
}
