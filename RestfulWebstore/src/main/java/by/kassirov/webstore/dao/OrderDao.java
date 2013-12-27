package by.kassirov.webstore.dao;

import java.util.List;

import by.kassirov.webstore.domain.Order;


public interface OrderDao {
	public void createOrder(Order order);
	public List<Order> readAllOrders();
	public Order readOrderById(int id);
	public void updateOrder(Order order);
	public void deleteOrder(Order order);
}
