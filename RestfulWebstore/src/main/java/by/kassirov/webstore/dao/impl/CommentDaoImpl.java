package by.kassirov.webstore.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import by.kassirov.webstore.dao.CommentDao;
import by.kassirov.webstore.domain.Comment;


@Repository
public class CommentDaoImpl implements CommentDao {
	
	private MongoOperations mongoOperations;
	
	@Autowired
	public void setMongoOperations(MongoTemplate mongoTemplate) {
		this.mongoOperations = (MongoOperations) mongoTemplate;
	}
	
	@Override
	public void createComment(Comment comment) {
		mongoOperations.save(comment);
		
	}

	@Override
	public void updateComment(Comment comment) {
		//mongoOperations.updateFirst(arg0, arg1, arg2)
	}

	@Override
	public void deleteComment(Comment comment) {
		mongoOperations.remove(comment);
	}

	@Override
	public List<Comment> readCommentByProductId(int id) {
		Query query = new Query(Criteria.where("productId").is(id));
		return mongoOperations.find(query, Comment.class);
	}

}
