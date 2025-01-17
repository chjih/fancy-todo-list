import { setEvent } from "../../utils/handler.js";
import * as ActionHistoryListDialog from "../action-history-list/index.js";

export function template() {
  return `      
    <header class="header surface-alt">
        <h1 class="logo text-strong">TODOLIST</h1>
        <button class="action-history-open-button" type="button">
            <img alt="사용기록" src="./assets/icons/history.svg" width='24' height='24' />
        </button>
    </header>
  `;
}

const app = document.querySelector("#app");

setEvent(app, "click", (event) => openHistory(event));

export function render(parent) {
  parent.insertAdjacentHTML("afterbegin", template());
}

const openHistory = (e) => {
  const target = e.target.closest("button");
  if (target && target.classList.contains("action-history-open-button")) {
    ActionHistoryListDialog.show();
  }
};
