import { LightningElement } from 'lwc';

export default class BikeCard extends LightningElement {
    name = 'Electra X4';
    description = 'Uma otima bicicleta para seu conforto.';
    category = 'Cross';
    material = 'Metal';
    price = '2.700,00';
    pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
}