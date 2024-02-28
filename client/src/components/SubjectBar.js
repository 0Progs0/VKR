import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const SubjectBar = observer(() => {
    const {subject} = useContext(Context)
    return (
        <ListGroup className={"list-group-bg:"}>
            {subject.subjects.map(subjectItem =>
            <ListGroup.Item
                key={subjectItem.id}
                onClick={() => subject.setSelectedSubject(subjectItem)}
                active={subjectItem.id === subject.selectedSubject.id}
                style={{cursor:'pointer'}}
            >
                {subjectItem.title}
            </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default SubjectBar;