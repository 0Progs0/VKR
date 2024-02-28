import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createMaterial} from "../http/materialAPI";
import {fetchSubjects} from "../http/subjectAPI";
import {fetchGroups} from "../http/groupAPI";
import {fetchCategories} from "../http/categoryAPI";
import {observer} from "mobx-react-lite";

const CreateMaterial = observer(({show, onHide}) => {
    const {user, material, subject, group, category} = useContext(Context)
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [file,setFile] = useState(null)


    useEffect(() => {
        fetchSubjects().then(data => subject.setSubjects(data))
        fetchCategories().then(data => category.setCategories(data))
        fetchGroups().then(data => group.setGroups(data))
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
        formData.append('userId', user.user.id)
        formData.append('categoryId', category.selectedCategory.id)
        formData.append('subjectId', subject.selectedSubject.id)
        formData.append('groupId', group.selectedGroup.id)
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
                        <Dropdown.Toggle>{subject.selectedSubject.title || "Выберите предмет"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {subject.subjects.map(subjectItem =>
                                <Dropdown.Item onClick={() => subject.setSelectedSubject(subjectItem)} key={subjectItem.id}>{subjectItem.title}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={"mt-2 mb-2"}>
                        <Dropdown.Toggle>{category.selectedCategory.title || "Выберите вид"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {category.categories.map(categoryItem =>
                                <Dropdown.Item onClick={() => category.setSelectedCategory(categoryItem)} key={categoryItem.id}>{categoryItem.title}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={"mt-2 mb-2"}>
                        <Dropdown.Toggle>{group.selectedGroup.title || "Выберите категорию"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {group.groups.map(groupItem =>
                                <Dropdown.Item onClick={() => group.setSelectedGroup(groupItem)} key={groupItem.id}>{groupItem.title}</Dropdown.Item>
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