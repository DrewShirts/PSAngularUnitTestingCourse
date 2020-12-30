import {ComponentFixture, TestBed} from "@angular/core/testing"
import {HeroesComponent} from "../heroes/heroes.component";

describe('HeroesComponent (shallow tests)', () => {
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent]
    });
    fixture = TestBed.createComponent(HeroesComponent);
  });

});
