package by.kassirov.webstore.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import by.kassirov.webstore.dao.OrderDao;
import by.kassirov.webstore.domain.Order;
import by.kassirov.webstore.domain.User;
import by.kassirov.webstore.services.OrderService;

@Service
public class OrderServiceImpl implements OrderService {
	
	@Autowired
	private OrderDao orderDao;
	
	@Transactional
	public void addOrder(Order order) {
		User user = (User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		order.setUser(user.getUsername());
		orderDao.createOrder(order);
	}

}
