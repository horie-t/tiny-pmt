package com.tehorie.tinypmt.domain.model;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import java.util.UUID;

public interface TicketRepository extends ReactiveCrudRepository<Ticket, UUID> {
}
