const menu = [
  {
    id: 1,
    title: "Fried Rice and Chicken",
    category: "Rice-Dish",
    price: 3000,
    img: "./images/fried.jpeg",
    desc: `Delicious and rich fried rice and chicken will leave you coming back for more`,
  },
  {
    id: 2,
    title: "Jollof Rice and Chicken",
    category: "Rice-Dish",
    price: 3000,
    img: "./images/Jollof.jpeg",
    desc: `Our most popular and ordered dish the fried rice and chicken with a side of plantain and salad`,
  },
  {
    id: 3,
    title: "Shrimp Rice",
    category: "Rice-Dish",
    price: 2500,
    img: "./images/shrimp.jpeg",
    desc: `Our special shrimp fried rice is delicious with the fresh taste of the shrimp gives it that extra magic`,
  },
  {
    id: 4,
    title: "Rice & Stew with chicken",
    category: "Rice-Dish",
    price: 3000,
    img: "./images/stewrice.jpeg",
    desc: `Spice chicken stew with white rice a dish that will leave you wanting more any time any day`,
  },
  {
    id: 5,
    title: "Catfish Pepper Soup",
    category: "Soups",
    price: 1800,
    img: "./images/catfrish.jpeg",
    desc: `Our delicious cat-fish pepper soup is sure to please that taste board of yours with a kick of spice.`,
  },
  {
    id: 6,
    title: "Goat-Meat Pepper Soup",
    category: "Soups",
    price: 1500,
    img: "./images/goatmeat.jpeg",
    desc: `Goat meat pepper soup is a popular demand as people come to enjoy the authentic gamey taste of the goat meat`,
  },
  {
    id: 7,
    title: "Ogbono Soup",
    category: "Soups",
    price: 1500,
    img: "./images/ogbono.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "Egusi Soup",
    category: "Soups",
    price: 1500,
    img: "./images/egusi.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Banga Soup",
    category: "Soups",
    price: 1500,
    img: "./images/banga.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Fisherman Soup",
    category: "Soups",
    price: 2000,
    img: "./images/fisher.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "Vegetable Soup",
    category: "Soups",
    price: 1500,
    img: "./images/Veg.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "Beans and Plantain",
    category: "Lunch",
    price: 1000,
    img: "./images/beans.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 13,
    title: "Fried-Yam and Stew",
    category: "Lunch",
    price: 1000,
    img: "./images/friedyam.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 14,
    title: "Yam and Egg",
    category: "Lunch",
    price: 1000,
    img: "./images/EggYam.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 15,
    title: "Okro Soup",
    category: "Soups",
    price: 1000,
    img: "./images/okro.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}Naira</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-dish=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.dish;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
