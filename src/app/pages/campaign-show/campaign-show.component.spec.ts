import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignShowComponent } from './campaign-show.component';

describe('CampaignShowComponent', () => {
  let component: CampaignShowComponent;
  let fixture: ComponentFixture<CampaignShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
