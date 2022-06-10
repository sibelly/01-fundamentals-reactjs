import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://avatars.githubusercontent.com/u/7544858?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Sibelly Cavalcante</strong>
                        <span>Web developer</span>
                    </div>
                </div>
                <time
                    title="10 de Junho às 17:00"
                    dateTime='2022-06-10 17:00:00'
                >
                        Publicado há uma hora
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="">jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a> {' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

        </article>
    );
}