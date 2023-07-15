import styles from './navbar.module.css'
import { BsCart4 } from 'react-icons/bs'
import Logo from '@/components/logo/logo'
import Input from '@/components/forms/input/input'
import CartButton from '../forms/cartButton/cartButton'

export default function Navbar( cart, onRemove ) {
    return (
        <div className={styles.navbar}>
            <Logo />
            <div className={styles.barra_de_pesquisa}>
            <Input type="text" placeholder="Buscar" fullWidth />
            </div>
            <CartButton 
                cart={cart}
                onRemove={onRemove}
            />
        </div>
    )
}