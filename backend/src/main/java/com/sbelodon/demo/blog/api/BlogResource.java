package com.sbelodon.demo.blog.api;

import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.core.JsonFactory;
import com.sbelodon.demo.blog.dao.BlogDao;
import com.sbelodon.demo.blog.dto.BlogItemDTO;
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
    @ResponseBody
    public ResponseEntity<Integer> add(@RequestBody BlogItemDTO blogItemDTO) throws IOException {
    	BlogItem blogItem=new BlogItem();
    	setFields(blogItemDTO, blogItem);
    	if(blogItemDTO.getImage() != null) {
    		blogItem.setImage(Base64.getDecoder().decode(blogItemDTO.getImage()));
    	}
       Integer savedId = blogDao.save(blogItem);
       return new ResponseEntity<Integer>(savedId, HttpStatus.OK);
    }

	private void setFields(BlogItemDTO blogItemDTO, BlogItem blogItem) {
		blogItem.setCategory(blogItemDTO.getCategory());
    	blogItem.setTitle(blogItemDTO.getTitle());
    	blogItem.setDescription(blogItemDTO.getDescription());
    	blogItem.setVersion(blogItemDTO.getVersion());
	}
    @PutMapping
    @ResponseBody
    public ResponseEntity<Integer> update(@RequestBody BlogItemDTO blogItemDTO) throws IOException {
    	BlogItem blogItem=new BlogItem();
    	blogItem.setId(blogItemDTO.getId());
    	setFields(blogItemDTO, blogItem);
    	if(blogItemDTO.getImage() != null) {
    		blogItem.setImage(Base64.getDecoder().decode(blogItemDTO.getImage()));
    	}else {
    		blogItem.setImage(blogDao.getBlogItemImageByBlogId(blogItemDTO.getId()).getImage());
    	}
    	blogDao.update(blogItem);
       return new ResponseEntity<Integer>(0,HttpStatus.OK);
    }
	@DeleteMapping(path="/{id}")
	@ResponseBody
    public ResponseEntity<Integer> delete(@PathVariable("id")Integer id) {
    	Integer updatedCount=blogDao.delete(id);
    	return new ResponseEntity<Integer>(updatedCount,HttpStatus.OK);
    }
}
