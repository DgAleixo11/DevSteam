import Image from 'next/image'
import styles from './saleCard.module.css'
import Button from '@/components/forms/button/button'

export default function SaleCard ({ imagem, desconto, preco, precoComDesconto, onAdd }) {
    return (
        <div className={styles.salecard}>
            <Image src={`/products/${imagem}`} alt={`Produto ${imagem}`} width={250} height={300}/>
            <div className={styles.info}>
                <h3 className={styles.titulo}>Oferta Exclusiva</h3>
                <div className={styles.precos_do_card}>
                    <div className={styles.desconto}>-{desconto}</div>
                    <div className={styles.preco}>
                        <p>R${preco}</p>
                        <h4>R${precoComDesconto}</h4>
                    </div>
                </div>
                <Button fullWidth onClick={onAdd}>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}

SaleCard.defaultProps = {
    imagem: "league-of-legends.jpg",
    desconto: '90%',
    preco: '199,90',
    precoComDesconto: '57,90'
}