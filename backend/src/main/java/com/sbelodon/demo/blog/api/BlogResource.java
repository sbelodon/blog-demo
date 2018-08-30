package com.sbelodon.demo.blog.api;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
    public ResponseEntity<Map<String, List<BlogItem>>> getAll() {
        Map<String, List<BlogItem>> map = new HashMap<>();
        map.put("result", blogDao.getAllBlogItems());
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
}
