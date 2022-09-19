import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css']
})
export class FilmsDetailsComponent implements OnInit {

  id: any;
  character: any = null;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '[]');
  }

  ngOnInit(): void {
    this.apiService.returnFilm(this.id)
    .subscribe( result => this.character = result)
   }

}
