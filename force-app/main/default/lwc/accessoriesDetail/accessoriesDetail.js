import { LightningElement } from 'lwc';

export default class AccessoriesDetail extends LightningElement {
    _selected = [];

    get options() {
        return [
            { label: 'Alarm', value: 'Alarm' },
            { label: 'Air bag (sides)', value: 'Air bag (sides)' },
            { label: 'ABS brakes', value: 'ABS brakes' },
            { label: 'Parking sensors', value: 'Parking sensors' },
            { label: 'Double air conditioning', value: 'Double air conditioning' },
            { label: 'Sport seats', value: 'Sport seats' },
            { label: 'leather seats', value: 'leather seats' },
            { label: 'Heating', value: 'Heating' },
            { label: 'CD player', value: 'CD player' },
            { label: 'Semi hydraulic guide', value: 'Semi hydraulic guide' },
            { label: 'Factory painting', value: 'Factory painting' },
        ];
    }

    get selected() {
        return this._selected.length ? this._selected : 'none';
    }

    onChangeHandler(event) {
        if (event.target.name == 'accessories') {
            this._selected = event.target.value;
        }
    }
}