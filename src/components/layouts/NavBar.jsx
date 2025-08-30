import style from './NavBar.module.css'

export default function NavBar ({label, item , icon}) {
    return (
        <div className={style.navbar}>
            <h1>{label}</h1>
            <button><i>{icon}</i>{item}</button>
        </div>
    )
}