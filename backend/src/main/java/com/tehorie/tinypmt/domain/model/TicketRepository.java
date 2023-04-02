package com.tehorie.tinypmt.domain.model;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface TicketRepository extends ReactiveCrudRepository<Ticket, String> {
}
