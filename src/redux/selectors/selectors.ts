import { RootState } from "../store";

export const getActiveOrder = (state: RootState) => state.order.activeOrder;
