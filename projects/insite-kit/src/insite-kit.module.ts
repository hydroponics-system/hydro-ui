import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppPageComponent } from './components/app-page/app-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { AppFooterComponent } from './components/footer/app-footer.component';
import { ContactAdminModalComponent } from './components/footer/modals/contact-admin-modal/contact-admin-modal.component';
import { PrivacyPolicyModalComponent } from './components/footer/modals/privacy-policy-modal/privacy-policy-modal.component';
import { ProjectModalComponent } from './components/footer/modals/project-modal/project-modal.component';
import { GridColumnComponent } from './components/grid/grid-column/grid-column.component';
import { GridPagerComponent } from './components/grid/grid-pager/grid-pager.component';
import { GridSearchComponent } from './components/grid/grid-search/grid-search.component';
import { GridShowAllComponent } from './components/grid/grid-show-all/grid-show-all.component';
import { GridComponent } from './components/grid/grid.component';
import { HeaderBackComponent } from './components/header/header-back/header-back.component';
import { HeaderComponent } from './components/header/header.component';
import { IconComponent } from './components/icon/icon.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { ModalActionBarComponent } from './components/modal/modal-action-bar/modal-action-bar.component';
import { ModalBodyComponent } from './components/modal/modal-body/modal-body.component';
import { ModalHeaderComponent } from './components/modal/modal-header/modal-header.component';
import { ModalComponent } from './components/modal/modal.component';
import { AppNavbarComponent } from './components/navbar/app-navbar/app-navbar.component';
import { NotificationMessageComponent } from './components/notification-message/notification-message.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsernamePipe } from './service/pipe/format-user-name.pipe';
import { NotificationMessagePipe } from './service/pipe/notification-message.pipe';
import { WebRoleTranslationPipe } from './service/pipe/web-role-translation.pipe';
import { StompWebSocketService } from './service/stomp/stomp-websocket.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppPageComponent,
    AppNavbarComponent,
    GridComponent,
    GridColumnComponent,
    GridPagerComponent,
    GridShowAllComponent,
    HeaderComponent,
    CardComponent,
    CardInfoComponent,
    LoadingIndicatorComponent,
    CardHeaderComponent,
    IconComponent,
    UsernamePipe,
    ModalComponent,
    WebRoleTranslationPipe,
    ModalActionBarComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    BannerComponent,
    GridSearchComponent,
    AppFooterComponent,
    PrivacyPolicyModalComponent,
    ProjectModalComponent,
    ContactAdminModalComponent,
    CheckboxComponent,
    NotificationMessageComponent,
    NotificationMessagePipe,
    HeaderBackComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
    FontAwesomeModule,
  ],
  exports: [
    AppNavbarComponent,
    AppPageComponent,
    GridComponent,
    GridColumnComponent,
    GridPagerComponent,
    GridShowAllComponent,
    HeaderComponent,
    CardComponent,
    CardInfoComponent,
    LoadingIndicatorComponent,
    CardHeaderComponent,
    IconComponent,
    UsernamePipe,
    ModalComponent,
    ModalActionBarComponent,
    ModalBodyComponent,
    ModalHeaderComponent,
    WebRoleTranslationPipe,
    BannerComponent,
    GridSearchComponent,
    AppFooterComponent,
    PrivacyPolicyModalComponent,
    ProjectModalComponent,
    ContactAdminModalComponent,
    CheckboxComponent,
    NotificationMessageComponent,
    NotificationMessagePipe,
    HeaderBackComponent,
    FontAwesomeModule,
    SidebarComponent,
  ],
  entryComponents: [ModalComponent, NotificationMessageComponent],
  providers: [StompWebSocketService],
})
export class InsiteKitModule {}
