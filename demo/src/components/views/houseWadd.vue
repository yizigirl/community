<template>
  <div class="manageAdd">
    <el-button type="primary" class="btn" @click="dialogFormVisible = true">添加</el-button>
    <el-dialog class="textPri" title="添加家政人员" :visible.sync="dialogFormVisible">
      <el-form :model="houseKworker" label-width="70px">
        <el-form-item label="姓名">
          <el-input v-model="houseKworker.name" placeholder="姓名"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="houseKworker" label-width="70px">
        <el-form-item label="年龄">
          <el-input
            v-model="houseKworker.age"
            placeholder="0-100之间"
            type="number"
            max="100"
            min="0"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="houseKworker" label-width="70px">
        <el-form-item label="电话">
          <el-input v-model="houseKworker.tel" placeholder="eg:16737373737"></el-input>
        </el-form-item>
      </el-form>
      <el-form class="checkbox">
        <el-form-item label="资格认证">
          <el-checkbox-group v-model="houseKworker.qualification">
            <el-checkbox
              v-for="(item,index) in qualificationT"
              :key="index"
              :label="item"
              name="qualification"
            ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <el-form class="checkbox">
        <el-form-item label="服务项目">
          <el-checkbox-group v-model="houseKworker.type">
            <el-checkbox v-for="(item,index) in typeT" :key="index" :label="item" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <el-form class="checkbox">
        <el-form-item label="学历">
          <el-select v-model="houseKworker.edu" placeholder="请选择学历">
            <el-option label="小学" value="小学"></el-option>
            <el-option label="初中" value="初中"></el-option>
            <el-option label="高中" value="高中"></el-option>
            <el-option label="本科" value="本科"></el-option>
            <el-option label="研究生" value="研究生"></el-option>
            <el-option label="博士" value="博士"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form :model="houseKworker" label-width="70px">
        <el-form-item label="工作年限">
          <el-input v-model="houseKworker.year" placeholder="eg:4.2km"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="houseKworker" label-width="70px">
        <el-form-item label="级别">
          <el-input v-model="houseKworker.vNum" placeholder="eg:v3"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="houseKworker" label-width="70px">
        <el-form-item label="价格">
          <el-input v-model="houseKworker.price" placeholder="eg:30元/小时"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="houseKworker" label-width="70px">
        <el-form-item label="城市">
          <el-input v-model="houseKworker.city" placeholder="eg:武汉"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="houseKworker" label-width="70px">
        <el-form-item label="经验">
          <el-input v-model="houseKworker.experience" placeholder="eg:3年"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="houseKworker" label-width="70px">
        <el-form-item label="点赞数量">
          <el-input v-model="houseKworker.likeNum"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="houseKworker" label-width="70px">
        <el-form-item label="关注人数">
          <el-input v-model="houseKworker.readNum"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="houseKworker" label-width="70px">
        <el-form-item label="距离">
          <el-input v-model="houseKworker.len" placeholder="eg:4.2km"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="houseKworker" label-width="70px">
        <el-form-item label="自我评价">
          <el-input v-model="houseKworker.info" placeholder="eg:人见人爱,花见花开。。"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="houseKworker" label-width="70px">
        <el-form-item label="免冠照片">
          <el-input v-model="houseKworker.img"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addManage()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import API from "../../common/js/API";
export default {
  data() {
    return {
      houseKworker: {
        age: "",
        city: "",
        edu: "",
        experience: "",
        id: "",
        img: "",
        info: "",
        len: "",
        likeNum: "",
        name: "",
        price: "",
        qualification: [],
        readNum: "",
        tel: "",
        type: [],
        vNum: "",
        year: ""
      },
      dialogFormVisible: false,
      qualificationT: [],
      typeT: []
    };
  },
  mounted() {
    this.axios({
      url: API.getQualification
    }).then(res => {
      this.qualificationT = res.data.qualification;
    });
    this.axios({
      url: API.getHomeType
    }).then(res => {
      this.typeT = res.data.type;
    });
  },
  methods: {
    modify(id) {
      this.dialogFormVisible = true;
      this.axios({
        url: API.findHomeWorker,
        params: { id }
      }).then(res => {
        this.houseKworker = res.data.data[0];
        this.houseKworker.qualification=JSON.parse(this.houseKworker.qualification);
        this.houseKworker.type=JSON.parse(this.houseKworker.type);
      });
    },
    addManage() {
      this.dialogFormVisible = false;
      if (this.houseKworker.id) {
        this.houseKworker.qualification=JSON.stringify(this.houseKworker.qualification);
        this.houseKworker.type=JSON.stringify(this.houseKworker.type);
        this.axios({
          url: API.updateHomeWorker,
          params: this.houseKworker
        }).then(res => {
          if (res.data.isok) {
            this.$emit("manageAdd");
            this.houseKworker = {
              age: "",
              city: "",
              edu: "",
              experience: "",
              id: "",
              img: "",
              info: "",
              len: "",
              likeNum: "",
              name: "",
              price: "",
              qualification: [],
              readNum: "",
              tel: "",
              type: [],
              vNum: "",
              year: ""
            };
            this.$message({
              type: "success",
              message: "修改成功!"
            });
          } else {
            this.$message({
              type: "info",
              message: res.data.info
            });
          }
        });
      } else {
        this.axios({
          url: API.addHomeWorker,
          params: this.houseKworker
        }).then(res => {
          console.log(res);
          
          if (res.data.isok) {
            this.$emit("manageAdd");
            this.houseKworker = {
              age: "",
              city: "",
              edu: "",
              experience: "",
              id: "",
              img: "",
              info: "",
              len: "",
              likeNum: "",
              name: "",
              price: "",
              qualification: [],
              readNum: "",
              tel: "",
              type: [],
              vNum: "",
              year: ""
            };
            this.$message({
              type: "success",
              message: "添加成功!"
            });
          } else {
            this.$message({
              type: "info",
              message: res.data.info
            });
          }
        });
      }
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/index';

// .manageAdd>>>.modify {
// color: $third;
// border-color: $third;
// }

// .manageAdd>>>.modify:hover {
// background: $third;
// color: $font;
// }
.btn {
  margin-left: 5%;
  background: $second;
  border: 1px solid $second;
}

.manageAdd {
  display: inline-block;
}

.manageAdd>>>.el-textarea__inner {
  resize: none;
}

.manageAdd>>>.textarea {
  resize: none;
}

.manageAdd>>>.el-dialog__title {
  color: $third;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
}

.manageAdd .item {
  margin: 0;
}

.manageAdd>>>.el-dialog__body {
  padding-top: 10px;
  padding-bottom: 10px;
}

.manageAdd>>>.el-form-item {
  margin-bottom: 10px;
}

.houseKworker .el-select {
  margin: 0;
}

.checkbox>>>.el-form-item__content {
  display: block;
  float: right;
  width: 80%;
}
</style>