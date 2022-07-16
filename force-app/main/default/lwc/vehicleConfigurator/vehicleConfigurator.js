import { LightningElement, track } from 'lwc';

export default class VehicleConfigurator extends LightningElement {
    selectedItem = 'general_data';
    currentContent = 'general_data';

    get isGeneralDataSelect() {
        return this.currentContent == 'general_data';
    }

    get isElectricVehicleSelect() {
        return this.currentContent == 'electric_vehicle';
    }

    get isAccessoriesSelect() {
        return this.currentContent == 'accessories';
    }

    get isObservationsSelect() {
        return this.currentContent == 'observations';
    }

    get isVehicleTeamMemberSeelct() {
        return this.currentContent == 'vehicle_team_member';
    }

    get isPhotoSelect() {
        return this.currentContent == 'photo';
    }

    handleSelect(event) {
        const selected = event.detail.name;
        this.currentContent = selected;
    }
}