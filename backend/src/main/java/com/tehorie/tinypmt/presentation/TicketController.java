package com.tehorie.tinypmt.presentation;

import com.tehorie.tinypmt.application.TicketService;
import com.tehorie.tinypmt.presentation.dto.ListTicketsResponse;
import com.tehorie.tinypmt.presentation.dto.TicketResponse;
import com.tehorie.tinypmt.presentation.dto.TicketRequestBody;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.Arrays;

@RestController
@Tag(name = "Ticket", description = "The ticket API")
@CrossOrigin("http://localhost:5173")
public class TicketController {
    private final TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @PostMapping(value =  "/tickets", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Created")
    })
    Mono<TicketResponse> createTicket(@RequestBody TicketRequestBody ticket) {
        return ticketService.createTicket(ticket);
    }

    @GetMapping(value = "/tickets/{id}", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK")
    })
    Mono<TicketResponse> getTicket(@PathVariable String id) {
        return ticketService.getTicket(id);
    }

    @GetMapping(value = "/tickets", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK")
    })
    Mono<ListTicketsResponse> listTicket() {
        return ticketService.listTicket();
    }

    @DeleteMapping("/tickets/{id}")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK")
    })
    Mono<Void> deleteTicket(@PathVariable String id) {
        return ticketService.deleteTicket(id);
    }

    @PatchMapping(value = "/tickets/{id}", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK")
    })
    Mono<TicketResponse> updateTicket(@PathVariable String id, @RequestBody TicketRequestBody ticket) {
        return ticketService.updateTicket(id, ticket);
    }

    @PutMapping(value = "/tickets/{id}", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK")
    })
    Mono<TicketResponse> replaceTicket(@PathVariable String id, @RequestBody TicketRequestBody ticket) {
        return ticketService.replaceTicket(id, ticket);
    }
}
