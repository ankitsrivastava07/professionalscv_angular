import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  constructor(private http:HttpService, private route:ActivatedRoute) {}

  apiResponse:any

  ngOnInit() {
    let articleSlugName = '' + this.route.snapshot.paramMap.get('articleSlugName')
    this.http.getArticle(articleSlugName).subscribe(data => this.apiResponse = data.data)
  }
}
