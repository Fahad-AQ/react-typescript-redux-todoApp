import * as React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
export class TodoList extends React.Component<any, any> {

  constructor() {
        super();
    }

    render() {
        return (
            <div>
                <List>
                <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
                    <Divider />
                    <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
                    <Divider />
                    <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
                    <Divider />
                </List> 
            </div>
        )
    }
}

export default TodoList;