export const projects = [
  {
    id: '0545',
    image: '/vercel.svg',
    name: 'Project Name One',
  },
  {
    id: '0546',
    image: '/vercel.svg',
    name: 'Project Name Two',
  },
  {
    id: '0547',
    image: '/vercel.svg',
    name: 'Project Name Three',
  },
  {
    id: '0548',
    image: '/vercel.svg',
    name: 'Project Name Four',
  },
  {
    id: '0549',
    image: '/vercel.svg',
    name: 'Project Name Five',
  }
]

export const rooms = [
  {
    id: '98384',
    ref_ids: ['0545', '0547'],
    room: 'Living Room'
  },
  {
    id: '98385',
    ref_ids: ['0546'],
    room: 'Dining Room'
  },
  {
    id: '98386',
    ref_ids: ['0549'],
    room: 'Foyer',
  },
  {
    id: '98387',
    ref_ids: ['0545', '0548'],
    room: 'Laundry Room',
  },
  {
    id: '98388',
    ref_ids: ['0545', '0546', '05467'],
    room: 'Office'
  },
  {
    id: '98389',
    ref_ids: ['0545', '0547'],
    room: 'Master Bedroom'
  },
  {
    id: '98390',
    ref_ids: ['0548'],
    room: 'Bathroom'
  },
]

export const furniture = [
  {
    id: '456',
    ref_id1: '0545',
    ref_id2: '98384',
    supplier: 'Kasthall',
    item: 'Plush Rug',
    finish: 'Gry Chalk 101',
    dimensions: `11'8"L x 11'W`,
    listPrice: '$134/sq.ft',
    tradePrice: '$116/sq.ft',
    quantity: 1,
    shipping: 'included',
    taxes: 8.625,
    leadTime: '8 - 10 weeks',
  },
  {
    id: '457',
    ref_id1: '0545',
    ref_id2: '98384',
    supplier: 'Kasthall',
    item: 'Underlay',
    finish: null,
    dimensions: `11'8"L x 11'W`,
    listPrice: '$2.8/sq.ft',
    tradePrice: '$2.4/sq.ft',
    quantity: 1,
    shipping: 'included',
    taxes: 8.625,
    leadTime: '8 - 10 weeks',
  },
  {
    id: '458',
    ref_id1: '0545',
    ref_id2: '98384',
    supplier: 'Modernica',
    item: 'Case Study Queen Bed',
    finish: 'Maple plywood frame, steel legs',
    dimensions: `80.25"L x 60.25"W x 30"H`,
    listPrice: 1595.00,
    tradePrice: 1355.75,
    quantity: 1,
    shipping: null,
    taxes: null,
    leadTime: '4 weeks',
  },
  {
    id: '459',
    ref_id1: '0545',
    ref_id2: '98384',
    supplier: 'Modernica',
    item: 'Case Study Corner Table',
    finish: 'Maple plywood frame, steel legs',
    dimensions: `30"L x 30"W x 18"H`,
    listPrice: 450.00,
    tradePrice: 382.50,
    quantity: 1,
    shipping: null,
    taxes: null,
    leadTime: '4 weeks',
  },
  {
    id: '459',
    ref_id1: '0545',
    ref_id2: '98384',
    supplier: 'Knoll',
    item: 'Bertoia Diamond Chair',
    finish: 'Polished chrome frame',
    dimensions: `28.25"D x 33.5"W x 30"H x 16.3"SH`,
    listPrice: 3148.00,
    tradePrice: 1731.40,
    quantity: 1,
    shipping: 100,
    taxes: 8.875,
    leadTime: '8 - 12 weeks',
  }
]
