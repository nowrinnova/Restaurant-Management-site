import React, { useState } from 'react'
import Cover from '../../../shared/Cover/Cover'
import coverImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { NavLink } from 'react-router-dom';
import useMenu from '../../../hooks/useMenu';
import FoodCart from '../../../components/FoodCard/FoodCart';
import OrderTab from '../orderTab/OrderTab';
export default function Order() {
  const [tabIndex,setTabIndex]=useState(0)
  const [menu]=useMenu()
  const pizza = menu?.filter((item) => item.category == "pizza");
  const salad = menu?.filter((item) => item.category == "salad");
  const dessert = menu?.filter((item) => item.category == "dessert");
  const soup = menu?.filter((item) => item.category == "soup");
  const drink = menu?.filter((item) => item.category == "drinks");
  return (
    <div>
      <Cover img={coverImg} title='Our shop' subTitle='Would you like to try a dish?'></Cover>
      <div className='max-w-4xl mx-auto my-4'>
      <Tabs className='text-center' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList >
      <Tab>salad</Tab>
      <Tab>pizza</Tab>
      <Tab>dessert</Tab>
      <Tab>soup</Tab>
      <Tab>drink</Tab>
    </TabList>

    <TabPanel>
      <OrderTab item={salad}></OrderTab>
    </TabPanel>
    <TabPanel>
      <OrderTab item={pizza}></OrderTab>
    </TabPanel>
    <TabPanel>
      <OrderTab item={dessert}></OrderTab>
    </TabPanel>
    <TabPanel>
      <OrderTab item={soup}></OrderTab>
    </TabPanel>
    <TabPanel>
      <OrderTab item={drink}></OrderTab>
    </TabPanel>
    
  </Tabs>
      </div>
    </div>
  )
}
