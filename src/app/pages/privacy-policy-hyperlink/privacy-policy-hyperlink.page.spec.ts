import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrivacyPolicyHyperlinkPage } from './privacy-policy-hyperlink.page';

describe('PrivacyPolicyHyperlinkPage', () => {
  let component: PrivacyPolicyHyperlinkPage;
  let fixture: ComponentFixture<PrivacyPolicyHyperlinkPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyHyperlinkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyPolicyHyperlinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
