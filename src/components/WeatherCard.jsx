import './WeatherCard.css'

export function WeatherCard({weather}) {

    const dayClassName = weather && (weather.isDay == 1 ? 'day' : 'night')

    return(

        weather && (
            <>
                <article className={`${dayClassName} card`}>
                    <div className="card-country">
                        <h3>{weather.country}, {weather.name}</h3>
                    </div>

                    <div className='card-info'>
                        <div className='info-temp'>
                                <p className='temp-degrees'>{weather.temp}°</p>
                            <aside>
                                <img className='temp-img' src={weather.conditionIcon} alt={weather.conditionText} />
                                <p className='temp-condition'>{weather.conditionText}</p>
                            </aside>
                        </div>

                        
                        <p className='card-localtime'>{weather.localtime}</p>

                    </div>

                </article>
            </>
        )
        
    )
}