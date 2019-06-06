import React from 'react';
import { List, Image, Button } from 'semantic-ui-react';

const recipes = props => {
  return (
    <List.Item>
      <Image
        size="mini"
        src="https://www.theideaskitchen.co.uk/wp-content/uploads/2018/09/icon-vegetarian.png"
      />
      <List.Content>
        <List.Header>{props.name}</List.Header>
        <List.Description>{props.description}</List.Description>
      </List.Content>
      <List.Content floated="right">
        <Button>Edit</Button>
      </List.Content>
    </List.Item>
  );
};

export default recipes;
