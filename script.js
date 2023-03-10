
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

            } else {
                alert('To-do text is required')
            }
        }
    }
}

Vue.createApp(todoList).mount('#app');