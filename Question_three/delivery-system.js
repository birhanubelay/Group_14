class DeliveryOrder {
   constructor(address, isUrgent) {
       this.address = address;
       this.isUrgent = isUrgent;
   }
}

class Vehicle {
   constructor(id, location, capacity) {
       this.id = id;
       this.location = location;
       this.capacity = capacity;
       this.assignedOrders = [];
   }
}

function assignOrdersToVehicles(orders, vehicles) {
    orders.sort((a, b) => b.isUrgent - a.isUrgent);
   for (let order of orders) {
        let vehicle = vehicles.sort((v1, v2) => v1.assignedOrders.length - v2.assignedOrders.length)[0];
       if (vehicle.assignedOrders.length < vehicle.capacity) {
           vehicle.assignedOrders.push(order);
       }
   }
}
let orders = [
   new DeliveryOrder("Address 1", true),
   new DeliveryOrder("Address 2", false),
   new DeliveryOrder("Address 3", true)
];
let vehicles = [new Vehicle(1, "Depot", 2), new Vehicle(2, "Depot", 2)];
assignOrdersToVehicles(orders, vehicles);
console.log(vehicles);
