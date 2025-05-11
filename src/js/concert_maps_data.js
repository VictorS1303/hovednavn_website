export const concertCardsData = [
    {
      concertDate: '5. maj',
      concertLocation: 'Kayak Bar',
      concertImage: 'concert_card_bg',
      concertPrice: '100',
      concertLocationCoordinates: {
        lat: 55.67552701830106,
        lng: 12.58672489575173,
      },
      concertId: '1',
    },
    {
      concertDate: '23. juni',
      concertLocation: 'Pumpehuset',
      concertImage: 'concert_card_bg',
      concertPrice: '100',
      concertLocationCoordinates: {
        lat: 55.67739435279951,
        lng: 12.565182724463128,
      },
      concertId: '2',
    },
    {
      concertDate: '26. juli',
      concertLocation: 'Loppen',
      concertImage: 'concert_card_bg',
      concertPrice: '130',
      concertLocationCoordinates: {
        lat: 55.67389982358226,
        lng: 12.597148928165135,
      },
      concertId: '3',
    },
    {
      concertDate: '30. august',
      concertLocation: 'Amager Bio',
      concertImage: 'concert_card_bg',
      concertPrice: '130',
      concertLocationCoordinates: {
        lat: 55.65415790187533,
        lng: 12.609199896636788,
      },
      concertId: '4',
    },
]

concertCardsData.map((concert) => console.log(concert.concertId))