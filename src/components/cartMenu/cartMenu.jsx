import styles from './cartMenu.module.css'
import CartOption from '@/components/cartOption/cartOption'

export default function CartMenu () {
    return (
        <div className={styles.menu}>
            <div className={styles.opcoes}>
                <CartOption/>
                <CartOption/>
                <CartOption/>
            </div>
            <div className={styles.linha_de_preco}>
                <h2>Total:</h2>
                <h2 className={styles.preco}>R$999,99</h2>
            </div>
        </div>
    )
}