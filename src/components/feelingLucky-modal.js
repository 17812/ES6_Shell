import React from 'react'
import {Button, Modal,ModalHeader, ModalBody, ModalFooter} from 'reactstrap'


const FeelingLuckyModal = (props)=>(

  

        <Modal isOpen={props.modal} toggle={props.toggle} >
          <ModalHeader toggle={props.toggle}>What should I do now?</ModalHeader>
          <ModalBody>
             {props.feelingLuckySelection}
          </ModalBody>
          <ModalFooter>
              <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={props.toggle}>Cancel</Button>
          </ModalFooter>
      </Modal>   
)

export default FeelingLuckyModal