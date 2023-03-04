package com.tehorie.tinypmt.presentation.dto;

import lombok.Data;

@Data
public class TicketResponse extends TicketRequestBody {
    private String id;

    public TicketResponse(String id, String title, String description) {
        super(title, description);
        this.id = id;
    }
}
