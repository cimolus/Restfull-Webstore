package by.kassirov.webstore.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import by.kassirov.webstore.domain.Product;
import by.kassirov.webstore.services.ProductService;

@Controller
public class ProductController {

	@Autowired
	private ProductService productService;

	@RequestMapping(value = "/product/{id}", method = RequestMethod.GET)
	@ResponseBody 
	public Product getProductById(@PathVariable int id ) {
		return productService.getProductById(id);
	}

	@RequestMapping(value = "/products", method = RequestMethod.GET)
	@ResponseBody
	public List<Product> getProducts() {
		return productService.getAllProducts();
	}
	
	@RequestMapping(value = "/product/find/{pattern}", method = RequestMethod.GET)
	@ResponseBody
	public List<Product> getFindProducts( @PathVariable String pattern ) {
		return productService.getSearchingProducts(pattern);
	}
	
	@RequestMapping( value = "/product/page/{page}/size/{size}" , method = RequestMethod.GET )
	@ResponseBody
	public List<Product> getProductOnPage(@PathVariable int page , @PathVariable int size) {
		return productService.getProductsOnPage(page, size);
	}
	
	@RequestMapping( value = "/product/count/page/{productsOnPage}" , method = RequestMethod.GET)
	@ResponseBody
	public long getCountOfProduct( @PathVariable int productsOnPage ) {
		long count = productService.getCountOfProducts();
		if ( count % productsOnPage == 0 ) {
			return count / productsOnPage;
		} else return count / productsOnPage + 1;
	}
	
}
