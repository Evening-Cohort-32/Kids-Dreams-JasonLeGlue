import { getCelebrities } from "./database.js";

const celebrities = getCelebrities();

export const Celebrities = () => {
  let html = "<ol>";

  for (const celebrity of celebrities) {
    html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-name="${celebrity.name}"
                    data-sport="${celebrity.sport}">
                    ${celebrity.name}
                </li>`;
  }

  html += "</ol>";
  return html;
};

addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  const celebName = itemClicked.dataset.name;
  const celebSport = itemClicked.dataset.sport;

  if (itemClicked.dataset.type === "celebrity") {
    window.alert(`${celebName} is a ${celebSport} star!`);
  }
});
