package com.sbelodon.demo.blog.api;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sbelodon.demo.blog.dao.BlogDao;

@RestController
@RequestMapping("/image") 
public class ImageResource {
	@Autowired
    private BlogDao blogDao;

    @GetMapping(path = "/{id}")
    public @ResponseBody byte[] getImageAsByteArray(@PathVariable("id")Integer id) {
        return blogDao.getBlogItemImageByBlogId(id).getImage();
    }

}
