import { api_options } from "./constants";
const { url, path } = api_options.json_server;
import { getData } from "./getData";
import moduleTpl from "./../templates/module.hbs"


export async function getCurrentUserData() {
        const uid = localStorage.getItem("uid")
        const users = await getData(url, path.users);
        const filtered_users = users.filter(user => user.id === JSON.parse(uid));

        console.log("filtered_users", filtered_users);
        document.body.insertAdjacentHTML("beforebegin", moduleTpl(filtered_users))

        get_changed_user_data(filtered_users[0]);
  }


function get_changed_user_data(changed_data) {
    console.log("changed_data ", changed_data);

    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(changed_data)
    }
}
