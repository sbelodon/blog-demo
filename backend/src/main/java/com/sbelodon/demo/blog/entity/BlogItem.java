package com.sbelodon.demo.blog.entity;

import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
@Table(name = "BLOG_ITEM")
public class BlogItem {
    @Id
    @TableGenerator(
            name = "blogItemGenerator",
            table = "ID_TABLE",
            pkColumnName = "pk",
            valueColumnName = "value",
            pkColumnValue = "blogItem")
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "blogItemGenerator")
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

    @Column(name = "version")
    @Version
    private Integer version;

    @Column(name = "user_id")
    private String userId;

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

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
