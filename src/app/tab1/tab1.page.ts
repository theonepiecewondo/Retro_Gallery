import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Game } from '../game'
import { Photo, PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  gameList: Array<Game>;
  constructor(private storage: Storage,public photoService: PhotoService,private router: Router) {
    
  }
  
  async ionViewDidEnter(){
    this.gameList = new Array<Game>();
    console.log(this.gameList);
    await this.storage.get('List').then((data) => {
      if(data){
        this.gameList = data;
        console.log(this.gameList);
      }
    });
  }
  async ngOnInit() {
    await this.photoService.loadSaved();
  }
  async push(boo){
    var foo = boo;
    let navigationExtras: NavigationExtras = { state: { foo: foo } };
    this.router.navigate(['/game-view'], navigationExtras);
  }
}
