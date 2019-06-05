import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './commons'
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
  render() {
    const { name, phone, shift } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="John Doe"
            value={name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })} />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="55 5555-5555"
            value={phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })} />
        </CardSection>

        <CardSection style={styles.section} >
          <Text style={styles.picker}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={() => console.log('Button pressed.')}>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  section: {
    flexDirection: 'column'
  },
  picker: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employee;

  return {
    name,
    phone,
    shift
  };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
