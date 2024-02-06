import { Todo } from "../models/Todo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const TODO_API_ENDPOINT = "/data/todo.json"; 

export const getTodos = async () => {
    const url = API_URL + TODO_API_ENDPOINT;

    try {
        const response = await fetch(url);

        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error);
    }
}

export const postTodos = async (todos: Todo[]) => {
    if (!todos || todos.length === 0) return;

    const url = API_URL + TODO_API_ENDPOINT;
    const data = JSON.stringify(todos);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        });

        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error);
    }
}
