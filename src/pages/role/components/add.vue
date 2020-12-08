<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-input v-model="form.rolename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色权限" :label-width="formLabelWidth">
          <el-tree
            :data="list"
            show-checkbox
            node-key="id"
            ref="tree"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps"
          >
          </el-tree>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="info.isShow = false">取 消</el-button>
        <el-button type="primary" v-if="info.isAdd" @click="sure"
          >确 定</el-button
        >
        <el-button type="primary" v-else @click="update">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { reqRoleListOne, updateRole } from "../../../util/request";
export default {
  props: ["info"],
  data() {
    return {
      isShow: true,
      dialogFormVisible: false,
      form: {
        rolename: "",
        menus: [],
        status: 1,
      },
      formLabelWidth: "120px",
      value: true,
      defaultProps: {
        children: "children",
        label: "title",
      },
    };
  },
  computed: {
    ...mapGetters({
      list: "menuList/list",
      roleList: "roleList/roleList",
    }),
  },
  methods: {
    empty() {
      this.form = {
        rolename: "",
        menus: [],
        status: 1,
      };
      if(this.form.menus!=''){
        this.form.menus=this.$refs.tree.setCheckedKeys([]);
      }
      
    },
    hide() {
      this.info.isShow = false;
    },
    ...mapActions({
      requestMenuList: "menuList/requestMenuList",
      requestRole: "roleList/requestRole",
      requestRoleList: "roleList/requestRoleList",
    }),
    sure() {
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      this.requestRole(this.form);
      this.hide();
      this.requestRoleList();
    },
    look(id) {
      reqRoleListOne({ id: id }).then((res) => {
        this.form = res.data.list;
        this.form.menus = this.$refs.tree.setCheckedKeys(
          JSON.parse(res.data.list.menus)
        );
        this.form.id = id;
      });
    },
    update() {
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      updateRole(this.form).then((res) => {
        this.hide();
        this.requestRoleList();
      });
    },
  },

  mounted() {
    this.requestMenuList();
  },
};
</script>
<style scoped>
</style>