import { Component } from '@angular/core';
import { SaleVersionCode } from '../../models/sale-version-code';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flex-inputs',
  imports: [FormsModule],
  templateUrl: './flex-inputs.component.html',
  styleUrl: './flex-inputs.component.scss',
})
export class FlexInputsComponent {
  selectedSaleVersionCode: SaleVersionCode = {
    salesCode: '',
    versionCode: '',
  };
  allSalesCodes = ['10', '20', '30'];
  allVersionCodes = ['1', '2', '3'];
}
