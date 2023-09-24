const { Products } = require("../models");

// const prod1= require('../Images/aj1unc.jpg')
// const prod2= require('../Images/mocha.jpg')
// const prod3= require('../Images/travisfrag.jpg')
const productsData = [
  {
    productName: "Air Jordan 1 High UNC",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/358111/1.jpg",
    price: 400,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "Air Jordan 1 High Travis Scott Mocha",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/806920/1.jpg",
    price: 2200,
    size: "11",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "Air Jordan 1 High Travis Scott Fragments",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/3000/TEMPLATE/272696/1.jpg",
    price: 2500,
    size: "9",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "AIR JORDAN 5 RETRO SE 'BURGUNDY' 2023",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/365489/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id:2,
  },
  {
    productName: "UNION LA X BEPHIE'S BEAUTY SUPPLY X AIR JORDAN 1 RETRO",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/365271/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "WMNS AIR JORDAN 4 RETRO 'FROZEN MOMENTS",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/367070/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "AIR MAX CB 94 OG 'BLACK PURPLE' 2023",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/365486/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 1,
  },
  {
    productName: "AIR JORDAN 4 RETRO 'THUNDER' 2023",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/353523/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "AIR JORDAN 3 RETRO 'PALOMINO'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/360704/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "AIR JORDAN 4 RETRO 'DOERNBECHER'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/011499/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "AIR JORDAN 1 RETRO HIGH OG 'CHICAGO LOST & FOUND'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/307016/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "AIR JORDAN 1 RETRO HIGH OG 'PALOMINO'",
    productDescription:
    "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/351725/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "MARVEL X AIR JORDAN 1 RETRO HIGH OG 'NEXT CHAPTER'",
    productDescription:"Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/349168/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "TRAVIS SCOTT X AIR JORDAN 1 LOW OG SP PS 'BLACK PHANTOM'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/333976/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "TRAVIS SCOTT X AIR JORDAN 1 LOW OG TD 'REVERSE MOCHA'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/315865/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "AIR JORDAN 1 RETRO HIGH OG 'DARK MOCHA",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/162310/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "FRAGMENT DESIGN X TRAVIS SCOTT X AIR JORDAN 1 RETRO ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/267414/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "AIR JORDAN 1 RETRO HIGH OG 'YELLOW TOE' ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/2200/TEMPLATE/310578/1.jpg",
    price: 500,
    size: "10.5",
    brands_id: 1,
    category_id: 2,
  },
  {
    productName: "YEEZY BOOST 350 V2 'MX DARK SALT' ",
    productDescription:
      "The adidas Yeezy Boost 350 V2 'MX Dark Salt' arrives with a Primeknit upper featuring neutral shades of silver, grey, and black and laced up for a secure fit. The shoe features a full-length Boost midsole encased in a ribbed TPU cage which is supported by a grippy rubber outsole. A bold black side stripe complements the swirling design, running along the lateral side and matching the heels webbing pull tab.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/368573/1.jpg",
    price: 400,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 700 'WAVE RUNNER' 2023 ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/378290/1.jpg",
    price: 550,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'BONE' ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/299345/1.jpg",
    price: 380,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'ONYX' ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/296515/1.jpg",
    price: 380,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'GRANITE' ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/322531/1.jpg",
    price: 300,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 700 'ANALOG' ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/138422/1.jpg",
    price: 330,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'CARBON BELUGA' ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/341927/1.jpg",
    price: 320,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 'PIRATE BLACK' 2023 ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/338490/1.jpg",
    price: 390,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'BRED'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/800389/1.jpg",
    price: 450,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 700 'UTILITY BLACK' 2023 ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/375973/1.jpg",
    price: 330,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY 500 'BONE WHITE' 2023 ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/368576/1.jpg",
    price: 370,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'ZEBRA' 2022/2023",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/369153/1.jpg",
    price: 450,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'SLATE'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/308404/1.jpg",
    price: 405,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY 500 'UTILITY BLACK' 2023 ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/369155/1.jpg",
    price: 380,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'STATIC NON-REFLECTIVE' 2023 ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/375976/1.jpg",
    price: 290,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },
  {
    productName: "YEEZY BOOST 350 V2 'STATIC NON-REFLECTIVE' 2023 ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/375976/1.jpg",
    price: 290,
    size: "10.5",
    brands_id: 1,
    category_id: 8,
  },

  {
    productName: "SAMBA OG 'WHITE BLACK GUM' ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/238596/1.jpg",
    price: 144,
    size: "10.5",
    brands_id: 1,
    category_id: 9,
  },

  {
    productName: "BAD BUNNY X CAMPUS 'CHALKY BROWN' ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/373669/1.jpg",
    price: 158,
    size: "10.5",
    brands_id: 1,
    category_id: 9,
  },
  {
    productName: "CAMPUS 00S 'DARK GREEN GUM' ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/361389/1.jpg",
    price: 162,
    size: "10.5",
    brands_id: 1,
    category_id: 9,
  },
  {
    productName: "CRAZY IIINFINITY 'CHALK'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/374745/1.jpg",
    price: 253,
    size: "10.5",
    brands_id: 1,
    category_id: 9,
  },
  {
    productName: "WMNS SAMBA OG 'ALUMINIUM GUM'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/375814/1.jpg",
    price: 217,
    size: "10.5",
    brands_id: 1,
    category_id: 9,
  },
  {
    productName: "THE SIMPSONS X STAN SMITH 'HOMER SIMPSON'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/374623/1.jpg",
    price: 128,
    size: "10.5",
    brands_id: 1,
    category_id: 9,
  },
  {
    productName: "CAMPUS 00S 'BLACK WHITE GUM'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/352867/1.jpg",
    price: 124,
    size: "10.5",
    brands_id: 1,
    category_id: 9,
  },
  {
    productName: "BAD BUNNY X FORUM BUCKLE LOW 'LAST FORUM' ",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/344509/1.jpg",
    price: 281,
    size: "10.5",
    brands_id: 1,
    category_id: 9,
  },
  {
    productName: "BAPE X CAMPUS 80S '30TH ANNIVERSARY - BROWN'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/372425/1.jpg",
    price: 259,
    size: "10.5",
    brands_id: 1,
    category_id: 9,
  },
  {
    productName: "WMNS SAMBA OG 'SILVER GREEN GUM'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/375817/1.jpg",
    price: 192,
    size: "10.5",
    brands_id: 1,
    category_id: 9,
  },
  {
    productName: "BAD BUNNY X FORUM BUCKLE LOW 'BLUE TINT'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/314012/1.jpg",
    price: 493,
    size: "10.5",
    brands_id: 1,
    category_id: 9,
  },
  {
    productName: "ULTRABOOST 1.0 'TRIPLE WHITE 2023'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/349247/1.jpg",
    price: 165,
    size: "10.5",
    brands_id: 1,
    category_id: 9,
  },
  {
    productName: "2002R 'PROTECTION PACK - RAIN CLOUD'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/275138/1.jpg",
    price: 269,
    size: "10.5",
    brands_id: 1,
    category_id: 10,
  },  {
    productName: "2002R 'PROTECTION PACK - BLACK GREY'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/350512/1.jpg",
    price: 259,
    size: "10.5",
    brands_id: 1,
    category_id: 10,
  },  {
    productName: "9060 'SUEDE PACK - SEA SALT'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/368690/1.jpg",
    price: 218,
    size: "10.5",
    brands_id: 1,
    category_id: 10,
  },  {
    productName: "9060 'RAIN CLOUD'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/333745/1.jpg",
    price: 163,
    size: "10.5",
    brands_id: 1,
    category_id: 10,
  },  {
    productName: "550 'SEA SALT'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/298152/1.jpg",
    price: 139,
    size: "10.5",
    brands_id: 1,
    category_id: 10,
  },  {
    productName: "9060 'MOON DAZE'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/365668/1.jpg",
    price: 506,
    size: "10.5",
    brands_id: 1,
    category_id: 10,
  },  {
    productName: "550 'WHITE GREEN'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/271892/1.jpg",
    price: 162,
    size: "10.5",
    brands_id: 1,
    category_id: 10,
  },  {
    productName: "2002R 'PROTECTION PACK - NAVY'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/357672/1.jpg",
    price: 230,
    size: "10.5",
    brands_id: 1,
    category_id: 10,
  },  {
    productName: "2002R 'PROTECTION PACK - PINK'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/304640/1.jpg",
    price: 401,
    size: "10.5",
    brands_id: 1,
    category_id: 10,
  },  {
    productName: "2002R 'PROTECTION PACK - SLATE GREY'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/357673/1.jpg",
    price: 260,
    size: "10.5",
    brands_id: 1,
    category_id: 10,
  },  {
    productName: "WMNS 550 'BLUE HAZE'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/351609/1.jpg",
    price: 176,
    size: "10.5",
    brands_id: 1,
    category_id: 10,
  },  {
    productName: "530 'WHITE NATURAL INDIGO'",
    productDescription:
      "Paying homage to Michael Jordan's alma mater, this colorway of the Air Jordan 1 Retro Low OG features a simple and clean 'UNC' colorway. A full leather upper features a white base with black overlays on the forefoot and lace area, but a vivid Dark Powder Blue on the back heel area. A black Swoosh frames the profile, while a black Wings logo can be found on the back heel piece. A crisp white midsole gives way to a UNC rubber outsole, completing the look.",
    image: "https://cdn.flightclub.com/750/TEMPLATE/223935/1.jpg",
    price: 135,
    size: "10.5",
    brands_id: 1,
    category_id: 10,
  },


];

const seedProducts = () => {
  return Products.bulkCreate(productsData);
};

module.exports = seedProducts;
