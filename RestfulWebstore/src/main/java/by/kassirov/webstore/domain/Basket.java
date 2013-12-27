package by.kassirov.webstore.domain;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Basket {
	private Map<Integer,Product> products;
	
	public Basket() {
		products = new HashMap<Integer, Product>();
	}
	
	public boolean addProduct(Product product) {
		products.put(product.getId(), product);
		return true;
	}
	
	public boolean dropProduct(int id) {
		products.remove(id);
		return false;
	}
	
	public void clearBasket() {
		products = new HashMap<Integer, Product>();
	}
	
	public int size() {
		return products.size();
	}
	
	public boolean containsProduct(int id) {
		return products.containsKey(id);
	}
	
	public List<Product> getProducts() {
		return new ArrayList<Product>(products.values());
	}
}
