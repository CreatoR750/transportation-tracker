import { useEffect } from "react";
import { Marker, Polyline, Tooltip, useMap } from "react-leaflet";
import { useAppSelector } from "../../hooks/hooks";
import { ICoords } from "../../models/coords";
import { RootState } from "../../redux/store";
const limeOptions = { color: "lime" };

const Track = () => {
    const { activeOrder, path } = useAppSelector((state: RootState) => state.order);
    const map = useMap();

    useEffect(() => {
        if (activeOrder) {
            const bounds: ICoords[] = [
                [activeOrder.fromLat, activeOrder.fromLng],
                [activeOrder.toLat, activeOrder.toLng],
            ];
            map.fitBounds(bounds);
        }
    }, [activeOrder]);

    return (
        <>
            {activeOrder && (
                <>
                    <Marker position={{ lat: activeOrder.fromLat, lng: activeOrder.fromLng }}>
                        <Tooltip>Погрузка</Tooltip>
                    </Marker>
                    <Marker position={{ lat: activeOrder.toLat, lng: activeOrder.toLng }}>
                        <Tooltip>Разгрузка</Tooltip>
                    </Marker>
                </>
            )}

            {path && <Polyline pathOptions={limeOptions} positions={path} />}
        </>
    );
};

export default Track;
