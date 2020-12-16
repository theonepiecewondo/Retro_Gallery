import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameViewPage } from './game-view.page';

const routes: Routes = [
  {
    path: '',
    component: GameViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameViewPageRoutingModule {}
