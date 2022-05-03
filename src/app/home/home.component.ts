import { Component, OnInit } from '@angular/core';
import { JwtService } from 'projects/insite-kit/src/service/jwt-service/jwt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name: string;

  constructor(private readonly jwt: JwtService) {}

  ngOnInit(): void {
    this.name = this.jwt.get('firstName');
  }
}
