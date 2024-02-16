import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createCategory, createGroup} from "../http/materialAPI";

const CreateGroup = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addGroup = () => {
        createGroup({title: value}).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить предмет
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название группы"}>
                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"success"} onClick={addGroup}>Добавить</Button>
                <Button variant={"danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateGroup;