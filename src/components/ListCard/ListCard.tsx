import './styles.scss';

import { defineComponent } from 'vue';

import TodoItem from '../TodoItem/TodoItem';

export default defineComponent({
    name: 'ListCard',
    props: {
        name: String,
        todoItems: Array<{
            label: string;
            value: boolean;
        }>,
    },
    render() {
        return (
            <el-card class="box-card card">
                <div class="card-header card__header">
                    <span class="card__headline">{this.name}</span>
                    <el-button class="button" text>
                        Operation button
                    </el-button>
                </div>
                <hr />
                <div class="card__body">
                    {this.todoItems?.map((item) => (
                        <TodoItem label={item.label} value={item.value} />
                    ))}
                </div>
            </el-card>
        );
    },
});
