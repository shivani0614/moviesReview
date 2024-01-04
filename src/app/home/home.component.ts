import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  trendingMovies: any;
  theatreMovies: any;
  popularMovies:any;
  constructor(private http: HttpClient,private router:Router) { }
  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }
  getTrendingMovies() {
    this.http
      // /Users/aletishivanireddy/Desktop/AngularProjects/moviesReview/src/assets/data/trending-movies.json
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((movies) => {
        this.trendingMovies = movies;
        console.log('trendingMovies',this.trendingMovies);
      })
  }

  getTheatreMovies() {
    this.http
      // /Users/aletishivanireddy/Desktop/AngularProjects/moviesReview/src/assets/data/trending-movies.json
      .get('http://localhost:4200/assets/data/theatre-movies.json')
      .subscribe((movies) => {
        this.theatreMovies = movies;
        console.log('theatreMovies',this.theatreMovies);
      })
  }

  getPopularMovies(){
    this.http
      // /Users/aletishivanireddy/Desktop/AngularProjects/moviesReview/src/assets/data/trending-movies.json
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((movies) => {
        this.popularMovies = movies;
        console.log('popularMovies',this.popularMovies);
      })
  }

  goToMovie(type:string,id:string){
    this.router.navigate(['movies',type,id]);
  }

}
