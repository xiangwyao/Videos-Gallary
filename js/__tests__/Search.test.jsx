import React from "react";
import { shallow } from "enzyme";
import Search from "../Search";
import preload from "../../data.json";
import ShowCard from "../ShowCard";

// one to one mapping strategy
test("Search renders correctly", () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test("Search should render correct amount of shows", () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test("Search should render correct amount of shows based on search term", () => {
  const searchWord = "black";
  const component = shallow(<Search />);
  component.find("input").simulate("change", { target: { value: searchWord } });
  const showCount = preload.shows.filter(show =>
    `${show.title} ${show.description}`
      .toLowerCase()
      .includes(searchWord.toLowerCase())
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});
