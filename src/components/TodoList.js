import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ScrollView,
    TextInput,
    LogBox
} from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import { updateTodoTask } from "../redux/taskSlice";
import { useDispatch } from "react-redux";




const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.tasks);

    // const edittodo = useSelector((state) => state.edittask);
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
    const setInputEdit = (id) => {
        dispatch(
            updateTodoTask({
                task: updateTodoTask,
            })
        )
    }


    // renderItem function with a delete button
    const renderItem = ({ item }) => {
        return (

            <ScrollView
                horizontal={false}
            >
                <View style={styles.item}>
                    <TextInput numberOfLines={4}
                        style={styles.title}>{item.name}</TextInput>
                    <TouchableOpacity
                        onPress={() => onDelete(item.id)}>
                        <Icon style={styles.delete}
                            name="delete" size={30} color="red" />
                    </TouchableOpacity >

                    <TouchableOpacity  >
                        <Icon name="edit" size={30} color="green" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={setInputEdit}>
                        <Icon name="update" size={30} color="blue" />
                    </TouchableOpacity>

                </View >
            </ScrollView >
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
        marginTop: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    title: {
        fontSize: 20,

    },
});

export default TodoList;
