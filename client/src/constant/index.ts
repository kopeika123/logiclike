import {ApiService} from "../services/ApiService";

export const BASE_URL = new ApiService(process.env.REACT_APP_API_URL || 'http://localhost:5000/api');