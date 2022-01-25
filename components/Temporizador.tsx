import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Temporizador.module.css'


interface TemporizadorProps {
    key: any
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
            colors={['#BCE596', '#F7B801', '#FF0000',]}
            colorsTime={[7, 3, 0]}
            
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        

        </div>
    )

}