import { api, LightningElement, track, wire } from 'lwc';
import getAccessories from '@salesforce/apex/AccessoryController.getAccessories';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class AccessoriesDetail extends LightningElement {
    @api recordId = 'a048Z00000l1S50QAE';
    _selected = [];
    @track options = [];

    get selected() {
        return this._selected ? this._selected : 'none';
    }

    @wire(getAccessories, { vehicleId: '$recordId' })
    wiredGetAccessories({error, data}) {
        if (data) {
            this.options = data.AccessoryOptions;
            this._selected = data.Accessories;
        }
        else if (error) {
            console.error(`Error getting accessory ${error}`);
            this.toastMessage('ERROR', error, 'error');
        }
    }

    onChangeHandler(event) {
        if (event.target.name == 'accessories') {
            this._selected = event.target.value;
        }
    }

    toastMessage(title, message, variant) {
        const toastEvent = new ShowToastEvent({
            title : title,
            message : message,
            variant : variant,
        });
        this.dispatchEvent(toastEvent);
    }
}