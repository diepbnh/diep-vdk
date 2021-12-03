import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TermsUseHyperlinkPage } from './terms-use-hyperlink.page';

describe('TermsUseHyperlinkPage', () => {
  let component: TermsUseHyperlinkPage;
  let fixture: ComponentFixture<TermsUseHyperlinkPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsUseHyperlinkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermsUseHyperlinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
