import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public myInterval: number = 10;
  private _activeSlideIndex: number = 0;
  categories:any[] =[];

  constructor(private http:HttpService, private route: Router) {}

  ngOnInit() {
    this.http.getCategories().subscribe(data => {
      this.categories =  data.data
    })
  }
  
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
