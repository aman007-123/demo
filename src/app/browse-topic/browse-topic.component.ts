import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-topic',
  templateUrl: './browse-topic.component.html',
  styleUrls: ['./browse-topic.component.css'],
})
export class BrowseTopicComponent implements OnInit {
  topics = [
    { name: 'Cardiologist', count: 4 },
    { name: 'Emergency', count: 2 },
    { name: 'General Medicine', count: 9 },
    { name: 'General Medicine', count: 4 },
    { name: 'Emergency Medicine', count: 8 },
    { name: 'General Medicine', count: 4 },
    { name: 'Emergency Medicine', count: 8 },
    { name: 'Cardiologist', count: 4 },
    { name: 'General Medicine', count: 9 },
    { name: 'General Medicine', count: 4 },
    { name: 'Emergency', count: 2 },
    { name: 'Cardiologist', count: 4 },
    { name: 'Emergency Medicine', count: 8 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
