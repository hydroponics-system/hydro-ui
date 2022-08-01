import { Component, OnInit } from '@angular/core';
import { curveMonotoneX } from 'd3-shape';
import { JwtService } from 'insite-kit-temp';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name: string;
  curve: any = curveMonotoneX;

  barChartData = [
    { name: 'Mobiles', value: 105000 },
    { name: 'Laptop', value: 55000 },
    { name: 'AC', value: 15000 },
    { name: 'Headset', value: 150000 },
    { name: 'Fridge', value: 20000 },
  ];

  lineChartData = [
    {
      name: 'Germany',
      series: [
        {
          name: '2004',
          value: 7300000,
        },
        {
          name: '2005',
          value: 8940000,
        },
        {
          name: '2006',
          value: 7300000,
        },
        {
          name: '2007',
          value: 8940000,
        },
        {
          name: '2008',
          value: 7300000,
        },
        {
          name: '2009',
          value: 8940000,
        },
        {
          name: '2010',
          value: 7300000,
        },
        {
          name: '2011',
          value: 8940000,
        },
      ],
    },

    {
      name: 'USA',
      series: [
        {
          name: '2004',
          value: 4500000,
        },
        {
          name: '2005',
          value: 6000000,
        },
        {
          name: '2006',
          value: 5250000,
        },
        {
          name: '2007',
          value: 6270000,
        },
        {
          name: '2008',
          value: 4500000,
        },
        {
          name: '2009',
          value: 3000000,
        },
        {
          name: '2010',
          value: 5250000,
        },
        {
          name: '2011',
          value: 6270000,
        },
      ],
    },
  ];

  constructor(private readonly jwt: JwtService) {}

  ngOnInit(): void {
    this.name = this.jwt.get('firstName');
  }
}
