import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CheckBoxUnChecked from "../assets/checkbox-svgrepo-com.svg";
import CheckBox from "../assets/checkbox-check-svgrepo-com.svg";
import DeleteIcon from "../assets/delete-svgrepo-com.svg";
const TodoItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Pressable hitSlop={10} style={styles.itemTextChecked}>
        <CheckBoxUnChecked />
        <CheckBox style={styles.itemCheckBoxCheckedIcon} />
      </Pressable>
      <Text style={[styles.itemText, styles.itemTextChecked]}>숨 숴</Text>
      <Pressable
        style={[styles.deleteButton, styles.deleteButtonDone]}
        hitSlop={10}
      >
        <DeleteIcon />
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#f7f8fa",
  },
  itemCheckBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
  },
  itemCheckBoxCheckedIcon: {
    shadowColor: "#000",
    shadowOpacity: "0.14",
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  deleteText: {
    marginRight: "auto",
    paddingRight: 10,
    fontSize: 15,
    lineHeight: 20,
    color: "#737373",
  },
  itemText: {
    marginRight: "auto",
    paddingRight: 25,
    fontSize: 15,
    lineHeight: 20,
    color: "#737373",
  },
  itemTextChecked: {
    opacity: 0.3,
    textDecorationLine: "line-through",
  },
  deleteButton: {
    opacity: 0.8,
  },
  deleteButtonDone: {
    opacity: 0.3,
  },
});
