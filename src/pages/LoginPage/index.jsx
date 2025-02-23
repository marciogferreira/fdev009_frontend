import styles from '../LoginPage/Login.module.css';
import imgCar from './img/img_car.png';

export default function LoginPage() {
    return (
        <section className={styles.sec}>
        <div>
            <h2>Login Page</h2>
            <figure>
                <img className={styles.imagem_car}   src={imgCar} alt="Carro" />
            </figure>
            <form className={styles.formulario}>
                <label className={styles.lbl} for="username"><strong>usuario</strong></label>
                <input className={styles.inp} type="text" id="username" name="username" required />
                <label className={styles.lbl} for="password"><strong>senha</strong></label>
                <input className={styles.inp} type="password" id="password" name="password" required />
                <button className={styles.btn_logar} type="submit" id="logar">Login</button>
            </form>
        </div>
        </ section>
    )
}