package com.tehorie.tinypmt.presentation;

import com.tehorie.tinypmt.presentation.model.TicketDTO;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
@CrossOrigin("http://localhost:3000")
@Tag(name = "Ticket", description = "The ticket API")
public class TicketController {

    @GetMapping("/tickets")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK")
    })
    Flux<TicketDTO> ListTicket() {
        return Flux.fromArray(new TicketDTO[]{new TicketDTO("最初のチケット"), new TicketDTO("2番目のチケット")});
    }
}
