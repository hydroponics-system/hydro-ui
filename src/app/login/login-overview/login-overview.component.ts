import { Component, OnInit } from '@angular/core';
import { UrlService } from 'projects/insite-kit/src/service/url-service/url.service';

@Component({
  selector: 'app-login-overview',
  templateUrl: './login-overview.component.html',
  styleUrls: ['./login-overview.component.scss'],
})
export class LoginOverviewComponent implements OnInit {
  constructor(private readonly urlService: UrlService) {}

  ngOnInit(): void {
    console.log(this.urlService.getAPIUrl());
  }
}
