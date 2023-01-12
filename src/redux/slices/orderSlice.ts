import { createSlice } from "@reduxjs/toolkit";
import { ICoords } from "../../models/coords";
import { IOrder } from "../../models/order";

interface IOrderState {
    activeOrder: IOrder | null;
    path: ICoords[] | null;
    orders: IOrder[] | null;
    isLoading: boolean;
}

const initial: IOrderState = {
    activeOrder: null,
    path: null,
    orders: null,
    isLoading: false,
};

const slice = createSlice({
    name: "order",
    initialState: initial,
    reducers: {
        setActiveOrder: (state, action) => {
            state.activeOrder = action.payload;
        },
        getOrders: (state) => {
            state.isLoading = true;
        },
        getOrdersSuccess: (state, action) => {
            state.isLoading = false;
            state.orders = action.payload;
        },
        setPath: (state, action) => {
            state.path = action.payload;
        },
    },
});

export default slice.reducer;

export const { setActiveOrder, setPath, getOrders, getOrdersSuccess } = slice.actions;
