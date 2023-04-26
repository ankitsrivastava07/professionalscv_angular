import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web_page';
  images: any[] = ['https://picsum.photos/id/1/900/500', ' https://picsum.photos/id/2/900/500', ' https://picsum.photos/id/3/900/500']
}
