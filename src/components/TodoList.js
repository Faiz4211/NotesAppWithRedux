import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ScrollView
} from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import { useDispatch } from "react-redux";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.tasks);
    // console.log(todos);
    const data = [
        {
            id: 1,
            title: "Learn React Native",
        },
        {
            id: 2,
            title: "Learn Redux Toolkit",
        },
    ];

    //delete item by checking if id is equal to the id of the item
    const onDelete = (id) => {
        dispatch(
            deleteTask({
                id: id,
            })
        );
    };

    //renderItem function with a delete button
    const renderItem = ({ item }) => {
        return (
            <ScrollView
                horizontal={false}>
                <View

                    style={styles.item}>
                    <Text style={styles.title}>{item.name}</Text>
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={() => onDelete(item.id)}
                    >

                        <Icon name="delete" size={20} color="red" />
                    </TouchableOpacity>
                </View >
            </ScrollView>
        );
    };

    return (
        <View>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    item: {
        backgroundColor: "#e9e9e9",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
    },
    delete: {
        fontSize: 24,
        color: "red",
    },
});

export default TodoList;
