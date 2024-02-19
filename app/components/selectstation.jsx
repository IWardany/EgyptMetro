"use client";
import React, { useState } from "react";
import Title from "./titles";
import { line1, line2, line3 } from "../lib/lines";
import ChooseStation from "./choose";

const SelectStations = () => {
  let [startStation, setStartStation] = useState("");
  let [endStation, setEndStation] = useState("");
  let [people, setPeople] = useState(1);
  function changeStartStation(newStation) {
    setStartStation(newStation);
  }
  function changeEndStation(newStation) {
    setEndStation(newStation);
  }
  function changePeople(group) {
    setPeople(group);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(startStation);
    console.log(endStation);
    console.log(people);
  }
  return (
    <div className="max-w-md m-auto text-center">
      <form onSubmit={handleSubmit}>
        <Title text="محطة الصعود"></Title>
        <ChooseStation
          background="bg-red-800"
          station={startStation}
          changeStation={changeStartStation}
        ></ChooseStation>
        <Title text="محطة النزول"></Title>
        <ChooseStation
          background="bg-blue-900"
          station={endStation}
          changeStation={changeEndStation}
        ></ChooseStation>
        <Title text="عدد الأفراد"></Title>
        <input
          type="number"
          placeholder="عدد الأفراد"
          className="input input-bordered rounded-full border-2 text-black input-success w-full max-w-xs my-4 text-center text-lg"
          value={people}
          onChange={(event) => changePeople(Number(event.target.value))}
        />
        <button
          className="btn btn-outline block mx-auto my-10 noto"
          type="submit"
        >
          تفاصيل الرحلة
        </button>
      </form>
    </div>
  );
};

export default SelectStations;
