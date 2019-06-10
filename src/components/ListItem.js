import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './commons';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.title}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
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
