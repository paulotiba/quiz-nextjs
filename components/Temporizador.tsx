import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Temporizador.module.css'


interface TemporizadorProps {
    duracao: number
    tempoEsgotado: () => void
}


export default function Temporizadot(props: TemporizadorProps) {
    return(
        <div className={styles.temporizador}>
            <CountdownCircleTimer 
            duration={props.duracao}
            size={120}
            isPlaying
            onComplete={props.tempoEsgotado}
            colors={['#004777', '#f7b801', '#A30000',]}
            colorsTime={[7, 5, 0]}
            
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        

        </div>
    )

}