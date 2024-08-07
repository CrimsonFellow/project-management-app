import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCreationComponent } from './client-creation.component';

describe('ClientCreationComponent', () => {
  let component: ClientCreationComponent;
  let fixture: ComponentFixture<ClientCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
