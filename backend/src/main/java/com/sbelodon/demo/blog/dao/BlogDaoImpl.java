package com.sbelodon.demo.blog.dao;

import com.sbelodon.demo.blog.entity.BlogItem;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManagerFactory;
import java.util.List;

@Repository
@Transactional
public class BlogDaoImpl implements BlogDao {
    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @SuppressWarnings("unchecked")
    public List<BlogItem> getAllBlogItems(String userId) {
        SessionFactory sessionFactory = entityManagerFactory.unwrap(SessionFactory.class);
        Session session = sessionFactory.getCurrentSession();
        return (List<BlogItem>) session.createQuery("from BlogItem where userId=:userId").setString("userId",userId).list();
    }

    public BlogItem getBlogItemImageByBlogId(Integer id) {
        SessionFactory sessionFactory = entityManagerFactory.unwrap(SessionFactory.class);
        Session session = sessionFactory.getCurrentSession();
        Query query = session.createQuery("from BlogItem bi where bi.id=:id").setInteger("id", id);
        return (BlogItem) query.uniqueResult();
    }

    public Integer save(BlogItem blogItem) {
        SessionFactory sessionFactory = entityManagerFactory.unwrap(SessionFactory.class);
        Session session = sessionFactory.getCurrentSession();
        Integer savedId = (Integer) session.save(blogItem);
        session.flush();
        return savedId;
    }

    public void update(BlogItem blogItem) {
        SessionFactory sessionFactory = entityManagerFactory.unwrap(SessionFactory.class);
        Session session = sessionFactory.getCurrentSession();
        session.update(blogItem);
        session.flush();
    }

    public BlogItem getBlogItemById(Integer id) {
        SessionFactory sessionFactory = entityManagerFactory.unwrap(SessionFactory.class);
        Session session = sessionFactory.getCurrentSession();
        Query query = session.createQuery("from BlogItem bi where bi.id=:id").setInteger("id", id);
        return (BlogItem) query.uniqueResult();
    }

    public Integer delete(Integer id) {
        SessionFactory sessionFactory = entityManagerFactory.unwrap(SessionFactory.class);
        Session session = sessionFactory.getCurrentSession();
        Query query = session.createQuery("delete BlogItem bi where bi.id=:id").setInteger("id", id);
        int updatedItemsCount = query.executeUpdate();
        session.flush();
        return updatedItemsCount;
    }
}
