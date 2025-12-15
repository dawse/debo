import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className='box'>
            <div className="logo">
                <ion-icon name="bag"></ion-icon>
                <h1>DEBO</h1>
            </div>
            <p>Magasin en ligne offrant une large sélection de produits de qualité pour tous vos besoins. Profitez d’une expérience d’achat simple et sécurisée.</p>
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>À propos</h2>
            <ul>
              <li>Carrières</li>
              <li>Nos boutiques</li>
              <li>Notre équipe</li>
              <li>Conditions générales</li>
              <li>Politique de confidentialité</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>Service client</h2>
            <ul>
              <li>Centre d’aide</li>
              <li>Comment acheter</li>
              <li>Suivi de commande</li>
              <li>Achat en gros / entreprise</li>
              <li>Retours & remboursements</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>Contactez-nous</h2>
            <ul>
              <li>Adresse : Khasnadar, Tunisie</li>
              <li>Email : debo@gmail.com</li>
              <li>Téléphone : 29046499</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )  
}

export default Footer
