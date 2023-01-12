import { call, put, takeEvery } from "redux-saga/effects";
import { getData, getOrders } from "../../http/dataService";
import { getOrdersSuccess } from "../slices/orderSlice";

function* getOrdersList() {
    try {
        const response: ReturnType<typeof getData> = yield call(getOrders);
        yield put(getOrdersSuccess((response as any).data));
    } catch (error) {
        console.log(error);
    }
}

function* ordersSaga() {
    yield takeEvery("order/getOrders", getOrdersList);
}

export default ordersSaga;
