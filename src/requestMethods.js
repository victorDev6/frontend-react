import axios from "axios";


const BASE_URL = 'http://localhost:5000/api/';
// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2NjZDgyNzhiZmRkZmMzYTljNTM5YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzM4Mjc2MSwiZXhwIjoxNjQ3NjQxOTYxfQ.5Elg_mQMmPm2Q9IX3ouTUPxVbHLXLmJ9LtgNTpL-Rmw';
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const UserRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});
