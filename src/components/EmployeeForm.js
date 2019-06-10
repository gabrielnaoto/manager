import React, { Component } from 'react';
import { View } from 'react-native';
import { Picker, Text } from 'react-native';
import { CardSection, Input } from './commons';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {
    const { name, phone, shift } = this.props;

    return (
      <View>
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

        <CardSection style={styles.section}>
          <View style={styles.container}>
            <Text style={styles.pickerText}>Shift</Text>
            <Picker
              style={styles.pickerField}
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
          </View>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  section: {

  },
  container: {
    flexDirection: 'row',
    flex: 1
  },
  pickerField: {
    flex: 2
  },
  pickerText: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 10,
    flex: 1,
    alignSelf: 'center'
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employee;

  return {
    name,
    phone,
    shift
  };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
