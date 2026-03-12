import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Added
import { QRCodeComponent } from 'angularx-qrcode';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { GenerateQrPage } from './generate-qr.page';

describe('GenerateQrPage', () => {
  let component: GenerateQrPage;
  let fixture: ComponentFixture<GenerateQrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateQrPage],
      imports: [
        IonicModule.forRoot(), 
        FormsModule, // Added for ngModel support
        ExploreContainerComponentModule,
        QRCodeComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerateQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have default QR data', () => {
    expect(component.myQrCodeData).toContain('github.com');
  });

  it('should update QR data via variable', () => {
    component.myQrCodeData = 'New Data';
    expect(component.myQrCodeData).toBe('New Data');
  });
});