import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GenerateQrPage } from './generate-qr.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { GenerateQrPageRoutingModule } from './generate-qr-routing.module';

// Import the standalone component from the library
import { QRCodeComponent } from 'angularx-qrcode';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GenerateQrPageRoutingModule,
    // so the HTML recognizes <qrcode>
    QRCodeComponent 
  ],
  declarations: [GenerateQrPage]
})
export class GenerateQrPageModule {}