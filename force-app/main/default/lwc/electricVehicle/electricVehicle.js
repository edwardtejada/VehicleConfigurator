import { LightningElement } from 'lwc';

export default class ElectricVehicle extends LightningElement {
    loadingTimeValue120v;
    loadingTimeValue240v;
    batteryWarranty;

    get loadingTimeOptions() {
        return [ 
            { label: '1 hour', value: '1 hour' },
            { label: '2 hour', value: '2 hour' },
            { label: '3 hour', value: '3 hour' },
            { label: '4 hour', value: '4 hour' },
            { label: '5 hour', value: '5 hour' },
            { label: '6 hour', value: '6 hour' },
            { label: '7 hour', value: '7 hour' },
            { label: '8 hour', value: '8 hour' },
            { label: '9 hour', value: '9 hour' },
        ];
    }

    get batteryWarrantyOptions() {
        return [ 
            { label: '1 year', value: '1 year' },
            { label: '2 year', value: '2 year' },
            { label: '3 year', value: '3 year' },
            { label: '4 year', value: '4 year' },
            { label: '5 year', value: '5 year' },
            { label: '6 year', value: '6 year' },
            { label: '7 year', value: '7 year' },
            { label: '8 year', value: '8 year' },
        ];
    }

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