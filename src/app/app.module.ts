import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WebinarDetailsComponent } from './webinar-details/webinar-details.component';
import { TopSpeakersComponent } from './top-speakers/top-speakers.component';
import { BrowseTopicComponent } from './browse-topic/browse-topic.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, WebinarDetailsComponent, TopSpeakersComponent, BrowseTopicComponent, FooterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
