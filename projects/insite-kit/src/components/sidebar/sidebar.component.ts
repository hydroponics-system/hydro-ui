import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCircleInfo,
  faClose,
  faEnvelope,
  faGear,
  faGears,
  faHome,
  faScrewdriverWrench,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ik-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isOpen = false;

  closeIcon = faClose;
  homeIcon = faHome;
  serviceIcon = faScrewdriverWrench;
  aboutIcon = faCircleInfo;
  contactIcon = faEnvelope;
  systemIcon = faGears;
  usersIcon = faUsers;
  gitIcon = faGithub;
  settingsIcon = faGear;

  open() {
    document.getElementById('sideBarNav').style.width = '250px';
    this.isOpen = true;
  }

  close() {
    document.getElementById('sideBarNav').style.width = '0';
    this.isOpen = false;
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}
