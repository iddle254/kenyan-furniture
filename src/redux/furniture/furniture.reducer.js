export const INITIAL_STATE = {
    items: [
      {
        title: 'Sofas',
        imageUrl: require('../../assets/img/bazu/sofa.jpg'),
        id: 1,
        linkUrl: 'bazu/sofas'
      },
      {
        title: 'Dining tables',
        imageUrl: require('../../assets/img/bazu/featured.jpg'),
        id: 2,
        linkUrl: 'bazu/dining'
      },
      {
        title: 'Sitting tables',
        imageUrl: require('../../assets/img/bazu/sitting.jpg'),
        id: 3,
        linkUrl: 'bazu/sitting'
      },
      {
        title: 'Kitchen Furniture',
        imageUrl: require('../../assets/img/bazu/cabinets.jpg'),
        size: 'large',
        id: 4,
        linkUrl: 'bazu/counters'
      },
      {
        title: 'Pool',
        imageUrl: require('../../assets/img/bazu/pool.jpg'),
        size: 'large',
        id: 5,
        linkUrl: 'bazu/study'
      },
      {
        title: 'Study room',
        imageUrl: require('../../assets/img/bazu/mediaroom.jpg'),
        size: 'large',
        id: 6,
        linkUrl: 'bazu/bedroom'
      }
    ]
  };
  
  const furnitureReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default furnitureReducer;