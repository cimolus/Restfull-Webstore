package by.kassirov.webstore.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import by.kassirov.webstore.dao.ImageDao;
import by.kassirov.webstore.domain.Image;
import by.kassirov.webstore.services.ImageService;

@Service
public class ImageServiceImpl implements ImageService {
	
	@Autowired
	private ImageDao imageDao;

	@SuppressWarnings("unchecked")
	@Override
	public List<Image> getImagesByProductId(int id) {
		return imageDao.readImagesByProductId(id);
	}

	@Override
	public Image getImageByProductId(int id) {
		return imageDao.readImageByProductId(id);
	}

	@Override
	public void addImage(Image image) {
		imageDao.createImage(image);
	}
	
}
