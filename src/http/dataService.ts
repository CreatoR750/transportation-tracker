import axios from "axios";
import { IOrder } from "../models/order";

export const getData = (order: IOrder) => {
    return axios.get(
        `http://router.project-osrm.org/route/v1/driving/${order.fromLng},${order.fromLat};${order.toLng},${order.toLat}?geometries=geojson`
    );
};

export const getOrders = () => {
    return axios.get("http://localhost:3001/orders");
};
