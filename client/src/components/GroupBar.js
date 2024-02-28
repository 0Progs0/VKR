import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Container} from "react-bootstrap";

const GroupBar = observer(() => {
    const {group} = useContext(Context)
    return (
        <Container>
            <div style={{color:'gray'}} className={"p-2 ms-2"}>Выберите категорию материалов:</div>
            <Container className={"d-flex"}>
            {group.groups.map(groupsItem =>
                <Card
                    key={groupsItem.id}
                    onClick={() => group.setSelectedGroup(groupsItem)}
                    border={groupsItem.id === group.selectedGroup.id ? 'primary' : 'light'}
                    className={"p-2 ms-1"}
                    style={{cursor:'pointer'}}
                >
                    {groupsItem.title}
                </Card>
            )}
            </Container>
        </Container>
    );
});

export default GroupBar;