import axios from "axios";


async function getdata() {
    const {data:users} = await axios ("https://jsonplaceholder.typicode.com/users/" + user_id);
    const {data: posts} = await axios("https://jsonplaceholder.typicode.com/posts/" + user_id);
    console.log(users);
    console.log("Post",posts)
}

export default getdata;