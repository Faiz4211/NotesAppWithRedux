import { createSlice, nanoid } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            console.log(nanoid());
            // 'dgPXxUz_6fWIQBD8XmiSy'

            console.log(action.payload);
            const newTask = {
                id: nanoid(),
                name: action.payload.task,
            };
            state.push(newTask);
        },
        deleteTask: (state, action) => {
            console.log(action.payload.id);
            console.log(state);
            return state.filter((item) => item.id !== action.payload.id);
        },


        removeAllTodoTask: (state) => {
            console.log(state);
            return state.filter((removeAllTodoTask) => removeAllTodoTask.id == state);
        },

        // updateTask: (state, action) => {
        //     console.log(action.payload.id);
        //     console.log(state);
        //     return state.filter((item) => item.id !== action.payload.id);
        // }
        updateTodoTask: (state, action) => {
            console.log(nanoid());

        },


    },
});

export const { addTask, deleteTask, removeAllTodoTask, updateTodoTask } = taskSlice.actions;

export default taskSlice.reducer;
