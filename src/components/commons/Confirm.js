import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ visible, children, onAccept, onDeclide }) => {
  return (
    <Modal
      animationType="slide"
      onRequestClose={() => { }}
      transparent={true}
      visible={visible}
    >
      <View style={styles.container}>
        <CardSection style={styles.section}>
          <Text style={styles.text}>
            {children}
          </Text>
        </CardSection>
        <CardSection>
          <Button onPress={onAccept}>
            Yes
          </Button>
          <Button onPress={onDeclide}>
            No
          </Button>
        </CardSection>
      </View>

    </Modal>
  );
};

const styles = {
  section: {
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Confirm };
