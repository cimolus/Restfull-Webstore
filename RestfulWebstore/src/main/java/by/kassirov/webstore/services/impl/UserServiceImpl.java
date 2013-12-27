package by.kassirov.webstore.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import by.kassirov.webstore.dao.UserDao;
import by.kassirov.webstore.domain.User;
import by.kassirov.webstore.services.UserService;


@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao;
	
	@Override
	@Transactional
	public void createUser(User user) {
		userDao.createUser(user);
		
	}

	@Override
	@Transactional
	public User getUserByUsername(String username) {
		return userDao.readUserByUsername(username);
	}

	@Override
	@Transactional
	public List<User> getAllUsers() {
		return userDao.readAllUsers();
	}

	@Override
	@Transactional
	public void updateUser(User user) {
		userDao.updateUser(user);
	}

	@Override
	@Transactional
	public void deleteUser(String username) {
		userDao.deleteUser(username);
		
	}

}
