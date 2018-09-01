package com.sbelodon.demo.blog.api;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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

    @GetMapping(path = "/")
    public ResponseEntity<List<BlogItem>> getAll() {
        Map<String, List<BlogItem>> map = new HashMap<>();
        return new ResponseEntity<>(blogDao.getAllBlogItems(), HttpStatus.OK);
    }
    @PostMapping(path = "/")
    public ResponseEntity<BlogItem> add(@RequestBody BlogItem blogItem) {
       BlogItem savedItem = blogDao.save(blogItem);
       return new ResponseEntity<BlogItem>(savedItem, HttpStatus.OK);
    }
    
    @PutMapping(path = "/")
    public ResponseEntity<BlogItem> update(@RequestBody BlogItem blogItem) {
       blogDao.update(blogItem);
       return new ResponseEntity<BlogItem>(blogItem, HttpStatus.OK);
    }
}
