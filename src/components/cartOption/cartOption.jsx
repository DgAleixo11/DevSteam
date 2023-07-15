import Image from 'next/image'
import styles from './cartOption.module.css'

export default function CartOption () {
    return (
        <div className={styles.opcoes}>
            <Image src={`/products/league-of-legends.jpg`} width={62} height={74}/>   
            <div className={styles.info}>
                <h3>League of Legends</h3>
                <h3 className={styles.preco}>R$99,90</h3>
                <p>remover</p>
            </div>
        </div>
    )
}