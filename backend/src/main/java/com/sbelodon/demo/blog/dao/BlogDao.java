package com.sbelodon.demo.blog.dao;

import java.util.List;

import javax.persistence.EntityManagerFactory;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sbelodon.demo.blog.entity.BlogItem;

@Repository
@Transactional
public class BlogDao {
    @Autowired
    private EntityManagerFactory entityManagerFactory;
    
    @SuppressWarnings("unchecked")
    public List<BlogItem> getAllBlogItems(){
        SessionFactory sessionFactory = entityManagerFactory.unwrap(SessionFactory.class);
        Session session = sessionFactory.getCurrentSession();
        return (List<BlogItem>) session.createQuery("from BlogItem").list();
    }
    
    @SuppressWarnings("unchecked")
    public BlogItem getBlogItemImageByBlogId(Integer id){
    	SessionFactory sessionFactory = entityManagerFactory.unwrap(SessionFactory.class);
        Session session = sessionFactory.getCurrentSession();
        Query query = session.createQuery("from BlogItem bi where bi.id=:id").setInteger("id", id);
		return (BlogItem)query.uniqueResult();
    }
}
