const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// GET BTN DIV
let btnDIV = document.querySelector(".btn-container")


/***************************************************************************/


// !!! THIS PART COULD BE DONE BY USING TEMPLATE LITERAL

// CREATE ALL BTN
const allBTN = document.createElement("button")
allBTN.classList.add("btn-outline-dark", "btn-item")
allBTN.append("All")
btnDIV.append(allBTN)
allBTN.setAttribute("id", "All")


// CREATE KOREA BTN
const krBTN = document.createElement("button")
krBTN.classList.add("btn-outline-dark", "btn-item")
krBTN.append("Korea")
btnDIV.append(krBTN)
krBTN.setAttribute("id", "KR")


// CREATE JAPAN BTN
const jpBTN = document.createElement("button")
jpBTN.classList.add("btn-outline-dark", "btn-item")
jpBTN.append("Japan")
btnDIV.append(jpBTN)
jpBTN.setAttribute("id", "JP")


// CREATE CHINA BTN
const chBTN = document.createElement("button")
chBTN.classList.add("btn", "btn-outline-dark", "btn-item")
chBTN.append("China")
btnDIV.append(chBTN)
chBTN.setAttribute("id", "CH")


/***************************************************************************/


// !!! THIS PART COULD BE DONE BY USING TEMPLATE LITERAL 


let section = document.querySelector(".section-center")
document.addEventListener("DOMContentLoaded", structure);

function structure(item){

  section.innerHTML = "" // CLEAR THE SECTION
  
  menu.map(item => {
    
    // CREATE MENU ELEMENTS !!!
    let menuItem = document.createElement("div")
    menuItem.classList.add("menu-items", "col-lg-6", "col-sm-12")
    let Image = document.createElement("img")

    Image.classList.add("photo")
    let menuInfo = document.createElement("div")
    menuInfo.classList.add("menu-info")

    let menuTitle = document.createElement("div")
    menuTitle.classList.add("menu-title")

    let title = document.createElement("h3")
    let price = document.createElement("h4")

    let menuTxt = document.createElement("div")
    menuTxt.classList.add("menu-text")


    // APPEND ELEMENTS
    section.append(menuItem)
    menuItem.append(Image, menuInfo)
    menuInfo.append(menuTitle, menuTxt)
    menuTitle.append(title, price)


    Image.setAttribute("src", item.img)
    title.append(item.title)
    price.append(item.price)
    menuTxt.append(item.desc)

  })
}
document.querySelector("#All").addEventListener("click", structure) // BUILD THE SECTION WITH ALL BUTTON


/***************************************************************************/


// KOREA MENU

const KoreaFoods = () => {

  section.innerHTML = "" // CLEAR THE SECTION

  menu.map(item => {

    if(item.category === "Korea"){

      section.innerHTML += // ADDING THE HTML STRUCTURE OF KOREA SECTION
      `
        <div class="menu-items col-lg-6 col-sm-12">
          <img class="photo" src="${item.img}" alt="${item.title}">
          <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </div>
            <div class="menu-text">${item.desc}</div>
          </div>
        </div>
      `
    }
  })
}
document.querySelector("#KR").addEventListener("click", KoreaFoods) // BUILD THE SECTION WITH KOREA BUTTON


// JAPAN MENU

const JapanFoods = () => {

  section.innerHTML = "" // CLEAR THE SECTION

  menu.map(item => {

    if(item.category === "Japan"){
      
      section.innerHTML += // ADDING THE HTML STRUCTURE OF JAPAN SECTION
      `
        <div class="menu-items col-lg-6 col-sm-12">
          <img class="photo" src="${item.img}" alt="${item.title}">
          <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </div>
            <div class="menu-text">${item.desc}</div>
          </div>
        </div>
      `
    }
  })
}
document.querySelector("#JP").addEventListener("click", JapanFoods) // BUILD THE SECTION WITH JAPAN BUTTON


// CHINA MENU

const ChinaFoods = () => {

  section.innerHTML = "" // CLEAR THE SECTION

  menu.map(item => {

    if(item.category === "China"){
      
      section.innerHTML += // ADDING THE HTML STRUCTURE OF CHINA SECTION
      `
        <div class="menu-items col-lg-6 col-sm-12">
          <img class="photo" src="${item.img}" alt="${item.title}">
          <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </div>
            <div class="menu-text">${item.desc}</div>
          </div>
        </div>
      `  
    }
  })
}
document.querySelector("#CH").addEventListener("click", ChinaFoods) // BUILD THE SECTION WITH CHINA BUTTON