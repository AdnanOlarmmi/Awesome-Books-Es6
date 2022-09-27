const date = document.querySelector('.date');
import { DateTime } from "./luxon.js";

const renderDate = () => {
  setInterval(() => {
    date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }, 1000);
};

export default renderDate;
