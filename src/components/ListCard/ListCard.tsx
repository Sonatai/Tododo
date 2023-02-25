import './styles.scss';

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ListCard',
    props: {
        list: String,
    },
    render() {
        return (
            <el-card class="box-card card">
                <div class="card-header card__header">
                    <span class="card__headline">Card name</span>
                    <el-button class="button" text>
                        Operation button
                    </el-button>
                </div>
                <hr />
                <div class="card__body">
                    <div class="text item">Item</div>
                    <div class="text item">Item</div>
                    <div class="text item">Item</div>
                    <div class="text item">Item</div>
                    <div class="text item">Item</div>
                    <div class="text item">Item</div>
                    <div class="text item">Item</div>
                    <div class="text item">Item</div>
                </div>
            </el-card>
        );
    },
});
