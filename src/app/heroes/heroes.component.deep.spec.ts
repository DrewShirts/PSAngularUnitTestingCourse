import {Component, Input, NO_ERRORS_SCHEMA} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing"
import {of} from "rxjs";
import {HeroService} from "../hero.service";
import {HeroComponent} from "../hero/hero.component";
import {HeroesComponent} from "../heroes/heroes.component";

describe('HeroesComponent (deep tests)', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'Wonderful Woman', strength: 24},
      {id: 3, name: 'SuperDude', strength: 55}
    ];
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        HeroComponent
      ],
      providers: [
        { provide: HeroService, useValue: mockHeroService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroesComponent);
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
  });

  it('should be true', () => {
    expect(true).toBe(true);
  });

});
