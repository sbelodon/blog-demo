package com.sbelodon.demo.blog.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "BLOG_ITEM")
public class BlogItem {
    @Id
    @SequenceGenerator(name = "BLOG_ITEM_SEQ")
    @Column(name = "blog_item_id")
    private int id;

    @Column(name = "image")
    @Lob
    private byte[] image;

    @Column(name = "category")
    private String category;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    @Lob
    private String description;

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
