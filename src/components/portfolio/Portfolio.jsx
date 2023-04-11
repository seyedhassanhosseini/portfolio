import { useEffect, useState } from "react";
import PortfolioList from "./../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  webApplications,
  mobilePortfolio,
} from "./../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Web Applications",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(webApplications);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      default:
        setData(webApplications);
    }
  }, [selected]);

  const openUrl = (openUrl) => {
    console.log(openUrl)
    window.open(openUrl,"_blank")

  }

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a target="_blank" href={d.website}>
            <div className="item">
                <img
                  src={d.img}
                  alt=""
                />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}