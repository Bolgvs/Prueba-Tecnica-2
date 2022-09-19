import { Component } from '@angular/core';
import { TokenStorageService } from './service/auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaTecnica2';
  private role:string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  username?:string;

  constructor(private tokenStorageService: TokenStorageService){}

  ngOnInit():void{
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.role = user.role;
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
