import { useState } from "react";
import graphicCard from "../assets/graphicCard.mp4";

export default function Landing() {
  const [data, setData] = useState([]);
  // const fetchData = () => {
  //   fetch("/api/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.products);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <div>
      {/* <img style={{ height: "50vh", width: "50vw" }} src={pc} alt="" />
      <video src={graphicCard} autoPlay={true} loop muted /> */}
    </div>
  );
}
