package com.sbelodon.demo.blog.entity;

import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "BLOG_ITEM")
public class BlogItem {
    @Id
    @SequenceGenerator(name = "blogItemSeq",sequenceName="BLOG_ITEM_SEQ")
    @GeneratedValue(generator="blogItemSeq")
    @Column(name = "blog_item_id")
    private int id;

    @Column(name = "image")
    @Lob
    //@Type(type="org.hibernate.type.BinaryType")
    private byte[] image;

    @Column(name = "category")
    private String category;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    @Lob
    private String description;

    @Column(name = "version")
    private Integer version;
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

}
