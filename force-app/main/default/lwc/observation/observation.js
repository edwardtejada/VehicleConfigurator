import { LightningElement } from 'lwc';

export default class Observation extends LightningElement {
    myVal = '<b>Hello!</b>';

    handleChange(event) {
        this.myVal = event.target.value;
    }
}