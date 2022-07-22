import { LightningElement, track, api, wire } from 'lwc';
// import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
// import VEHICLE_TEAM_MEMBER_OBJECT from '@salesforce/schema/Vehicle_Team_Member__c';
// import TEAM_MEMBER_FIELD from '@salesforce/schema/Vehicle_Team_Member__c.Vehicle_Team_Member_Role__c';

export default class VehicleTeamMemberModal extends LightningElement {
    @api isModalOpen = false;
    memberRol;

    // @wire(getObjectInfo, { objectApiName: VEHICLE_TEAM_MEMBER_OBJECT })
    // vehicleTeamMemberMetadata;

    // @wire(getPicklistValues, { recordTypeId: '$vehicleTeamMemberMetadata.data.defaultRecordTypeId', fieldApiName: TEAM_MEMBER_FIELD })
    // teamMemberPicklist;

    closeModal1() {
        this.isModalOpen = false;
        this.throughEvent();
    }
    
    submitDetails() {
        //this.isModalOpen = false;
        this.closeModal();
        //this.throughEvent();
    }

    submitDetails1() {
        this.isModalOpen = false;
        this.throughEvent();
    }

    throughEvent() {
        const closeModal = new CustomEvent('closeModal', {detail : false, bubbles :true});
        this.dispatchEvent(closeModal);
    }

    onChangeHandler(event) {
        if (event.target.name == 'memberRol') {
            this.memberRol = event.target.value;
        } 
    }
}