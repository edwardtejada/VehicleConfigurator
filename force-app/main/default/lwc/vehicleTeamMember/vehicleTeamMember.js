import { LightningElement, api, wire, track } from 'lwc';
import getVehicleTeamMember from '@salesforce/apex/VehicleTeamMemberController.getVehicleTeamMember';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { deleteRecord } from 'lightning/uiRecordApi';

export default class VehicleTeamMember extends LightningElement {
    vehicleTeamMemberId;
    @api recordId = 'a048Z00000l1S50QAE';
    @track lstAllTeamMember = [];

    connectedCallback() {
        getVehicleTeamMember({ vehicleId: this.recordId }).then(result => {           
            this.lstAllTeamMember = result;
        }).catch(error => {
            console.error(`Error getting file ${error}`);
            this.toastMessage('ERROR', error, 'error');
        })
    }
    
    deleteHandler(event) {
        if (isNaN(event.target.dataset.id)) {
            this.vehicleTeamMemberId = event.target.dataset.id;
            this.deleteFile();
        }
    }

    deleteFile() {
        deleteRecord(this.vehicleTeamMemberId).then(() => {
            this.toastMessage('Success', 'File deleted', 'success');
            this.connectedCallback();
        }).catch(error => {
            console.error(`Error deleting file ${error}`);
            this.toastMessage('Error deleting file', error.body.message, 'error');
        });
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