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


public interface BlogDao {

    public List<BlogItem> getAllBlogItems();
    
    public BlogItem getBlogItemImageByBlogId(Integer id);
    
    public Integer save(BlogItem blogItem);
    
    public void update(BlogItem blogItem) ;
    
    public BlogItem getBlogItemById(Integer id);
    
    public Integer delete(Integer id);
}
