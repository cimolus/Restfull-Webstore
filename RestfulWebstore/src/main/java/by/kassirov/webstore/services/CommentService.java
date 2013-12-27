package by.kassirov.webstore.services;

import java.util.List;

import by.kassirov.webstore.domain.Comment;

public interface CommentService {
	public void addComment(Comment comment);
	public List<Comment> readCommentsByProductId(int id);
}
