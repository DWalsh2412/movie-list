import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = [
    {id: 1, title: 'The GodFather', year : '1972', diretor: 'Francis Ford Coopla'},
    {id: 2, title: 'jaws', year : '1975', director: 'Steven speilberg'},
    {id: 3, title: 'Star Wars Episode V', year:'1980', director: 'Irvin Kershner'},
    {id: 4, title: 'Whiplash', year:'',director: 'Damien Chazelle'}
 ];

 getMovies() {
   return this.movieList;
 }
}
