package com.tehorie.tinypmt.presentation;

import com.tehorie.tinypmt.presentation.model.TicketDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.Arrays;
import java.util.List;

@RestController
public class TicketController {

    @GetMapping("/")
    Mono<String> hello() {
        return Mono.just("Hello, world!");
    }
}
