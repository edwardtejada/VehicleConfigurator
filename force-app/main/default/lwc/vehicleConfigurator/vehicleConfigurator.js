import { LightningElement, track } from 'lwc';

export default class VehicleConfigurator extends LightningElement {
    @track selectedItem = 'reports_recent';
    @track currentContent = 'reports_recent';

    handleSelect(event) {
        const selected = event.detail.name;
        this.currentContent = selected;
    }
}