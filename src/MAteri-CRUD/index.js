import { Col, Container, Row, Table, Button } from "react-bootstrap";
import CourseCreateModal from "./components/courseCreateModal";
import { useEffect, useState } from "react";
import courseService from "./utils/service";

const MateriCRUD = () => {
  const [showCreateModal, setShowModal] = useState(false);
  const [courses, setCourses] = useState([]);

  const toggleCreateModal = () => {
    setShowModal(!showCreateModal);
  };

  const handleAddCourse = (payload) => {
    courseService.addCourse(payload);
    toggleCreateModal();
    fetchCourses();
  };

  const fetchCourses = () => {
    const response = courseService.getCourses();
    setCourses(response.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h3>List Course</h3>
          <Button style={{ marginTop: "24px" }} varian={"primary"} onClick={toggleCreateModal}>
            Add Data
          </Button>
          <Table>
            <thead>
              <tr>
                <td>No</td>
                <td>Name</td>
                <td>Deskripsi</td>
                <td>Aksi</td>
              </tr>
            </thead>

            <tbody>
              {courses.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>
                      <Button varian={"warning"}>Edit</Button> <Button varian={"danger"}>Delete</Button>
                    </td>
                  </tr>
                );
              })}
              {/* <tr>
                <td>2</td>
                <td>Nama2</td>
                <td>Desc 2</td>
                <td>
                  <Button varian={"warning"}>Edit</Button> <Button varian={"danger"}>Delete</Button>
                </td>
              </tr> */}
            </tbody>
          </Table>
        </Col>
      </Row>
      <CourseCreateModal show={showCreateModal} handleClose={(toggleCreateModal) => {}} handleSubmit={(handleAddCourse) => {}} />
    </Container>
  );
};

export default MateriCRUD;
