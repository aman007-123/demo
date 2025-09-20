import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  specialties = [
    'Accupuncture',
    'Allergy and Immunology',
    'Anaesthesiology',
    'Clinical Nutrition',
    'General Practitioner',
  ];
  webinars = [
    {
      logo: '../assets/org-logo/org-logo1.png',
      org: 'PDGI Indonesia',
      sponsored: 'Sponsored by Roche',
      followers: '2845',
      time: '30 min ago',
      image: '../assets/footer/img-1.png',
      credits: 1.5,
      expiry: 'Expiring in 23h 30m',
      title: 'Immunization for a Healthier Tomorrow',
      subtitle:
        'Perspectives in The Covid19 Management of Parox Health caretine',
      highlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      views: 750,
    },
    {
      logo: '../assets/org-logo/org-logo1.png',
      org: 'PDGI Indonesia',
      sponsored: 'Sponsored by Roche',
      followers: '2845',
      time: '30 min ago',
      image: '../assets/footer/img-2.png',
      credits: 2,
      expiry: 'Expiring in 12 days',
      title: 'More Than Skin Deep: Treating Eczema and Allergy',
      subtitle:
        'New Perspectives in The Covid19 Management of Parox Health caretine',
      highlights: 'Manage chronic and complex diseases',
      likes: 20,
      comments: 12,
      views: 750,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
