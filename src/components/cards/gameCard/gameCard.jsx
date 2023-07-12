import Image from 'next/image'
import styles from './gameCard.module.css'
import Button from '@/components/forms/button/button'

export default function GameCard () {
    return (
        <div className={styles.gamecard}>
            <Image className={styles.imagem} src='/products/counter-strike.jpg' width={300} height={145} />
            <div className={styles.info}>
                <h3>Counter Strike: Global Offensive</h3>
                <p>Ação, estratégia, multijogador.</p>
                <div className={styles.preco}>
                    <h2>R$99,90</h2>
                    <Button>Adicionar ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}