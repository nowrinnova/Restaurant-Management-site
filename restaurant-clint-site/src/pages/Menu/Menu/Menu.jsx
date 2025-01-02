import React from "react";
import menuImg from "../../../assets/menu/banner3.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import Cover from "../../../shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenu from "../../home/popularMenu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
export default function Menu() {

  const [menu]=useMenu()
  const popular=menu.filter(item=>item.category=='popular')
  const pizza=menu.filter(item=>item.category=='pizza')
  const salad=menu.filter(item=>item.category=='salad')
  const dessert=menu.filter(item=>item.category=='dessert')
  const soup=menu.filter(item=>item.category=='soup')
  // const popular=menu.filter(item=>item.category=='popular')
  

  return (
    <div>
      <div>
        {" "}
        <Cover
          img={menuImg}
          title="our menu"
          subTitle="Would you like to try a dish?"
        ></Cover>
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subHeading="TODAY'S OFFER"
            heading="---Don't miss---"
          ></SectionTitle>
          <MenuCategory popular={popular}></MenuCategory>
        </div>
      </div>
      <div>
        <Cover
          img={dessertImg}
          title="DESSERTS"
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></Cover>
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subHeading="TODAY'S OFFER"
            heading="---Don't miss---"
          ></SectionTitle>
       <MenuCategory popular={dessert}></MenuCategory>
        </div>
      </div>
      <div>
        <Cover
          img={pizzaImg}
          title="PIZZA"
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></Cover>
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subHeading="TODAY'S OFFER"
            heading="---Don't miss---"
          ></SectionTitle>
          <MenuCategory popular={pizza}></MenuCategory>
        </div>
      </div>
      <div>
        {" "}
        <Cover
          img={saladImg}
          title="SALADS"
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></Cover>
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subHeading="TODAY'S OFFER"
            heading="---Don't miss---"
          ></SectionTitle>
          <MenuCategory popular={salad}></MenuCategory>
        </div>
      </div>
      <div>
        {" "}
        <Cover
          img={soupImg}
          title="SOUP"
          subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></Cover>
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subHeading="TODAY'S OFFER"
            heading="---Don't miss---"
          ></SectionTitle>
        <MenuCategory popular={soup}></MenuCategory>
        </div>
      </div>
    </div>
  );
}
