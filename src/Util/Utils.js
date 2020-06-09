import { ACCESS_TOKEN } from "../Constants";
import {API_BASE_URL} from "../Constants";

export const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(encodeURI(options.url), options).then(response => response.json().then(json => {
        if(!response.ok) {
            return Promise.reject(json);
        }
        return json;
    }));
};

export const requestUserPlat = (options, username, platform) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
        'username': username,
        'platform': platform,
    })

    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(encodeURI(options.url), options).then(response => response.json().then(json => {
        if(!response.ok) {
            return Promise.reject(json);
        }
        return json;
    }));
};

export const requestUserPlatURL = (options, username, platform, URL) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
        'username': username,
        'platform': platform,
        'url': URL,
    })

    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(encodeURI(options.url), options).then(response => response.json().then(json => {
        if(!response.ok) {
            return Promise.reject(json);
        }
        return json;
    }));
};

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No Access Token Set");
    }

    return request({
        url: encodeURI(API_BASE_URL + "/auth/me"),
        method: 'GET'
    });
}

export function login(loginRequest) {
    return request({
        url: encodeURI(API_BASE_URL + "/auth/login"),
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: encodeURI(API_BASE_URL + "/auth/signup"),
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}