const serviceOne = document.querySelector(".service-1");
const serviceTwo = document.querySelector(".service-2");
const serviceThree = document.querySelector(".service-3");

const invoiceListContainer = document.querySelector(".invoice-list-container");

const washCar = {
  title: "Wash Car",
  price: "10",
};

const mowLawn = {
  title: "Mow Lawn",
  price: "20",
};

const pullWeeds = {
  title: "Pull Weeds",
  price: "30",
};

serviceOne.addEventListener("click", () => {
  addToCard(washCar);
});

serviceTwo.addEventListener("click", () => {
  addToCard(mowLawn);
});

serviceThree.addEventListener("click", () => {
  addToCard(pullWeeds);
});

function addToCard(service) {
  const invoiceList = document.createElement("div");
  invoiceList.classList.add("invoice-list");

  const invoiceName = document.createElement("div");
  invoiceName.classList.add("invoice-order");

  const invoicePrice = document.createElement("div");
  invoicePrice.classList.add("invoice-price");

  const title = service.title;
  const h2 = document.createElement("h2");
  h2.textContent = title;
  const button = document.createElement("button");
  button.classList.add("remove");
  button.textContent = "Remove";
  const price = service.price;
  const p = document.createElement("p");
  p.textContent = price;
  const span = document.createElement("span");
  span.textContent = "$";

  invoiceName.appendChild(h2);
  invoiceName.appendChild(button);
  invoicePrice.appendChild(span);
  invoicePrice.appendChild(p);

  invoiceList.appendChild(invoiceName);
  invoiceList.appendChild(invoicePrice);

  invoiceListContainer.appendChild(invoiceList);
}
