import axios from "axios";

const API = axios.create({
    baseURL:"runuptoolcloud22.paas-ta.org",
    headers:{
        "Content-Type" : "application/json",
    },
    widthCredentials: true,
});

export default API;