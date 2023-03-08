<template>
    <div style="margin-bottom: 20px;">
        <good-edit @contentChange="contentChange"></good-edit>
    </div>
    <el-container class="content-row">
        <el-button type="success" plain @click="submit">提交</el-button>
        <div style="margin-left: 40px;"></div>
        <el-button type="warning" plain @click="cancel">取消</el-button>
    </el-container>
</template>

<script>
import GoodEdit from "@/components/goods/GoodEdit.vue"
export default {
    data() {
        return {
            content: ""
        }
    },
    components: {
        GoodEdit: GoodEdit
    },
    methods: {
        contentChange(content) {
            this.content = content;
        },
        cancel() {
            this.$router.go(-1)
        },
        submit() {
            this.$message({
                type: "success",
                message: "设置详细HTML" + this.content
            })
        }
    }
}
</script>

<style scoped></style>