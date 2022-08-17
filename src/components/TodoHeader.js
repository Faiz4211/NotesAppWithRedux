import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { removeAllTodoTask } from "../redux/taskSlice";

const TodoHeader = () => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const onSubmitTask = () => {
        if (todo.trim().length === 0) {
            Alert.alert("You need to enter a Note");
            setTodo("");
            return;
        }

        dispatch(
            addTask({
                task: todo,
            })
        );
        setTodo("");
    };
    const removeAll = () => {
        dispatch(
            removeAllTodoTask({
                setTodo: "",
            })
        );
    };



    return (
        <View>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: 20,
                    fontSize: 30,
                }}
            >
                NOTES APP
            </Text>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* TextInput */}
                <TextInput
                    style={{
                        borderColor: "gray",
                        borderWidth: 1,
                        padding: 10,
                        margin: 10,
                        width: "90%",
                        borderRadius: 5,
                    }}
                    placeholder="Add Notes"
                    onChangeText={setTodo}
                    value={todo}
                />
                {/* Button */}
                <TouchableOpacity
                    style={{
                        backgroundColor: "black",
                        padding: 10,
                        margin: 10,
                        width: "50%",
                        borderRadius: 5,
                        alignItems: "center",
                    }}
                    onPress={onSubmitTask}
                >
                    <Text style={{ color: "white" }}>ADD</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    backgroundColor: "#e9e9e9",
                    marginTop: 20,
                    marginVertical: 8,
                    marginHorizontal: 16,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: 'center',
                    width: "38%",
                    borderRadius: 5,

                }}

                    onPress={removeAll}
                >
                    <Text style={{
                        textAlign: 'center',
                        justifyContent: 'center', color: "#000000", fontWeight: "bold", fontSize: 20,
                    }}> Delete All</Text>
                    <Icon name="delete" size={20} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TodoHeader;

