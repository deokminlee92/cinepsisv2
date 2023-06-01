import React from "react";
import { useGetLastestMoviesQuery } from "../../store/modules/fetch";

const Around = ({ arg }) => {
  const { data } = useGetLastestMoviesQuery(arg);
  console.log(data, "data");

  return <div></div>;
};

export default Around;
