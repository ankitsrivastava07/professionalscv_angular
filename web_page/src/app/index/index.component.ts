import { Component } from '@angular/core';
import { LoadingService } from '../loading.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(public loadingService: LoadingService, private http:HttpService) {}

  ngOnInit() {
    if (localStorage.getItem("articles") === null) {
        this.http.getCategories().subscribe(data => {
        localStorage.setItem('articles', JSON.stringify(data.data))
       })
    }
  }
}
