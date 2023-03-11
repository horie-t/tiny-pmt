package com.tehorie.tinypmt.presentation.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "チケットのリクエスト情報です。")
public class TicketRequestBody {
    @NotNull
    @Size(min = 1, max = 128)
    @Schema(description = "タイトルです")
    private String title;
    @Size(max = 4096)
    @Schema(description = "詳細な説明です")
    private String description;
}
