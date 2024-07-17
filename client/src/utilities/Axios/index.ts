import axios from "axios";
import { USER_BASE_URL, ADMIN_BASE_URL } from "../../config";

const axios_user = axios.create({ baseURL: USER_BASE_URL, headers: {} });
const axios_admin = axios.create({ baseURL: ADMIN_BASE_URL, headers: {} });

export { axios_user, axios_admin };
