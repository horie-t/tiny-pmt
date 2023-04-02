package com.tehorie.tinypmt.application;

import com.tehorie.tinypmt.domain.model.Ticket;
import com.tehorie.tinypmt.domain.model.TicketRepository;
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
        Ticket ticket = new Ticket(UUID.randomUUID(), ticketRequestBody.getTitle(), ticketRequestBody.getDescription(), true);
        return ticketRepository.save(ticket)
                .map(savedTicket -> new TicketResponse(savedTicket.getId().toString(), savedTicket.getTitle(), savedTicket.getDescription()));
    }
}
