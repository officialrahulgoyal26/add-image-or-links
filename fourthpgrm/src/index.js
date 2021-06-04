import React from 'react';
import reactDom from 'react-dom';
const localDate = new Date().toLocaleDateString();
const img1 = "https://picsum.photos/seed/picsum/200/300";
const img2 = "https://picsum.photos/seed/picsum/200/300";
const img3 = "https://picsum.photos/seed/picsum/200/300";
const link = "https://www.google.com";
reactDom.render(
  <>
  <h1>hi here is rahul time zone</h1>
  <p> DATE : {localDate} </p>
  <img src={img1} alt="randomimage" />
  <img src={img2} alt="randomimage" />
  <a href={link} target = "blank">
  <img src={img3} alt="randomimage" /></a>
  </>,

  document.getElementById('root')
);