import Image from 'next/image'
import styles from './cartOption.module.css'

export default function CartOption ( imagem, titulo, preco, onRemove) {
    return (
        <div className={styles.opcoes}>
            <Image className={styles.imagem} src={`/products/${imagem}`} alt={`Produto ${imagem}`} width={62} height={74}/>   
            <div className={styles.info}>
                <h3>{titulo}</h3>
                <h3 className={styles.preco}>R${preco.toFixed(2)}</h3>
                <p onClick={onRemove}>remover</p>
            </div>
        </div>
    )
}