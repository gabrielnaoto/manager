import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './commons';

class ListItem extends Component {
  render() {
    const { name } = this.props.emplyoee;

    return (
      <CardSection>
        <Text style={styles.title}>{name}</Text>
      </CardSection>
    )
  }
}

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem;