import styles from './navbar.module.css'
import { BsCart4 } from 'react-icons/bs'
import Logo from '@/components/logo/logo'
import Input from '@/components/forms/input/input'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Logo />
            <div className={styles.barra_de_pesquisa}>
            <Input type="text" placeholder="Buscar" fullWidth />
            </div>
            <BsCart4 size={40} />
        </div>
    )
}