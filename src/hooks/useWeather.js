import { useState } from "react";
import { findWeather } from "../services/weather";

export function useWeather({search}) {

    const [weather, setWeather] = useState()

    const getWeather = async () => {
        const newWeather = await findWeather({search})
        setWeather(newWeather)
    }

    return {weather, getWeather}
}