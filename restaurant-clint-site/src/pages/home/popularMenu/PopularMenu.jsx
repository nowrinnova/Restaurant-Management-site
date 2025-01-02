import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

export default function PopularMenu() {
  const [menu]=useMenu()
  const popular=menu.filter(item=>item.category=='popular')
  // console.log(menu);
  return (
    <div>
     
      <div className="grid md:grid-cols-2 gap-4 p-4 max-w-4xl mx-auto">
        {popular.map((data) => (
          <MenuItem key={data._id} data={data}></MenuItem>
        ))}
      </div>
    </div>
  );
}
