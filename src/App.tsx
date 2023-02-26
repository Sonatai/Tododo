import 'element-plus/dist/index.css';
import './style.scss';

import { defineComponent } from 'vue';

import ListCard from './components/ListCard/ListCard';
import mockData from './mockData.json';

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
                            {mockData.map((data) => (
                                <ListCard key={data.name} {...data} />
                            ))}
                        </el-main>
                    </el-container>
                </el-container>
            </div>
        );
    },
});
