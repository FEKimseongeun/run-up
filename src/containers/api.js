import axios from "axios";

const API = axios.create({
    baseURL:"https://runuptoolcloud22.paas-ta.org",
    headers:{
        "Content-Type" : "application/json",
    },
    widthCredentials: true,
});

export default API;