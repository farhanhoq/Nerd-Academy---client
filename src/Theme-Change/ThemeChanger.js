import React from 'react';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

const ThemeChanger = () => {

  const themeValues = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

useEffect(()=>{
  themeChange(false)
})

  return (
    <select className="select select-primary select-sm" data-choose-theme>
      <option disabled>Select Theme</option>
      <option className="text-black">Default Value</option>
      {themeValues.map((value)=>(
        <option key={value.toLowerCase()} value={value.toLowerCase()}>{value}</option>
      ))}
    </select>
  );
};

export default ThemeChanger;