import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public myInterval: number = 10;
  private _activeSlideIndex: number = 0;
  
  get activeSlideIndex(): number {
    return this._activeSlideIndex;
  };
  
  set activeSlideIndex(newIndex: number) {
    if(this._activeSlideIndex !== newIndex) {
      console.log('Active slider index would be changed!');
    }
    this._activeSlideIndex = newIndex;
  };

}
