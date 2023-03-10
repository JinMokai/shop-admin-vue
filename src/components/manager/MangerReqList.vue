<template>
    <div class="content-container" direction="vertical">
        <el-container class="content-row">
            <div class="input-tip">用户状态:</div>
            <div class="input-field">
                <el-input v-model="queryParams.state"></el-input>
            </div>
            <div class="input-tip">用户信息:</div>
            <div class="input-field">
                <el-input v-model="queryParams.info"></el-input>
            </div>
        </el-container>
        <el-container class="content-row">
            <el-button type="primary" @click="search">搜索</el-button>
            <el-button type="primary" @click="clear">清空搜索条件</el-button>
        </el-container>
        <el-table :data="managerList" tooltip-effect="dark" style="width: 100%;">
            <el-table-column label="用户信息" width="200" prop="people"></el-table-column>
            <el-table-column label="状态" width="100" prop="state"></el-table-column>
            <el-table-column label="更新时间" width="200" prop="reqTime"></el-table-column>
            <el-table-column label="添加时间" width="200" prop="reqTime"></el-table-column>
            <el-table-column label="操作" width="100">
                <template #default="scope">
                    <el-tag :type="scope.row.state ? 'success' : ''">
                        {{ scope.row.state ? "激活" : "审核中" }}
                    </el-tag>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import Mock from "@/mock/Mock"
export default {
    data() {
        return {
            queryParams: {
                state: "",
                info: ""
            },
            managerList: []
        }
    },
    mounted() {
        this.managerList = Mock.getManagerReqList()
    },
    methods: {
        search() {
            this.$message({
                type: "success", message: "请求参数" + JSON.stringify(this.queryParams)
            })
            this.managerList = Mock.getManagerReqList()
        },
        clear() {
            this.$message({
                type: "success", message: "删除成功"
            })
            this.managerList = []
        }
    }
}
</script>

<style></style>