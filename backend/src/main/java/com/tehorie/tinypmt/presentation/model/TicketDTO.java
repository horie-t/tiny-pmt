package com.tehorie.tinypmt.presentation.model;

public class TicketDTO {
    private String title;

    public TicketDTO(String title) {
        this.title = title;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
