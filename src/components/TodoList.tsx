import { defineComponent } from 'vue';
import './style.scss';

export default defineComponent({
    name: 'TodoList',
    setup() {
        return () => (
            <div class="wrapper">
                <div class="todo">
                    <h1>List1</h1>
                    <ul>
                        <li>what</li>
                        <li>what</li>
                        <li>what</li>
                        <li>what</li>
                    </ul>
                </div>
                <div class="todo">
                    <h1>List2</h1>
                </div>
            </div>
        );
    },
});
