import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../css/MainScreen.css";
import AdvisorPic from "../img/default-user.jpg";

const AdvisorInfo = (props) => {
  return (
    <>
      <Modal
        show={props.modalOpen}
        onHide={props.handleModalOpen}
        id="contactModal"
      >
        <Modal.Header>
          <Modal.Title>Advisor Information</Modal.Title>
          <buttonClose
            class="close1"
            data-dismiss="modal"
            onClick={props.handleModalOpen}
          >
            <span>&times;</span>
          </buttonClose>
        </Modal.Header>
        <Modal.Body>
          <div class="row2" id="modalBody">
            <img src={AdvisorPic} width="150px" height="150 px" />
            <div class="col">
              <h6>Advisor Name: Professor Ruby</h6>
              <h6>Email: ruby.elkharboutly@quinnipiac.edu</h6>
              <h6>Phone: 203-123-4556</h6>
              <h6>Office: CCE-030</h6>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="col-md-4 text-center">
            <Button
              class="btn btn-danger"
              href="mailto:help@qu.edu"
              title="glorythemes"
            >
              Send Email
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdvisorInfo;
