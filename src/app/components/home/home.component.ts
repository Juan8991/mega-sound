import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit{
  @ViewChild('miVideo') miVideo: any;

  ngAfterViewInit() {
    if (this.miVideo) {
      this.miVideo.nativeElement.playbackRate = 0.8;
    }
  }
}
