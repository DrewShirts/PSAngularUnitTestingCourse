import {HeroesComponent} from "./heroes.component";

describe(' HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'Wonderful Woman', strength: 24},
      {id: 3, name: 'SuperDude', strength: 55}
    ];

    component = new HeroesComponent({});
  });

});
