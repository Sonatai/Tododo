import { defineComponent } from 'vue';
import TodoList from './components/TodoList';

export default defineComponent({
    name: 'App',
    setup() {
        return () => (
            <>
                <h1>Tododo</h1>
                <TodoList />
                <div>🥳 JSX works with Vue 🥳</div>
            </>
        );
    },
});
