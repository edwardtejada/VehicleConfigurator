import { LightningElement } from 'lwc';

export default class VehicleDetail extends LightningElement {
    exteriorValue = 'Blue';
    insideValue = 'Red';
    gasValue = 'Gasoline';

    get colorOptions() {
        return [ 
            { label: 'Blue', value: 'Blue' },
            { label: 'Red', value: 'Red' },
            { label: 'Black', value: 'Black' },
        ];
    }

    get gasOptions() {
        return [ 
            { label: 'Liquid gas', value: 'Liquid gas' },
            { label: 'Gasoline', value: 'Gasoline' },
        ];
    }

    get aa() {
        return [];
    }

    onChangeHandler(event) {
        if (event.target.name == 'exterior') {
            this.exteriorValue = event.target.value;
        } else if (event.target.name == 'inside') {
            this.insideValue = event.target.value;
        } else if (event.target.name == 'gas') {
            this.gasValue = event.target.value;
        }
    }
}