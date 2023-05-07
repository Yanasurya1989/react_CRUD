import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const CourseCreateModal = ({ show, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = () => {
    const timeStamp = Math.floor(Date.now() / 1000);
    const payload = {
      id: timeStamp,
      title,
      description,
    };
    handleSubmit(payload);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Course</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter title" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control onChange={(e) => setTitle(e.target.value)} as="textarea" placeholder="Description" />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          Close
        </Button>
        <Button onClick={onSubmit} variant="primary">
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CourseCreateModal;
