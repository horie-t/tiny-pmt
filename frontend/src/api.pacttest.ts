import { pactWith } from 'jest-pact/dist/v3';
import { MatchersV3 } from '@pact-foundation/pact';
import axios from 'axios';

const defaultBaseUrl = 'http://localhost:8080';

export const api = (baseUrl = defaultBaseUrl) => ({
  getTickets: () =>
    axios.get(`${baseUrl}/tickets`),
  /* other endpoints here */
});

const expectTickets = {
  "results": [
    {
      "title": "仮タイトル",
      "description": "いつやるか",
      "id": "1f6d3281-fb11-4140-930e-dba73a25d808"
    },
    {
      "title": "仮タイトル2",
      "description": "今でしょ",
      "id": "2287ca6e-35f3-495f-ad5f-49744a6345bc"
    },
  ]
};

pactWith({ consumer: 'TicketConsumer', provider: 'TicketProvider', dir: '../pact' }, (interaction) => {
  interaction('A request for API health', ({ provider, execute }) => {
    beforeEach(() =>
      provider
        .given('チケットリストを作成する')
        .uponReceiving('チケットが存在する')
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

    execute('some api call', (mockserver) =>
      api(mockserver.url)
        .getTickets()
        .then((response) => {
          expect(response.data).toEqual(expectTickets);
        })
    );
  });
});