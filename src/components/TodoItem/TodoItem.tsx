import './styles.scss';

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TodoItem',
    props: {
        label: String,
        value: Boolean,
    },
    render() {
        return (
            <div class="text item todo-item" key={this.label}>
                <input
                    type="checkbox"
                    checked={this.value}
                    class="todo-item__checkbox"
                />
                <input type="text" value={this.label} />
            </div>
        );
    },
});
