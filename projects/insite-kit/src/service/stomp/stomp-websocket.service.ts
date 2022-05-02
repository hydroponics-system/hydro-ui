import { Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { Message } from '@stomp/stompjs';
import { Notification } from 'projects/insite-kit/src/models/notification.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { JwtService } from '../jwt-service/jwt.service';
import { UrlService } from '../url-service/url.service';
import { STOMP_SOCKET_CONFIG } from './stomp.config';

@Injectable({
  providedIn: 'root',
})
export class StompWebSocketService extends RxStomp {
  private readonly SOCKET_URL = '/topic/notifications';

  activeUser: User;

  constructor(
    private readonly jwt: JwtService,
    private readonly urlService: UrlService
  ) {
    super();
  }

  init() {
    if (!this.active) {
      this.configure(STOMP_SOCKET_CONFIG);
      this.configure({
        brokerURL: `${this.urlService.getSocketAPIUrl()}?${this.jwt.getToken()}`,
      });
      this.activate();
    }
  }

  /**
   * This will listen to the websocket url for any request and rely
   * them to the logged in user.
   *
   * @param user The user currently logged in
   * @returns Observable of the caught Notification object.
   */
  listen(destination?: string): Observable<Notification> {
    return super
      .watch(
        `${
          destination ? destination : this.SOCKET_URL
        }/${this.jwt.getRequiredUserId()}`
      )
      .pipe(map((res: Message) => JSON.parse(res.body)));
  }
}
