import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-speakers',
  templateUrl: './top-speakers.component.html',
  styleUrls: ['./top-speakers.component.css'],
})
export class TopSpeakersComponent implements OnInit {
  speakers = [
    {
      photo: '../assets/top-speakers/img-1.png',
      live: true,
      name: 'Dr Chong wui',
      speciality: 'Gastrologist, General Physician',
    },
    {
      photo: '../assets/top-speakers/img-1.png',
      live: false,
      name: 'Dr Wuyama Guramg',
      speciality: 'Gastroenterologist, Surgeon',
    },
    {
      photo: '../assets/top-speakers/img-1.png',
      live: false,
      name: 'Dr Wuyama Guramg',
      speciality: 'Gastroenterologist, Surgeon',
    },
    {
      photo: '../assets/top-speakers/img-1.png',
      live: false,
      name: 'Dr Wuyama Guramg',
      speciality: 'Cardiologist',
    },
    {
      photo: '../assets/top-speakers/img-1.png',
      live: false,
      name: 'Dr Shanya suian',
      speciality: 'Orthodontist',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
