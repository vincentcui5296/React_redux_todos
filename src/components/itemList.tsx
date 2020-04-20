import React from 'react';
import {addItem, deleteItem} from '../store/items/actions';
import {Item} from '../store/items/types';
import {RootState} from '../store';
import {connect} from 'react-redux';
import {Grid, Header, Form, Segment, Button, List} from 'semantic-ui-react';

export interface IItemProps {
    addItem: typeof addItem,
    deleteItem: typeof deleteItem,
    items: Item[]
};

export class ItemList extends React.Component<IItemProps> {
    getId = () => {
        return Math.floor(Math.random()*100000) + Math.floor(Math.random()*100000);
    }

    add = (event: any) => {
        event.preventDefault();
        const input: HTMLInputElement | null = document.querySelector("[name='item-content']");
        let inputValue: string = '';
        if(input !== null)
            inputValue = input.value;
        console.log(inputValue);
        this.props.addItem({
            id: this.getId(),
            name: inputValue
        });
    }

    delete = (id: number) => {
        this.props.deleteItem(id);
    };
    
    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='top'>
                <Grid.Column style={{ maxWidth: 450, marginTop: '50px' }}>
                    <Header as='h2' color='teal' textAlign='center'>
                    Todos
                    </Header>
                    <Form size='large' onSubmit={this.add}>
                    <Segment stacked>
                    <Form.Input name='item-content' fluid iconPosition='left' placeholder='What need to do?' />
                    <Button color='teal' fluid size='large'>
                        Submit
                    </Button>
                    </Segment>
                    </Form>
                    <List celled animated size='big' verticalAlign='middle'>
                    {
                        this.props.items.map((m, i) => (
                        <List.Item key={i}>
                            <List.Content floated='right'>
                                <Button onClick={event => {this.delete(m.id)}}>Delete</Button>
                            </List.Content>
                            <List.Content>
                                <List.Header>{m.name}</List.Header>
                            </List.Content>

                        </List.Item>
                        ))
                    }
                    </List>
                </Grid.Column>
            </Grid>
        );
    };
}



const mapStateToProps = (state: RootState) => {
    return {items: state.items.items};
};

export default connect(
    mapStateToProps,
    {addItem, deleteItem}
    )(ItemList);