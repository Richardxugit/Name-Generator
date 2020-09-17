import axios from 'axios';


export default () => {
    const baseURL = "https://localhost:5001/names";
    const Sever = axios.create({
        baseURL,
    });
    return Sever.get()
        .then((res) => res.data)
        .catch((e) => console.log(e.response))
}
