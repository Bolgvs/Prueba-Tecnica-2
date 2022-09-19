import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FilmsDetailsComponent } from '../films-details/films-details.component';


@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  films?: FilmsDetailsComponent[];
  currentIndex = -1;
  name = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.returnFilms();
  }
  returnFilms(): void {
    this.apiService.list()
      .subscribe(
        data => {
          this.films = data;
          console.log(data);
        },
        error => {
          console.log('not working');
        }
      );
  }
}
