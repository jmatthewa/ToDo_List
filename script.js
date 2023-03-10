
const todoList = {
    data() {
        return {
            todo: [],
            newTodo : {
                done: false
            }
        }
    },
    methods: {
        addNewTodo : function () {
            if (this.newTodo.text) { 

                this.todo.push(this.newTodo);
                this.newTodo = {
                    done: false
                };
                localStorage.setItem("todos", JSON.stringify(this.todo));
            } else {
                alert('To-do text is required')
            }
        }
    },
    created() {
        this.todo = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todo;
    }
}

Vue.createApp(todoList).mount('#app');