package com.tehorie.tinypmt.presentation.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Schema(description = "チケットです。")
public class TicketResponse extends TicketRequestBody {
    @Size(min = 13, max = 13)
    @Schema(description = "IDです。")
    private String id;

    public TicketResponse(String id, String title, String description) {
        super(title, description);
        this.id = id;
    }
}
