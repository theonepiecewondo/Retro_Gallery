import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Game } from '../game';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  game: Game;
  title: string;
  genre: string;
  console: string;
  publisher: string;
  developer: string;
  upc: string;
  description: string;
  photoPath: string;
  gameList: Array<any>;
  constructor(private storage: Storage,public photoService: PhotoService,private router: Router) {

  }
  async ionViewDidEnter() {
    this.game = new Game();
    this.gameList = new Array<Game>();
    this.photoPath = null;

  }
  async ionViewWillLeave() {
    this.title = null;
    this.genre = null;
    this.console = null;
    this.publisher = null;
    this.developer = null;
    this.upc = null;
    this.description = null;
    this.photoPath = null;
  }
  async submit() {
    await this.storage.get('List').then((data) => {
      if(data){
        console.log(data);
        this.gameList = data;
      }
    });
    this.game.title = this.title;
    this.game.genre = this.genre;
    this.game.console = this.console;
    this.game.publisher = this.publisher;
    this.game.developer = this.developer;
    this.game.upc = this.upc;
    this.game.description = this.description;
    this.game.photo = this.photoPath;
    this.gameList.push(this.game);
    
    await this.storage.set('List',this.gameList);
    await this.storage.get('List').then((data) => {
      console.log(data);
    });
    this.router.navigate(['/tabs/tab1']);
  }
  async clear() {
    await this.photoService.deletePicture();
    await this.storage.clear();
  }
  async addPhotoToGallery() {
    await this.photoService.addNewToGallery();
    this.photoPath = this.photoService.photos[0].webviewPath;
    console.log(this.photoService.photos);
    //this.photoPath = this.photoService.photos[0].webviewPath
  }
}
