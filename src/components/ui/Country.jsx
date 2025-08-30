import style from "./Country.module.css"


export default function Country({ imgUrl, name, population, region, capital }) {
    return (
        <div className={style['country-card']}>
            <img src={imgUrl} alt={name} className={style.flag} />
            <div className={style['country-info']}>
                <h2 className={style['country-name']}>{name}</h2>
                <p className={style['country-population']}>Population: {population}</p>
                <p className={style['country-region']}>Region: {region}</p>
                <p className={style['country-capital']}>Capital: {capital}</p>
            </div>
        </div>
    )
}

