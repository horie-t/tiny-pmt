import { pactWith } from 'jest-pact/dist/v3';
import { MatchersV3 } from '@pact-foundation/pact';
import axios from 'axios';

pactWith({ consumer: 'TicketConsumer', provider: 'TicketProvider', dir: '../pact' }, (interaction) => {
   interaction('チケットを作成する', ({ provider, execute }) => {
    let newTicket = { title: "新しいタイトル", description: "新しい説明 " };
    let expectedTicket = { id: "cadec1ba-14b8-4f56-987b-7bc5c344da14", ...newTicket };

    beforeEach(() =>
      provider
        .uponReceiving('チケットを作成する')
        .withRequest({
          method: 'POST',
          path: '/tickets',
          headers: { 'content-type': 'application/json' },
          body: newTicket
        })
        .willRespondWith({
          status: 201,
          headers: { 'content-type': 'application/json' },
          body: MatchersV3.like(expectedTicket)
        })
    );

    execute('Create API呼び出し', (mockserver) =>
      axios.post(`${mockserver.url}/tickets`, newTicket).then((response) => {
        expect(response.status).toBe(201);
        expect(response.data).toEqual(expectedTicket);
      })
    );
  });

  interaction('チケットを取得する', ({ provider, execute }) => {
    const expectTicket = {
      title: "仮タイトル",
      description: "いつやるか",
      id: "1f6d3281-fb11-4140-930e-dba73a25d808"
    };

    beforeEach(() =>
      provider
        .given('id:1f6d3281-fb11-4140-930e-dba73a25d808のチケットが存在する')
        .uponReceiving('存在するチケットを取得する')
        .withRequest({
          method: 'GET',
          path: `/tickets/${expectTicket.id}`,
        })
        .willRespondWith({
          status: 200,
          headers: { 'content-type': 'application/json' },
          body: MatchersV3.like(expectTicket)
        })
    );

    execute('Get API呼び出し', (mockserver) =>
      axios.get(`${mockserver.url}/tickets/${expectTicket.id}`).then((response) => {
        expect(response.status).toBe(200);
        expect(response.data).toEqual(expectTicket);
      })
    );
  });

   interaction('チケットのリストを取得する', ({ provider, execute }) => {
    const expectTickets = {
      results: [
        {
          title: "仮タイトル",
          description: "いつやるか",
          id: "1f6d3281-fb11-4140-930e-dba73a25d808"
        },
        {
          title: "仮タイトル2",
          description: "今でしょ",
          id: "2287ca6e-35f3-495f-ad5f-49744a6345bc"
        },
      ]
    };

    beforeEach(() =>
      provider
        .given('チケットが存在する')
        .uponReceiving('チケットのリストを取得する')
        .withRequest({
          method: 'GET',
          path: '/tickets',
        })
        .willRespondWith({
          status: 200,
          headers: { 'content-type': 'application/json' },
          body: MatchersV3.like(expectTickets)
        })
    );

    execute('List API呼び出し', (mockserver) =>
      axios.get(`${mockserver.url}/tickets`).then((response) => {
        expect(response.status).toBe(200);
        expect(response.data).toEqual(expectTickets);
      })
    );
  });

  interaction('チケットを更新する', ({ provider, execute }) => {
    const updateTicket = {
      title: "更新タイトル",
      description: "更新されていること",
    };
    const expectTicket = {
      id: "1f6d3281-fb11-4140-930e-dba73a25d808",
      ...updateTicket
    };


    beforeEach(() =>
      provider
        .given('id:1f6d3281-fb11-4140-930e-dba73a25d808のチケットが存在する')
        .uponReceiving('チケットを更新する')
        .withRequest({
          method: 'PUT',
          path: `/tickets/${expectTicket.id}`,
          headers: { 'content-type': 'application/json' },
          body: updateTicket
        })
        .willRespondWith({
          status: 200,
          headers: { 'content-type': 'application/json' },
          body: MatchersV3.like(expectTicket)
        })
    );

    execute('Replase API呼び出し', (mockserver) =>
      axios.put(`${mockserver.url}/tickets/${expectTicket.id}`, updateTicket).then((response) => {
        expect(response.status).toBe(200);
        expect(response.data).toEqual(expectTicket);
      })
    );
  });

  interaction('チケットを削除する', ({ provider, execute }) => {
    const ticketId = "1f6d3281-fb11-4140-930e-dba73a25d808";

    beforeEach(() =>
      provider
        .given(`${ticketId}のチケットが存在する`)
        .uponReceiving('チケットを削除する')
        .withRequest({
          method: 'DELETE',
          path: `/tickets/${ticketId}`,
        })
        .willRespondWith({
          status: 200,
          headers: { 'content-type': 'application/json' },
        })
    );

    execute('Delete API呼び出し', (mockserver) =>
      axios.delete(`${mockserver.url}/tickets/${ticketId}`).then((response) => {
        expect(response.status).toBe(200);
      })
    );
  });
});