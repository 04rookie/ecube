import React, { useEffect, useState } from "react";
import useWindowDimensions from "../Viewport";
const TitleStyle = { fontFamily: "Montserrat", fontWeight: "600" };
const BodyStyle = {
  fontFamily: "Montserrat",
  fontWeight: "300",
  color: "#0F4C75",
};

export function Viewport(){
    const {height, width} = useWindowDimensions();
    const [padding, setPadding] = useState(width>800?true:false);
    useEffect(()=>{
        width>800?setPadding(true):setPadding(false);
      }, [width])
    return padding;
}
export { TitleStyle, BodyStyle };
