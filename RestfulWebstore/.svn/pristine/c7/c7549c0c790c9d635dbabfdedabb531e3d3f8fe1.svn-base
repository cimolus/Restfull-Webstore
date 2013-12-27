package by.kassirov.webstore.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import by.kassirov.webstore.dao.ProductDao;
import by.kassirov.webstore.domain.Product;
import by.kassirov.webstore.services.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDao productDao;

	@Override
	@Transactional
	public List<Product> getAllProducts() {
		return productDao.readAllProducts();
	}

	@Override
	@Transactional
	public Product getProductById(int id) {
		return productDao.readProductById(id);
	}

	@Override
	@Transactional
	public List<Product> getRatingProducts(int count) {
		return productDao.readTopRatingProducts(count);
	}

	@Override
	@Transactional
	public List<Product> getProducts(int[] productsId) {
		List<Integer> products = new ArrayList<Integer>();
		for(int i = 0; i < productsId.length; i++ ) {
			products.add(productsId[i]);
		}
		return productDao.readProducts(products);
	}

	@Override
	@Transactional
	public List<Product> getSearchingProducts(String pattern) {
		return productDao.searchProduct("%" + pattern + "%");
	}

	@Override
	@Transactional
	public List<Product> getProductsOnPage(int pageNumber, int pageSize) {
		return productDao.readProductsOnPage(pageNumber, pageSize);
	}

	@Override
	@Transactional
	public long getCountOfProducts() {
		return productDao.readCountOfProduct();
	}

}
