export const treeOptions = [
  {
    id: '1',
    label: 'Group 1',
    children: [
      { id: '2', label: 'Toyota' },
      { id: '3', label: 'Honda' },
      {
        id: '4',
        label: 'Sub group 2',
        children: [
          { id: '5', label: 'Ford' },
          { id: '6', label: 'Chevrolet' },
          {
            id: '7',
            label: 'Sub group 3',
            children: [
              { id: '8', label: 'BMW' },
              { id: '9', label: 'Mercedes-Benz' },
              { id: '10', label: 'Audi' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '11',
    label: 'Group 2',
    children: [
      { id: '12', label: 'Volkswagen' },
      { id: '13', label: 'Nissan' },
      {
        id: '14',
        label: 'Sub group 30',
        children: [
          { id: '15', label: 'Tesla' },
          { id: '16', label: 'Volvo' },
          {
            id: '17',
            label: 'Sub group 40',
            children: [
              { id: '18', label: 'Lamborghini' },
              { id: '19', label: 'Ferrari' },
              { id: '110', label: 'Porsche' },
            ],
          },
        ],
      },
    ],
  },
]
