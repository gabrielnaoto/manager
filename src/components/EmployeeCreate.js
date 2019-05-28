import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './commons'
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
  render() {
    const { name, phone, shift, employeeUpdate } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="John Doe"
            value={name}
            onChangeText={value => employeeUpdate({ prop: 'name', value })} />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="55 5555-5555"
            value={phone}
            onChangeText={value => employeeUpdate({ prop: 'phone', value })} />
        </CardSection>

        <CardSection>

        </CardSection>

        <CardSection>
          <Button onPress={() => console.log('oii')}>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employee;

  return {
    name,
    phone,
    shift
  };
}


export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
