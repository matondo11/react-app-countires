import style from './BarraBusca.module.css'

export default function BarraBusca({ texto }) {
    return (
        <div className={style.barraBusca}>
            <input type="text" placeholder={texto} />
        </div>
    )
}
