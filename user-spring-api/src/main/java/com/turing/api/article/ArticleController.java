package com.turing.api.article;

import com.turing.api.enums.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ArticleController {
    private final ArticleServiceImpl service;

@GetMapping("/api/all-articles")
    public Map<?, ?> findAll() throws SQLException {
        Map<String, Object> map = new HashMap<>();
        map.put("message", Messenger.SUCCESS);
        @SuppressWarnings("unchecked")
        List<Article> list = new ArrayList<>();
       list.add(Article.builder()
                        .id(1L)
                        .title("제목")
                        .content("내용")
                       //.writer("글쓴이")
                        .registerDate("날짜")
                .build());
       // list = service.findAll();
        map.put("result",list);
        return map;
    }
}
