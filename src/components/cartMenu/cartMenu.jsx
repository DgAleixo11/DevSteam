import styles from './cartMenu.module.css'
import CartOption from '@/components/cartOption/cartOption'

export default function CartMenu ({ cart, onRemove }) {
    return (
        <div className={styles.menu}>
            <div className={styles.opcoes}>
                {
                    cart.length === 0 && <p>Não há produtos em seu carrinho.</p>
                }
                {
                    cart.map((cartInfo, pos) => 
                    <CartOption
                    image={cartInfo.imagem}
                    titulo={cartInfo.nome}
                    preco={cartInfo.preco}
                    onRemove={() => onRemove(pos)}
                    key={`cart-info-${pos}`}
                    />
                    )
                }
            </div>
            <div className={styles.linha_de_preco}>
                <h2>Total:</h2>
                <h2 className={styles.preco}>R$ {
                cart.reduce((prev, current) => prev + current.preco, 0).toFixed(2)
                }
                </h2>
            </div>
        </div>
    )
}