package by.kassirov.webstore.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import by.kassirov.webstore.dao.ImageDao;
import by.kassirov.webstore.domain.Image;

@Repository
public class ImageDaoImpl implements ImageDao {
	
	private MongoOperations mongoOperations;
	
	@Autowired
	public void setMongoOperations(MongoTemplate mongoTemplate) {
		this.mongoOperations = (MongoOperations) mongoTemplate;
	}
	
	@Override
	public List<Image> readImagesByProductId(int id) {
		Query query = new Query();
		query.addCriteria(Criteria.where("productId").is(id));
		return (List<Image>)mongoOperations.find(query, Image.class);
//		return mongoOperations.findAll(Image.class);
	}

	@Override
	public Image readImageByProductId(int id) {
		Query query = new Query(Criteria.where("productId").is(id));
		return mongoOperations.findOne(query, Image.class);
	}

	@Override
	public void createImage(Image image) {
		//mongoOperations.save(image);
		mongoOperations.insert(image);
		
	}

}
