import {Component, Input, NO_ERRORS_SCHEMA} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing"
import {of} from "rxjs";
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {HeroesComponent} from "../heroes/heroes.component";

describe('HeroesComponent (shallow tests)', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES;

  @Component({
    selector: 'app-hero',
    template: '<div></div>'
  })
  class FakeHeroComponent {
    @Input() hero: Hero;
    // @Output() delete = new EventEmitter();
  }

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
        FakeHeroComponent
      ],
      providers: [
        { provide: HeroService, useValue: mockHeroService}
      ],
      // schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should set heroes correctly from the service', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();

    expect(fixture.componentInstance.heroes.length).toBe(3);
  });

});
