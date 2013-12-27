package by.kassirov.webstore.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import by.kassirov.webstore.domain.Image;
import by.kassirov.webstore.services.ImageService;

@Controller
public class ImageController {
	
	@Autowired
	private ImageService imageService;
	
	
	@RequestMapping( value="/addImage", method = RequestMethod.GET )
	@ResponseBody
	public boolean addImage() {
		return true;
	}
	
	@RequestMapping( value = "product/{id}/image", method = RequestMethod.GET)
	@ResponseBody
	public Image getFirstImageByProductId( @PathVariable int id ) {
		return imageService.getImageByProductId(id);
	}
	
	@RequestMapping( value = "product/{id}/images", method = RequestMethod.GET)
	@ResponseBody
	public List<Image> getImagesByProductId( @PathVariable int id ) {
		return imageService.getImagesByProductId(id);
	}
	
}
