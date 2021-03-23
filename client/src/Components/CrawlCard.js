import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import API from "../utils/API";

const CrawlCard = ({ item }) => {
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
  }, []);

  // function handleModalSubmit(event) {
  //   event.preventDefault();
  //   const apiResults = API.saveBar({
  //     name,
  //     street,
  //     city,
  //     state,
  //     zip,
  //     country,
  //     phone,
  //     url,
  //     overall,
  //   });
  //   return apiResults;
  // }

  let {
    id,
    name,
    street,
    city,
    state,
    zip,
    country,
    phone,
    url,
    overall,
  } = item;

  const urlLink = "https://" + url;

  return <option value={id}>{name}</option>;
};

export default CrawlCard;
