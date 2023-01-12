import "./table.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../redux/store";
import { getOrders, setActiveOrder } from "../../redux/slices/orderSlice";
import { Spin } from "antd";

const Table = () => {
    const dispatch = useAppDispatch();
    const { activeOrder, orders, isLoading } = useAppSelector((state: RootState) => state.order);

    useEffect(() => {
        dispatch(getOrders());
    }, []);

    return (
        <>
            {!isLoading ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Номер заявки</th>
                            <th>Координаты от lat</th>
                            <th>Координаты от lng</th>
                            <th>Координаты до lat</th>
                            <th>Координаты до lng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((data) => {
                            return (
                                <tr
                                    key={data.id}
                                    className={activeOrder?.id === data.id ? "active" : ""}
                                    onClick={() => dispatch(setActiveOrder(data))}
                                >
                                    <td>№{data.id}</td>
                                    <td>{data.fromLat}</td>
                                    <td>{data.fromLng}</td>
                                    <td>{data.toLat}</td>
                                    <td>{data.toLng}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <div style={{ width: "100%" }}>
                    <Spin />
                </div>
            )}
        </>
    );
};

export default Table;
