import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Game } from '../game';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.page.html',
  styleUrls: ['./game-view.page.scss'],
})
export class GameViewPage implements OnInit {
  foo: any;
  game: Game;
  gameList: Array<any>;
  constructor(private route: ActivatedRoute, private router: Router,private storage: Storage,public photoService: PhotoService,) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.foo = this.router.getCurrentNavigation().extras.state.foo;
      }
    });
   }

   async ionViewWillEnter(){
    
     await this.storage.get('List').then((data) => {
      this.gameList = data;
    });
    this.gameList.forEach(data => {
      if(data.title == this.foo){
        this.game = data;
      }
    });
   }

  async ngOnInit() {
    this.game = new Game();
    this.gameList = new Array<Game>();
  }

}
