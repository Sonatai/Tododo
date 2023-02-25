import 'element-plus/dist/index.css';
import './style.scss';

import { defineComponent } from 'vue';

import ListCard from './components/ListCard/ListCard';

export default defineComponent({
    name: 'App',
    setup() {
        return () => (
            <div class="common-layout">
                <el-container class="main">
                    <el-header class="main__header">Header</el-header>
                    <el-container>
                        {/* <el-aside width="200px">Aside</el-aside> */}
                        <el-main class="main__content">
                            <ListCard key="1" list="Blah" />
                            <ListCard key="2" list="Blah" />
                            <ListCard key="3" list="Blah" />
                            <ListCard key="4" list="Blah" />
                            <ListCard key="5" list="Blah" />
                            <ListCard key="6" list="Blah" />
                            <ListCard key="7" list="Blah" />
                            <ListCard key="8" list="Blah" />
                            <ListCard key="9" list="Blah" />
                        </el-main>
                    </el-container>
                </el-container>
            </div>
        );
    },
});
