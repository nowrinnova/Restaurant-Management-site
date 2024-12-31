import axios from "axios";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";

export default function PopularMenu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios.get("menu.json").then((res) => {
      const list = res.data;
      const popular = list.filter((data) => data.category == "popular");
      setMenu(popular);
      // console.log(res.data);
    });
  }, []);
  // console.log(menu);
  return (
    <div>
      <SectionTitle
        subHeading="Check it out"
        heading="From our Menu"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4 p-4 max-w-4xl mx-auto">
        {menu.map((data) => (
          <MenuItem key={data._id} data={data}></MenuItem>
        ))}
      </div>
    </div>
  );
}
