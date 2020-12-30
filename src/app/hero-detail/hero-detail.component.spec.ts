import {Location} from '@angular/common';
import {ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick} from "@angular/core/testing";
import {FormsModule} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {of} from 'rxjs';
import {HeroService} from "../hero.service";
import {HeroDetailComponent} from "./hero-detail.component";

describe('HeroDetailComponent', () => {
  let fixture: ComponentFixture<HeroDetailComponent>;
  let mockActivatedRoute, mockHeroService, mockLocation;

  beforeEach(() => {
    mockActivatedRoute = {
      snapshot: { paramMap: { get: () => { return '3'; }}}
    };
    mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
    mockLocation = jasmine.createSpyObj(['back']);

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeroDetailComponent],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: HeroService, useValue: mockHeroService},
        {provide: Location, useValue: mockLocation}
      ]
    });
    fixture = TestBed.createComponent(HeroDetailComponent);

    mockHeroService.getHero.and.returnValue(of({id: 3, name: 'SuperDude', strength: 100}));
  });

  it('shoud render hero name in a h2 tag', () => {
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPERDUDE');
  });

  it('should call updateHero when save is called', fakeAsync(() => {
    mockHeroService.updateHero.and.returnValue(of({}));
    fixture.detectChanges();

    fixture.componentInstance.save();
    // tick(250);
    flush();

    expect(mockHeroService.updateHero).toHaveBeenCalled();
  }));
});
