import React from "react";
import { View, Modal,Text,Pressable } from "react-native";
import { styles } from "./AuthModal.style";
import TextView from '../../../Components/TextView/TextView'

export default function AuthModal({ visible,onAccept,onReject }) {
  return (
    <Modal  animationType="slide" visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextView style={styles.modalText}>Authentication required</TextView>
            <View style={styles.btnContainer}>
            <Pressable
            onPress={onAccept}
            style={[styles.button, styles.buttonClose]}>
            <TextView style={styles.textStyle}>Login</TextView>
          </Pressable>
          <Pressable
          onPress={onReject}
            style={[styles.button, styles.buttonClose]}>
            <TextView style={styles.textStyle}>Cancel</TextView>
          </Pressable>
            </View>
        </View>
      </View>
    </Modal>
  );
}


