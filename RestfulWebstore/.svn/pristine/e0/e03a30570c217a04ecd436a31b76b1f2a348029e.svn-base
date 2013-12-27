package by.kassirov.webstore.dao.impl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projection;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import by.kassirov.webstore.dao.ProductDao;
import by.kassirov.webstore.domain.Product;


@Repository
public class ProductDaoImpl implements ProductDao {
        
        @Autowired
        public SessionFactory sessionFactory;

        @Override
        public void createProduct(Product product) {
                sessionFactory.getCurrentSession().save(product);
        }

        @Override
        @SuppressWarnings("unchecked")
        public List<Product> readAllProducts() {
                return sessionFactory.getCurrentSession().createCriteria(Product.class).list();
        }
        
        @SuppressWarnings("unchecked")
        @Override
        public List<Product> readTopRatingProducts(int count) {
                return sessionFactory.getCurrentSession().createCriteria(Product.class)
                                .setMaxResults(count)
                                .addOrder(Order.desc("rating"))
                                .list();
        }

        @Override
        public Product readProductById(int id) {
                return (Product) sessionFactory.getCurrentSession().get(Product.class, id);
        }

        @Override
        public void updateProduct(Product product) {
                sessionFactory.getCurrentSession().update(product);
                
        }

        @Override
        public void deleteProduct(Product product) {
                sessionFactory.getCurrentSession().delete(product);
        }

        @SuppressWarnings("unchecked")
        @Override
        public List<Product> readProducts(List<Integer> params) {
                return sessionFactory.getCurrentSession().createCriteria(Product.class)
                        .add(Restrictions.in("id", params)).list();
        }

        @SuppressWarnings("unchecked")
        @Override
        public List<Product> searchProduct(String pattern) {
                return sessionFactory.getCurrentSession().createCriteria(Product.class)
                                .add(Restrictions.like("name", pattern))
                                .add(Restrictions.like("detaileDescription", pattern))
                                .list();
        }

		@SuppressWarnings("unchecked")
		@Override
		public List<Product> readProductsOnPage(int pageNumber, int pageSize) {
			return (List<Product>) sessionFactory.getCurrentSession().createCriteria(Product.class)
					.setFirstResult((pageNumber - 1) * pageSize )
					.setMaxResults(pageSize)
					.list();
		}

		@Override
		public long readCountOfProduct() {
			return  (Long) sessionFactory.getCurrentSession().createCriteria(Product.class)
					.setProjection(Projections.rowCount()).uniqueResult();
		}
		
}