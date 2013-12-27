package by.kassirov.webstore.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;









import by.kassirov.webstore.domain.Basket;
import by.kassirov.webstore.domain.Product;
import by.kassirov.webstore.services.ProductService;


@Controller
public class BasketController {
	
	private static final Logger logger = LoggerFactory.getLogger(BasketController.class);
	
	@Autowired
	private ProductService productService;
	
	@RequestMapping(value="/basket", method = RequestMethod.GET)
	@ResponseBody
	public List<Product> getProductsInBasket(@RequestParam int[] productsId ) {
		 return productService.getProducts(productsId);
	}
	
	
}
