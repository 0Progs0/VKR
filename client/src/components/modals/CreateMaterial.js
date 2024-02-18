import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createMaterial, fetchCategories, fetchGroups, fetchSubjects} from "../http/materialAPI";
import {jwtDecode} from "jwt-decode";
import {observer} from "mobx-react-lite";

const CreateMaterial = observer(({show, onHide}) => {
    const {material} = useContext(Context)
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [file,setFile] = useState(null)


    useEffect(() => {
        fetchSubjects().then(data => material.setSubjects(data))
        fetchCategories().then(data => material.setCategories(data))
        fetchGroups().then(data => material.setGroups(data))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addMaterial = () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('date_publication', new Date())
        formData.append('file', file)
        formData.append('userId', jwtDecode(localStorage.getItem('token')).id)
        formData.append('categoryId', material.selectedCategory.id)
        formData.append('subjectId', material.selectedSubject.id)
        formData.append('groupId', material.selectedGroup.id)
        createMaterial(formData).then(data => onHide())
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
                    <Dropdown className={"mt-2 mb-2"}>
                        <Dropdown.Toggle>{material.selectedSubject.title || "Выберите предмет"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {material.subjects.map(subject =>
                                <Dropdown.Item onClick={() => material.setSelectedSubject(subject)} key={subject.id}>{subject.title}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={"mt-2 mb-2"}>
                        <Dropdown.Toggle>{material.selectedCategory.title || "Выберите вид"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {material.categories.map(category =>
                                <Dropdown.Item onClick={() => material.setSelectedCategory(category)} key={category.id}>{category.title}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={"mt-2 mb-2"}>
                        <Dropdown.Toggle>{material.selectedGroup.title || "Выберите категорию"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {material.groups.map(group =>
                                <Dropdown.Item onClick={() => material.setSelectedGroup(group)} key={group.id}>{group.title}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"Введите название"}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    >

                    </Form.Control>
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"Введите описание"}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    >

                    </Form.Control>
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"Выберите файл"}
                        type="file"
                        onChange={selectFile}
                    >

                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"success"} onClick={addMaterial}>Добавить</Button>
                <Button variant={"danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateMaterial;