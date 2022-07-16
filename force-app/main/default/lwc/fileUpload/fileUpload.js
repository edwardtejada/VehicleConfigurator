import { LightningElement, api, track } from 'lwc';
import getFiles from '@salesforce/apex/FileUploadController.getFiles';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { deleteRecord } from 'lightning/uiRecordApi';

export default class FileUpload extends LightningElement {
    @api recordId = 'a048Z00000l1S50QAE';
    @track lstAllFiles = [];
    contentDocumentId;
    imgUrl = `https://fastdata6-dev-ed.lightning.force.com/sfc/servlet.shepherd/document/download/0698Z00000PZE1tQAH`;

    get acceptedFormats() {
        return ['.png', '.jpg', '.jpeg'];
    }
 
    handleUploadFinished(event) {
        this.connectedCallback();
    }
 
    connectedCallback() {
        getFiles({ recordId: this.recordId }).then(result => {           
            const mapResult = result.map(function(element) {
                element.imgUrl = `https://fastdata6-dev-ed.lightning.force.com/sfc/servlet.shepherd/document/download/${element.ContentDocumentId}`;
                return element;
            });

            this.lstAllFiles = mapResult;
        }).catch(error => {
            console.error(`Error getting file ${error}`);
            this.toastMessage('ERROR', error, 'error');
        })
    }

    deleteHandler(event) {
        if (isNaN(event.target.dataset.id)) {
            this.contentDocumentId = event.target.dataset.id;
            console.log(`contentDocumentId : ${this.contentDocumentId}`);
            this.deleteFile();
        }
    }

    deleteFile() {
        deleteRecord(this.contentDocumentId).then(() => {
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