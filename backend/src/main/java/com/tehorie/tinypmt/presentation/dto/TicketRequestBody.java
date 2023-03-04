package com.tehorie.tinypmt.presentation.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TicketRequestBody {
    private String title;
    private String description;
}
