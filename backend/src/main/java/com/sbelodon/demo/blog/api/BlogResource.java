package com.sbelodon.demo.blog.api;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sbelodon.demo.blog.dao.BlogDao;
import com.sbelodon.demo.blog.entity.BlogItem;

@RestController
@RequestMapping("/blog") 
public class BlogResource {
    @Autowired
    private BlogDao blogDao;

    @GetMapping(path="/{id}")
    public ResponseEntity<BlogItem> getBlogItemById(@PathVariable("id")Integer id) {
        return new ResponseEntity<>(blogDao.getBlogItemById(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<BlogItem>> getAll() {
        return new ResponseEntity<>(blogDao.getAllBlogItems(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Integer> add(@RequestBody BlogItem blogItem) {
       Integer savedId = blogDao.save(blogItem);
       return new ResponseEntity<Integer>(savedId, HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity<Void> update(@RequestBody BlogItem blogItem) {
    	blogDao.update(blogItem);
       return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
