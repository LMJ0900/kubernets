package com.turing.api.user;


import com.turing.api.article.Article;
import com.turing.api.board.Board;
import com.turing.api.order.Order;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity(name="users")
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @Getter
    @Setter
    @ToString(exclude = {"id"})

public class User {
    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String name;
    private String phoneNumber;
    private Long addressId;
    private String job;
    private Double height;
    private Double weight;

    @Builder(builderMethodName = "builder")
    public User(long id, String username, String password,
                String name, String phoneNumber, String job,Double height, Double weight) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.job = job;
        this.height = height;
        this.weight = weight;
    }

    @OneToMany(mappedBy = "user")
    private List<Order> orders;

    @OneToMany(mappedBy = "writer")
    private List<Article> articles;


    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", phoneNumber=" + phoneNumber +
                ", address='" + addressId + '\'' +
                ", job='" + job + '\'' +
                ", height=" + height +
                ", weight=" + weight +
                '}' + '\n';
    }

    public void setPassword(String password) {
        this.password = password;
    }
}