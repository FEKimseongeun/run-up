import React from "react";
import axios from "axios";
import * as https from "https";

export const api = axios.create({
        baseURL: 'https://runuptoolcloud22.paas-ta.org',
        timeout: 180000,
        withCredentials: false,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
    });