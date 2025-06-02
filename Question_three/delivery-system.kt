data class DeliveryOrder(val address: String, val isUrgent: Boolean)
data class Vehicle(val id: Int, val location: String, val capacity: Int, val assignedOrders: MutableList<DeliveryOrder> = mutableListOf())

fun assignOrdersToVehicles(orders: List<DeliveryOrder>, vehicles: List<Vehicle>) {
   val sortedOrders = orders.sortedByDescending { it.isUrgent }
   for (order in sortedOrders) {
       val vehicle = vehicles.minByOrNull { it.assignedOrders.size }!!
       if (vehicle.assignedOrders.size < vehicle.capacity) {
           vehicle.assignedOrders.add(order)
       }
   }
}
