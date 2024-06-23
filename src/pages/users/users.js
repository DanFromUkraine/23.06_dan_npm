import "../../style/css/main.css";
import "../../style/css/auth_form.css";
import "../../utils/add_header";
import "../../utils/changeUserData"

import userListTpl from "../../templates/userList.hbs";
import { getData } from "../../utils/getData";
import { api_options } from "../../utils/constants";
import { getCurrentUserData } from "../../utils/changeUserData";


const { url, path } = api_options.json_server;
const userList = document.querySelector(".userList");

async function renderUserData() {
    const users = await getData(url, path.users);
      const userElement = userListTpl(users);
      userList.insertAdjacentHTML("beforeend", userElement);

      getCurrentUserData();

}

renderUserData();


async function loadUserInfo() {
  await new Promise((res) => window.addEventListener("load", res));
  setTimeout(function() {
    const updateBtn = document.querySelectorAll(".changeBtn");
    

    updateBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {

        const form_cont = document.querySelector(".form_main");
        form_cont.classList.toggle("form_show");
        localStorage.setItem("uid", JSON.stringify(e.target.dataset.set))
      });
    });


  }, 1000)
  
}

loadUserInfo();
