import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GameViewPage } from './game-view.page';

describe('GameViewPage', () => {
  let component: GameViewPage;
  let fixture: ComponentFixture<GameViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GameViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
