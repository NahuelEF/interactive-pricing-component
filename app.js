const range = document.getElementById("range");

range.addEventListener("input", () => {
  let x = (range.value * 100) / 4;
  range.style.background = `linear-gradient(
    90deg,
    var(--soft-cyan-full-slider) ${x}%,
    var(--light-grayish-blue-slider) ${x}%
  )`;
});

/* 
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month
*/

/* 
const pageviews = [
    { pageviews: "10K", price: 8 },
    { pageviews: "50K", price: 12 },
    { pageviews: "100K", price: 16 },
    { pageviews: "500k", price: 24 },
    { pageviews: "1M", price: 36 },
  ];
*/
