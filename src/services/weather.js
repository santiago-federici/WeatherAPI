export const findWeather = async ({search}) => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${search}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9de0e52995msh7865a64c5a71242p135d44jsn4af5c7bf078a',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const res = await fetch(url, options);
        const data = await res.json();
        
        const {current, location} = data
        const {country, localtime, name} = location
        const {condition, is_day, temp_c} = current
        const {text, icon} = condition




        return {
            conditionText: text,
            conditionIcon: icon,
            localtime,
            country,
            name,
            isDay: is_day,
            temp: temp_c
        }
        
    } catch (e) {
        throw new Error("Trouble finding the weather")
    }
}