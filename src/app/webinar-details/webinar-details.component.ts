import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webinar-details',
  templateUrl: './webinar-details.component.html',
  styleUrls: ['./webinar-details.component.css'],
})
export class WebinarDetailsComponent implements OnInit {
  liveWebinars = [
    {
      imgUrl: '../assets/live-webinars/img-1.png',
      credits: '2 Credits',
      title:
        'Controversies in Bipolar 1 Disorder (BP-1): Implications for Asthama from',
      orgLogo: '../assets/org-logo/org-logo1.png',
      org: 'PDGI Indonesia',
      highlights: 'Manage chronic and complex diseases',
      attendees: '200+',
      duration: '24:50',
    },
    {
      imgUrl: '../assets/live-webinars/img-2.png',
      credits: '1.5 Credits',
      expiry: '23h 30m',
      title: 'Virus is like any other respiratory virus that causes common',
      orgLogo: '../assets/org-logo/org-logo2.png',
      org: 'GSK',
      highlights: 'Manage chronic and complex diseases',
      attendees: '200+',
      duration: '24:50',
    },
    {
      imgUrl: '../assets/live-webinars/img-3.png',
      credits: '2 Credits',
      title: 'Virus is like any other respiratory virus that causes common',
      orgLogo: '../assets/org-logo/org-logo3.png',
      org: 'Bayer',
      highlights: 'Manage chronic and complex diseases',
      attendees: '200+',
      duration: '24:50',
    },
  ];

  upcomingWebinars = [
    {
      banner: '../assets/upcoming-webinars/img-1.png',
      credits: '1.5 Credits',
      expiry: 'Expiring in 20 days',
      title: 'The Covid19 Management of Parox Health caretine',
      orgLogo: '../assets/org-logo/org-logo1.png',
      org: 'PDGI Indonesia',
      highlights: 'Manage chronic and complex diseases',
      liveOn: '7 Jan 2025, 12:30 PM',
    },
    {
      banner: '../assets/upcoming-webinars/img-2.png',
      credits: '2 Credits',
      expiry: '',
      title: 'Perspectives in The Covid19 Management of Parox Health',
      orgLogo: '../assets/org-logo/org-logo1.png',
      org: 'PDGI Indonesia',
      highlights: 'Manage chronic and complex diseases',
      liveOn: '7 Jan 2025, 12:30 PM',
    },
    {
      banner: '../assets/upcoming-webinars/img-3.png',
      credits: '2 Credits',
      expiry: '',
      title: 'The Covid19 Management of Parox Health caretine',
      orgLogo: '../assets/org-logo/org-logo1.png',
      org: 'PDGI Indonesia',
      highlights: 'Manage chronic and complex diseases',
      liveOn: '7 Jan 2025, 12:30 PM',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
