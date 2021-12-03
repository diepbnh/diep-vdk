import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgreeTermsPrivacyPolicyPage } from './agree-terms-privacy-policy.page';

describe('AgreeTermsPrivacyPolicyPage', () => {
  let component: AgreeTermsPrivacyPolicyPage;
  let fixture: ComponentFixture<AgreeTermsPrivacyPolicyPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreeTermsPrivacyPolicyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgreeTermsPrivacyPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
