import { call, put, takeEvery, select } from "redux-saga/effects";
import { getData } from "../../http/dataService";
import { ICoords } from "../../models/coords";
import { IOrder } from "../../models/order";
import { setPath } from "../slices/orderSlice";
import { getActiveOrder } from "../selectors/selectors";

function* getPath() {
    try {
        const order: IOrder = yield select(getActiveOrder);
        const response: ReturnType<typeof getData> = yield call(getData, order);
        const coords = (response as any).data.routes[0].geometry.coordinates;
        let reversed: ICoords[] = coords.map((position: ICoords) => {
            return ([position[1], position[0]]);
        });
        yield put(setPath(reversed));
    } catch (error) {
        console.log(error);
    }
}

function* pathSaga() {
    yield takeEvery("order/setActiveOrder", getPath);
}

export default pathSaga;
