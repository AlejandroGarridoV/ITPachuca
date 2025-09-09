import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosReferencia } from './documentos-referencia';

describe('DocumentosReferencia', () => {
  let component: DocumentosReferencia;
  let fixture: ComponentFixture<DocumentosReferencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentosReferencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosReferencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
