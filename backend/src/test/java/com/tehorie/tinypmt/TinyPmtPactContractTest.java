package com.tehorie.tinypmt;

import au.com.dius.pact.provider.junit5.PactVerificationContext;
import au.com.dius.pact.provider.junitsupport.Provider;
import au.com.dius.pact.provider.junitsupport.State;
import au.com.dius.pact.provider.junitsupport.loader.PactFolder;
import au.com.dius.pact.provider.spring.junit5.PactVerificationSpringProvider;
import com.tehorie.tinypmt.application.TicketService;
import com.tehorie.tinypmt.domain.model.Ticket;
import com.tehorie.tinypmt.domain.model.TicketRepository;
import org.junit.jupiter.api.TestTemplate;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import reactor.core.publisher.Flux;

import java.util.UUID;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT, properties = "server.port=8080")
@Provider("TicketProvider")
@PactFolder("../pact")
public class TinyPmtPactContractTest {

    @Autowired
    private TicketService ticketService;

    @MockBean
    private TicketRepository ticketRepository;

    @TestTemplate
    @ExtendWith(PactVerificationSpringProvider.class)
    public void pactVerificationTestTemplate(PactVerificationContext context) {
        context.verifyInteraction();
    }

    @State(value = {"チケットリストを作成する"})
    public void TicketList() {
        Mockito.when(ticketRepository.findAll()).thenReturn(Flux.just(
                new Ticket(UUID.randomUUID(), "title1", "desc1", false),
                new Ticket(UUID.randomUUID(), "title2", "desc2", false)));
    }
}
