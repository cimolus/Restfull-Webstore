package by.kassirov.webstore.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "comments")
public class Comment {
	
        @Id
        private int id;
        
        private String text;
        
        private String author;
        
        private int productId;
        
        public Comment() {
                
        }
        
        public Comment(int productId) {
                this.setProductId(productId);
        }
        
        public int getId() {
                return id;
        }

        public void setId(int id) {
                this.id = id;
        }

        public String getText() {
                return text;
        }

        public void setText(String text) {
                this.text = text;
        }

        public String getAuthor() {
                return author;
        }

        public void setAuthor(String author) {
                this.author = author;
        }

		public int getProductId() {
			return productId;
		}

		public void setProductId(int productId) {
			this.productId = productId;
		}
        
        
        
        
}