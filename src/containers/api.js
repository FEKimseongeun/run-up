import React from "react";
import axios from "axios";
import * as https from "https";

export const client = axios.create({
    baseURL: 'https://runuptoolcloud22.paas-ta.org',
    withCredentials: false,
    responseType: "json",
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),

    headers: {
        "Content-Type": "application/json"
    }
});