package com.tehorie.tinypmt.application;

import com.tehorie.tinypmt.domain.model.Ticket;
import com.tehorie.tinypmt.domain.model.TicketRepository;
import com.tehorie.tinypmt.presentation.dto.ListTicketsResponse;
import com.tehorie.tinypmt.presentation.dto.TicketRequestBody;
import com.tehorie.tinypmt.presentation.dto.TicketResponse;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.UUID;

@Service
public class TicketService {
    private final TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public Mono<TicketResponse> createTicket(TicketRequestBody ticketRequestBody) {
        return ticketRepository.save(new Ticket(UUID.randomUUID(), ticketRequestBody.getTitle(), ticketRequestBody.getDescription(), true))
                .map(ticket -> new TicketResponse(ticket.getId().toString(), ticket.getTitle(), ticket.getDescription()));
    }

    public Mono<TicketResponse> getTicket(String id) {
        return ticketRepository.findById(UUID.fromString(id))
                .map(ticket -> new TicketResponse(ticket.getId().toString(), ticket.getTitle(), ticket.getDescription()));
    }

    public Mono<ListTicketsResponse> listTicket() {
        return ticketRepository.findAll()
                .map(ticket -> new TicketResponse(ticket.getId().toString(), ticket.getTitle(), ticket.getDescription()))
                .collectList().map(ticketResponses -> new ListTicketsResponse(ticketResponses));
    }

    public Mono<Void> deleteTicket(String id) {
        return ticketRepository.deleteById(UUID.fromString(id));
    }

    public Mono<TicketResponse> updateTicket(String id, TicketRequestBody ticketRequestBody) {
        return ticketRepository.findById(UUID.fromString(id))
                .flatMap(ticket -> {
                    ticket.setTitle(ticketRequestBody.getTitle() != null ? ticketRequestBody.getTitle() : ticket.getTitle());
                    ticket.setDescription(ticketRequestBody.getDescription() != null ? ticketRequestBody.getDescription() : ticket.getDescription());
                    return ticketRepository.save(ticket);
                })
                .map(ticket -> new TicketResponse(ticket.getId().toString(), ticket.getTitle(), ticket.getDescription()));
    }

    public Mono<TicketResponse> replaceTicket(String id, TicketRequestBody ticketRequestBody) {
        return ticketRepository.save(new Ticket(UUID.fromString(id), ticketRequestBody.getTitle(), ticketRequestBody.getDescription(), false))
                .map(ticket -> new TicketResponse(ticket.getId().toString(), ticket.getTitle(), ticket.getDescription()));
    }
}
