import React from 'react'
import './dining.css'
import Collection from '../common/collection'
import { diningOut } from '../../data/diningOut';
import Filters from '../common/filters'
import ExploreSection from '../common/exploreSection'

const collectionList = [
  {
      id: '1',
      title: '8 Newly Opened Restaurants!',
      cover: 'https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1675231203.jpg?output-format=webp',
      places: '8 places',
  },
  {
      id: '2',
      title: '16 Must-Visit Places!',
      cover: 'https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1675233193.jpg?output-format=webp',
      places: '16 places',
  },
  {
      id: '3',
      title: '11 Picturesque Cafes!',
      cover: 'https://b.zmtcdn.com/data/collections/6487ebe8fbb28294be84b70041d24601_1691347528.jpg?output-format=webp',
      places: '11 places',
  },
  {
      id: '4',
      title: 'Dine with an Oceanic View!',
      cover: 'https://b.zmtcdn.com/data/collections/1b191329f2c37a474c428131841d488b_1675232931.jpg?output-format=webp',
      places: '6 places',
  },
  {
      id: '5',
      title: 'Global Cuisine!',
      cover: 'https://b.zmtcdn.com/data/collections/5ca63ecbc0820bcaeedd2f06d3882c07_1675233062.jpg?output-format=webp',
      places: '10 places',
  },
  {
      id: '6',
      title: 'Fill up your plate!',
      cover: 'https://b.zmtcdn.com/data/collections/038023025a7859881a3fa3b3b1c93416_1675231466.jpg?output-format=webp',
      places: '9 places',
  },
  {
      id: '7',
      title: 'Drinks! Drinks! Drinks!',
      cover: 'https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1675232834.jpg?output-format=webp',
      places: '28 places',
  }
];

const diningFilters = [
  {
    id: 1,
    icon: <i className='fi fi-rr-settings-sliders absolute-center' ></i>,
    title: 'Filters',
  },
  {
    id: 2,
    title: 'Pro Offers',
    icon: <i className='fi fi-rr-angle-down absolute-center'></i>,
  },
  {
    id: 3,
    title: 'Distance',
    icon: <i className='fi fi-rr-apps-sort absolute-center'></i>,
  },
  {
    id: 4,
    title: 'Outdoor Seating',
  },
  {
    id: 5,
    title: 'Online Bookings',
  },
  {
    id: 6,
    title: 'Rating 4.0+',
  },
  {
    id: 7,
    title: 'Cuisines',
    icon: <i className='fi fi-rr-angle-down absolute-center'></i>,
  },
]

const diningList = diningOut

const Dining = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className='max-width'>
        <Filters filterList={diningFilters} />
      </div>
      <ExploreSection list={diningList} collectionName='Dineout in Chennai' />
    </div>
  )
}

export default Dining
