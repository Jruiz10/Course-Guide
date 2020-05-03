import React from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../css/MainScreen.css";
import AdvisorPic from "../img/Avatar.png";
import LoginForm from "./loginForm";

const LoginModal = (props) => {
  return (
    <>
      <Modal
        show={props.modalOpen}
        onHide={props.handleModalOpen}
        id="contactModal"
      >
        <Modal.Header>
          <Modal.Title>Sign In</Modal.Title>
          <buttonClose
            className="close1"
            data-dismiss="modal"
            onClick={props.handleModalOpen}
          >
            <span>&times;</span>
          </buttonClose>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <LoginForm user={props.user} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
