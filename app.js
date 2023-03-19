const range = document.getElementById("range");
const pageview = document.getElementById("pageview");
const price = document.getElementById("price");
const discount = document.getElementById("discount");

const pageviews = [
  { pageviews: "10K", price: 8 },
  { pageviews: "50K", price: 12 },
  { pageviews: "100K", price: 16 },
  { pageviews: "500k", price: 24 },
  { pageviews: "1M", price: 36 },
];

discount.addEventListener("change", () => {
  discount.checked;
});

range.addEventListener("input", () => {
  let num = range.value;
  let x = (num * 100) / 4;
  range.style.background = `linear-gradient(
    90deg,
    var(--soft-cyan-full-slider) ${x}%,
    var(--light-grayish-blue-slider) ${x}%
  )`;

  setValue(num);
});

const setValue = (value) => {
  pageview.textContent = pageviews[value].pageviews;
  price.textContent = `$${pageviews[value].price}.00`;
};
