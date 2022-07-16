import { LightningElement, track } from 'lwc';
import { years, hours } from 'c/vehicleUtils';

export default class ElectricVehicle extends LightningElement {
    loadingTimeValue120v;
    loadingTimeValue240v;
    batteryWarranty;

    @track loadingTimeOptions = hours;
    @track batteryWarrantyOptions = years;

    onChangeHandler(event) {
        if (event.target.name == '120vLoadingTime') {
            this.loadingTimeValue120v = event.target.value;
        } else if (event.target.name == '240vLoadingTime') {
            this.loadingTimeValue240v = event.target.value;
        } else if (event.target.name == 'batteryWarranty') {
            this.batteryWarranty == event.target.value;
        }
    }
}