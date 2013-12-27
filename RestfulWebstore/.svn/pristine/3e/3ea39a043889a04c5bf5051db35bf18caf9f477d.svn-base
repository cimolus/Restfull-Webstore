package by.kassirov.webstore.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import by.kassirov.webstore.domain.Comment;
import by.kassirov.webstore.services.CommentService;

@Controller
public class CommentController {
	
	@Autowired
	private CommentService commentService;
	
	@RequestMapping(value = "/product/{productId}/comments")
	public @ResponseBody List<Comment> getCommentsByProductId(@PathVariable int productId ) {
		return commentService.readCommentsByProductId(productId);
	}
	
	
	@RequestMapping( value="/product/comment/add" )
	@ResponseBody
	public boolean addComment(@RequestParam Comment comment) {
		commentService.addComment(comment);
		return true;
	}
		
	
}
