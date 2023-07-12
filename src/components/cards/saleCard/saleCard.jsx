import Image from 'next/image'
import styles from './saleCard.module.css'
import Button from '@/components/forms/button/button'

export default function SaleCard () {
    return (
        <div className={styles.salecard}>
            <Image src='/products/league-of-legends.jpg' width={250} height={300}/>
            <div className={styles.info}>
                <h3 className={styles.titulo}>Oferta Exclusiva</h3>
                <div className={styles.precos_do_card}>
                    <div className={styles.desconto}>-20%</div>
                    <div className={styles.preco}>
                        <p>R$99,90</p>
                        <h4>R$79,92</h4>
                    </div>
                </div>
                <Button fullWidth={true}>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}