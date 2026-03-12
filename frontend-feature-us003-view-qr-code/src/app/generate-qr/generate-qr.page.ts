import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-qr',
  templateUrl: 'generate-qr.page.html',
  styleUrls: ['generate-qr.page.scss'],
  standalone: false,
})
export class GenerateQrPage {
  public myQrCodeData: string = 'authorization';
  
  // Hardcoded value - will be forced to uppercase in UI
  private rawUserName: string = 'Juan Dela D. Cruz';
  private fullAccountNumber: string = '1234567890122321';

  constructor() {}

  /**
   * Automatically converts the name to uppercase for the UI
   */
  get userName(): string {
    return this.rawUserName.toUpperCase();
  }

  /**
   * Masks account number: ****** 2321
   */
  get maskedAccountNumber(): string {
    const lastFour = this.fullAccountNumber.slice(-4);
    return `****** ${lastFour}`;
  }
}