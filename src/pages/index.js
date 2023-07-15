import { useState } from 'react'
import Head from 'next/head'

import styles from '@/styles/index.module.css'

import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import GameCard from '@/components/cards/gameCard/gameCard'

export default function Home() {
  const [cart, setCart] = useState([])

  const handelAddProduct = (info) => {
    setCart([...cart, info])
  }

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos))
  }

  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveProduct} />
        <Container>
          <div className={styles.sessao}>
            <Subtitle>Promoções</Subtitle>
          </div>
          <div className={styles.salecontainer}>
            <SaleCard
              imagem={'league-of-legends.jpg'}
              desconto='30%'
              preco='199,90'
              precoComDesconto='99,90'
              onAdd={() => 
                handelAddProduct({ nome: 'League of Legends', preco: 99.90, imagem: 'league-of-legends.jpg' })}
            />
            <SaleCard
              imagem={'dota-2.jpg'}
              desconto='40%'
              preco='299,90'
              precoComDesconto='109,90'
              onAdd={() => 
                handelAddProduct({ nome: 'Dota 2', preco: 109.90, imagem: 'dota-2.jpg' })}
            />
            <SaleCard
              imagem={'valorant.jpg'}
              desconto='50%'
              preco='399,90'
              precoComDesconto='209,90'
              onAdd={() => 
                handelAddProduct({ nome: 'Valorant', preco: 209.90, imagem: 'valorant.jpg' })}
            />
          </div>
          <div className={styles.sessao}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
              <GameCard 
                onAdd={() => 
                  handelAddProduct({ nome: 'Counter Strike: Global Ofensive', preco: 99.90, imagem: 'counter-strike.jpg' })}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
