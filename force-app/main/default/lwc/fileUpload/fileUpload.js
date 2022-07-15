import { LightningElement, api, track } from 'lwc';
// import fetchFiles from '@salesforce/apex/Fileuploadcttrl.fetchFiles';

export default class FileUpload extends LightningElement {
    @api recordId;
    @track lstAllFiles;
    error;

    get acceptedFormats() {
        return ['.pdf','.png','.jpg'];
    }
 
    handleUploadFinished(event) {
        this.connectedCallback();
    }
 
    connectedCallback() {
        // fetchFiles({recordId: this.recordId}).then(result => {
        //     this.lstAllFiles = result; 
        //     this.error = undefined;
        // }).catch(error => {
        //     this.lstAllFiles = undefined; 
        //     this.error = error;
        // })
    }
}