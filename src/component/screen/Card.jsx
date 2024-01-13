import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux"
import { addcart } from "../../action/addcart"

const Card = ({ pizza }) => {

  const [Varient, setvarient] = useState("small")
  const [quantity, setQuantity] = useState(1)
  const [show, setShow] = useState(false);
  const dispach = useDispatch();
  const addtocarthandler = () => {
    return dispach(addcart(pizza, quantity, Varient))
  }
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <div className="card col-md-4 my-40 ">
        <img src={pizza.image} className="card-img-top" alt="..." onClick={handleShow} />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <p className="card-text">{<>
            <Row>
              <Col md={6}>varient &nbsp;
                <select value={Varient} onChange={(e) => { setvarient(e.target.value) }}>
                  {
                    pizza.varients.map((varient) => {
                      return (<option>{varient}</option>)
                    })
                  }
                </select>
              </Col>

              <Col md={6}>quantity &nbsp;
                <select value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                  {
                    [...Array(10).keys()].map((v, i) => {
                      return <option value={i + 1} >{i + 1}</option>
                    })

                  }
                </select>
              </Col>
            </Row>
          </>}</p>
          <Row>
            <Col md={6}>price: {pizza.prices[0][Varient] * quantity}</Col>
            <Col md={6}><a
              onClick={() => { addtocarthandler() }}

              className="btn btn-primary">
              add to cart
            </a>
            </Col>
          </Row>
        </div>


        {/* modal */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{pizza.name}</Modal.Title>
          </Modal.Header>
          <img src={pizza.image} alt="" srcset="" />
          <Modal.Body>{pizza.description}</Modal.Body>

        </Modal>
      </div>
    </>
  )
}

export default Card