package by.kassirov.webstore.services;

import java.util.List;

import by.kassirov.webstore.domain.Product;

public interface ProductService {
	
	public List<Product> getAllProducts();
	public Product getProductById(int id);
	public List<Product> getRatingProducts(int count);
	public List<Product> getProducts(int[] productsId);
	public List<Product> getSearchingProducts(String pattern);
	public List<Product> getProductsOnPage(int pageNumber, int pageSize);
	public long getCountOfProducts();
	
}
