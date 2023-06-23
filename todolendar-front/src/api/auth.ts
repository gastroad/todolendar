import axios from "axios";

// 로그인 토큰이 없어 axios instance 생성 생략
// 추후 로그인 토큰 개발시 interceptors를 통해 로그인 토큰 통신
export const httpPostLogin = async ({
    username, password
}: {
    username: string;
    password: string;
}) => {
    const { data } = await axios.post(`/api/login`, { username, password });
    return data;
};



