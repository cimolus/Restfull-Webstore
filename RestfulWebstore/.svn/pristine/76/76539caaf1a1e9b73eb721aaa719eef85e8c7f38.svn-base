package by.kassirov.webstore.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import by.kassirov.webstore.dao.CommentDao;
import by.kassirov.webstore.domain.Comment;
import by.kassirov.webstore.services.CommentService;

@Service
public class CommentServiceImpl implements CommentService {
	
	@Autowired
	private CommentDao commentDao;

	@Override
	public void addComment(Comment comment) {
		commentDao.createComment(comment);
	}

	@Override
	public List<Comment> readCommentsByProductId(int id) {
		return commentDao.readCommentByProductId(id);
	}
	
	
	
}
