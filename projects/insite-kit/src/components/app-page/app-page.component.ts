import { Component, Inject, Input, ViewContainerRef } from '@angular/core';
import { NotificationMessageService } from '../../service/notification-message/notification-message.service';

@Component({
  selector: 'ik-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss'],
})
export class AppPageComponent {
  @Input() appName: string;

  constructor(
    @Inject(NotificationMessageService) notificationMessageService,
    @Inject(ViewContainerRef) viewContainerRef
  ) {
    notificationMessageService.setRootViewContainerRef(viewContainerRef);
  }
}
