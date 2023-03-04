package com.tehorie.tinypmt.presentation.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class ListTicketsResponse {
    private List<TicketResponse> results;
}
