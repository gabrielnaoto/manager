import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './commons'

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="John Doe" />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="55 5555-5555" />
        </CardSection>

        <CardSection>

        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
