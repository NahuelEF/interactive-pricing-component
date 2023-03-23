const range = document.getElementById("range");
const pageview = document.getElementById("pageview");
const price = document.getElementById("price");
const discount = document.getElementById("discount");
const billing = document.getElementById("billing");

const pageviews = [
  { pageviews: "10K", price: 8 },
  { pageviews: "50K", price: 12 },
  { pageviews: "100K", price: 16 },
  { pageviews: "500k", price: 24 },
  { pageviews: "1M", price: 36 },
];

let discounted = false;

range.addEventListener("input", () => {
  setPrice();

  let num = range.value;
  let x = (num * 100) / 4;
  range.style.background = `linear-gradient(
    90deg,
    var(--soft-cyan-full-slider) ${x}%,
    var(--light-grayish-blue-slider) ${x}%
    )`;

  pageview.textContent = pageviews[num].pageviews;
});

discount.addEventListener("change", () => {
  discounted = discount.checked;
  setPrice();
});

const setPrice = () => {
  let a = pageviews[range.value].price;

  if (discounted) {
    a *= 25 / 100;
    price.textContent = `$${a}.00`;
    billing.textContent = "year";
  } else {
    price.textContent = `$${a}.00`;
    billing.textContent = "month";
  }
};
