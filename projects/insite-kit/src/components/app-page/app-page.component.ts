import {
  Component,
  Inject,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { NotificationMessageService } from '../../service/notification-message/notification-message.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'ik-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss'],
})
export class AppPageComponent {
  @ViewChild('sidebarNav') sideBar: SidebarComponent;
  @Input() appName: string;

  constructor(
    @Inject(NotificationMessageService) notificationMessageService,
    @Inject(ViewContainerRef) viewContainerRef
  ) {
    notificationMessageService.setRootViewContainerRef(viewContainerRef);
  }
}
