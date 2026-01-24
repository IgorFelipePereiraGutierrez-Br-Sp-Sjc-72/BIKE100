//alert('Hello World');


class BIKEIG_INDEX {
    // Constructor method for initializing object properties
    constructor(manufacturer, model) {
        this.manufacturer = manufacturer;
        this.model = model;
    }

    displayDetails() {
        alert(myBike.manufacturer + ' ' + myBike.model);
    }
}

var myBike = new BIKEIG_INDEX('Caloi', 'BIKE100');
myBike.displayDetails();