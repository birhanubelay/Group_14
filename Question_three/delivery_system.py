class DeliveryOrder:
   def __init__(self, address, is_urgent):
       self.address = address
       self.is_urgent = is_urgent

class Vehicle:
   def __init__(self, id, location, capacity):
       self.id = id
       self.location = location
       self.capacity = capacity
       self.assigned_orders = []

def assign_orders_to_vehicles(orders, vehicles):
   orders.sort(key=lambda o: o.is_urgent, reverse=True)
   for order in orders:
       vehicle = min(vehicles, key=lambda v: len(v.assigned_orders))
       if len(vehicle.assigned_orders) < vehicle.capacity:
           vehicle.assigned_orders.append(order)

orders = [DeliveryOrder("Address 1", True), DeliveryOrder("Address 2", False), DeliveryOrder("Address 3", True)]
vehicles = [Vehicle(1, "Depot", 2), Vehicle(2, "Depot", 2)]
assign_orders_to_vehicles(orders, vehicles)
for v in vehicles:
   print(f"Vehicle {v.id}: {[o.address for o in v.assigned_orders]}")
