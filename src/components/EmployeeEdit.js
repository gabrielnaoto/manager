import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from './commons';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
  state = {
    showModal: false
  }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  saveChanges() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  textEmployee() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  fireEmployee() {
    this.setState({ showModal: true });
  }

  onAccept() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.saveChanges.bind(this)}>
            Save changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.textEmployee.bind(this)}>
            Text schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.fireEmployee.bind(this)}>
            Fire employee
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDeclide={this.onDecline.bind(this)}
        >
          Are you sure you want to fire this employee?
        </Confirm>
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

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
