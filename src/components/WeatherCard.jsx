import './WeatherCard.css'
import daySunnyBg from '../assets/day-sunny-bg.jpg'
import nightSunnyBg from '../assets/night-sunny-bg.jpg'

export function WeatherCard({weather}) {

    const dayClassName = weather && (weather.isDay == 1 ? daySunnyBg : nightSunnyBg)

    // AITUBO: A single not realistic mountain in the middle, with lots of rain, with a blueish background.
    // Handle error: No city found

    return(

        weather && (
            <>
                <article className='card' style={{backgroundImage: 'url(' + dayClassName + ')', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
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