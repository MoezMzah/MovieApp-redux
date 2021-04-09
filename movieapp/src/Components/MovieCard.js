import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";
import Rate from "./Rate";
const MovieCard = ({ movie }) => {
  const { Meta } = Card;
  return (
    <div>
      <Card
        hoverable
        style={{ width: 270, height: 450, margin: 20 }}
        cover={<img alt="...." src={movie.image} height="170px" />}
      >
        <Meta title={movie.title} description={movie.description} />
        <Rate rate={movie.Rate} />
      </Card>
    </div>
  );
};

export default MovieCard;
