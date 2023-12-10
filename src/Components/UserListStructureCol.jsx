import { Button, Card, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { deleteUsers } from "../services/ProfileService";
import { fetchallUsersfromserver } from "../services/ProfileService";

export function UserListStructureCol(props) {
    const [show, setShow] = useState(false);
    const [profiles, setProfile] = useState([]);
    const [showDialog, setDialog] = useState(false);
    const [selectname, setselectname] = useState("");
    // const [records, setRecords] = useState([]);
    const openDialog = () => {
        setDialog(true);
    }
    const closeDialog = () => {
        setDialog(false);
    }

    async function fetchallprofilelist() {
        const response = await fetchallUsersfromserver();
        setProfile(response.data.profile_Details);
        // setRecords(response.data.profile_Details);
    }
    useEffect(() => {
        fetchallprofilelist();
    }, []);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const removeuser = async () => {
        try {
            await deleteUsers(selectname);
           fetchallprofilelist();
            closeDialog();
        } catch (error) {
            console.log(error);
        }
    }
    return (

        <Col lg={4} >
            <Card className="box-s" >
                <Card.Img variant="top" style={{ height: '500px' }} src={props.userprofile.img} />
                <Card.Body>
                    <Card.Title>{props.userprofile.name}</Card.Title>
                    <Card.Text>
                        {props.userprofile.age}
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>
                        See Profile
                    </Button>
                    <Button variant="danger" onClick={() => {
                        openDialog();
                        setselectname(props.userprofile.name);
                        // removeuser(props.userprofile.name);
                    }}>
                        Delete
                    </Button>

                    <Modal show={show} onHide={handleClose} size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Profile Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col lg={6}><Image style={{ height: '400px', width: '350px' }} src={props.userprofile.img} roundedCircle />
                                </Col>
                                <Col lg={6}>
                                    <div>
                                        <span>Name : </span><span>{props.userprofile.name}</span>
                                    </div>
                                    <div>
                                        <span>Age : </span><span>{props.userprofile.age}</span>
                                    </div>
                                    <div>
                                        <span>hobbies : </span><span>{props.userprofile.hobbies}</span>
                                    </div>
                                    <div>
                                        <span>Gender : </span><span>{props.userprofile.gender}</span>
                                    </div>
                                    <div>
                                        <span>Location : </span><span>{props.userprofile.location}</span>
                                    </div>
                                    <div>
                                        <span>password : </span><span>{props.userprofile.password}</span>
                                    </div>

                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleShow}>
                                Update
                            </Button>
                            {/* <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button> */}
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
            </Card>
            <Modal show={showDialog} onHide={closeDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Profile Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do You really want to Delete?</Modal.Body>
                <Modal.Footer>
                    <Button variant="Sucess" onClick={() => {
                        removeuser();
                    }}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </Col>


    );
}