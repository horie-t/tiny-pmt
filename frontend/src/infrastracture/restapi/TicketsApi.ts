import axios from "axios";
import { Ticket } from "../../model/Ticket";

export class TicketsApi {
  baseurl : string;

  constructor(baseurl: string = "http://localhost:8080") {
      this.baseurl = baseurl;
  }

  create(ticket: Ticket) {
    return axios.post(`${this.baseurl}/tickets`, ticket).then(response => {
      return response.data;
    });
  }

  get(id: string) : Promise<Ticket> {
    return axios.get(`${this.baseurl}/tickets/${id}`).then((response) => {
      return response.data;
    });    
  };

  list() : Promise<Ticket[]> {
    return axios.get(`${this.baseurl}/tickets`).then((response) => {
      return response.data.results;
    });
  }

  replase(ticket: Ticket) : Promise<Ticket> {
    return axios.put(`${this.baseurl}/tickets/${ticket.id}`, ticket).then(response => {
      return response.data;
    });
  }

  delete(ticket: Ticket) : Promise<void> {
    return axios.delete(`${this.baseurl}/tickets/${ticket.id}`).then(response => {
      // Do nothing.
    });
  }
};

