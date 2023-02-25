package com.tehorie.tinypmt.presentation;

import com.tehorie.tinypmt.presentation.model.TicketDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
public class TicketController {

    @GetMapping("/tickets")
    Flux<TicketDTO> hello() {
        return Flux.fromArray(new TicketDTO[]{new TicketDTO("最初のチケット"), new TicketDTO("2番目のチケット")});
    }
}
