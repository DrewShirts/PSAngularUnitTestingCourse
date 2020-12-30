import {Location} from '@angular/common';
import {TestBed} from "@angular/core/testing";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";
import {HeroDetailComponent} from "./hero-detail.component";

describe('HeroDetailComponent', () => {
  let fixture, mockActivatedRoute, mockHeroService, mockLocation;

  beforeEach(() => {
    mockActivatedRoute = {
      snapshot: { paramMap: { get: () => { return '3'; }}}
    };
    mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
    mockLocation = jasmine.createSpyObj(['back']);

    TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: HeroService, useValue: mockHeroService},
        {provide: Location, useValue: mockLocation}
      ]
    });
    fixture = TestBed.createComponent(HeroDetailComponent);
  });
});
