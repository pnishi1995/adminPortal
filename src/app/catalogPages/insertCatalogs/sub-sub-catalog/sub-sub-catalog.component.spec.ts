import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSubCatalogComponent } from './sub-sub-catalog.component';

describe('SubSubCatalogComponent', () => {
  let component: SubSubCatalogComponent;
  let fixture: ComponentFixture<SubSubCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSubCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSubCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
