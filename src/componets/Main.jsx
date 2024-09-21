
import Consoles from "./console";
import Create from "./create";
import Cases from "./cases";

import { useState } from "react";

const Main = ({currency, setCurrency}) => {
  
  const [isHovered, setIsHovered] = useState(false);
  const [elementHovered, setElementHovered] = useState("");

  const handleMouseEnter = (element) => {
      setIsHovered(true);
      setElementHovered(element);
  };

  const handleMouseLeave = () => {
      setIsHovered(false);
  };

    return (
        <main>
            <Consoles isHovered={isHovered} elementHovered={elementHovered} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} currency={currency} setCurrency={setCurrency}/>
            <Create />
            <Cases isHovered={isHovered} elementHovered={elementHovered} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} currency={currency} setCurrency={setCurrency}/>
        </main>   
    )
}

export default Main;