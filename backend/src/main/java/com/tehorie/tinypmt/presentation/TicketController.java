package com.tehorie.tinypmt.presentation;

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

    @PostMapping(value =  "/tickets", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Created")
    })
    Mono<TicketResponse> createTicket(@RequestBody TicketRequestBody ticket) {
        // TODO リポジトリにデータを登録する
        return Mono.just(new TicketResponse("0000000000033", ticket.getDescription(), ticket.getDescription()));
    }

    @GetMapping(value = "/tickets/{id}", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK")
    })
    Mono<TicketResponse> getTicket(@PathVariable String id) {
        // TODO リポジトリからデータを取得する
        return Mono.just(new TicketResponse(id, "%sのチケットを返す予定です".formatted(id), ""));
    }

    @GetMapping(value = "/tickets", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK")
    })
    Mono<ListTicketsResponse> listTicket() {
        // TODO リポジトリからデータを取得する
        return Mono.just(new ListTicketsResponse(Arrays.asList(
                new TicketResponse("0000000000011","最初のチケット", "何をすべきか検討する"),
                new TicketResponse("0000000000022","2番目のチケット", "優先順位を検討する")
        )));
    }

    @DeleteMapping("/tickets/{id}")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK")
    })
    void deleteTicket(@PathVariable String id) {
        // TODO リポジトリのデータを削除する
    }

    @PatchMapping(value = "/tickets/{id}", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK")
    })
    Mono<TicketResponse> updateTicket(@PathVariable String id, @RequestBody TicketRequestBody ticket) {
        // TODO リポジトリのデータを更新する
        TicketResponse existTicket = new TicketResponse("", "古いチケットタイトル", "古い説明");
        existTicket.setId(id);
        existTicket.setTitle(ticket.getTitle() != null ? ticket.getTitle() : existTicket.getTitle());
        existTicket.setDescription(ticket.getDescription() != null ? ticket.getDescription() : existTicket.getDescription());
        return Mono.just(existTicket);
    }

    @PutMapping(value = "/tickets/{id}", produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "OK")
    })
    Mono<TicketResponse> replaceTicket(@PathVariable String id, @RequestBody TicketRequestBody ticket) {
        // TODO リポジトリのデータを置き換える
        return Mono.just(new TicketResponse(id, ticket.getTitle(), ticket.getDescription()));
    }
}
