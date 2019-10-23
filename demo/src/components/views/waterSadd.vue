<template>
  <div class="manageAdd">
    <el-button type="primary" class="btn" @click="dialogFormVisible = true">添加</el-button>
    <el-dialog class="textPri" title="添加水站" :visible.sync="dialogFormVisible">
      <el-form :model="waterStation" label-width="70px">
        <el-form-item label="水站名称">
          <el-input v-model="waterStation.name" placeholder="水站名称"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="waterStation" label-width="70px">
        <el-form-item label="水站评分">
          <el-input v-model="waterStation.score" placeholder="0-5分之间" type="number" max="5" min="0"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="waterStation" label-width="70px">
        <el-form-item label="月销售量">
          <el-input v-model="waterStation.count" placeholder="月销售量" type="number"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="waterStation" label-width="70px">
        <el-form-item label="点赞数量">
          <el-input v-model="waterStation.likeNum" placeholder="点赞数量" type="number"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="waterStation" label-width="70px">
        <el-form-item label="浏览量">
          <el-input v-model="waterStation.readNum" placeholder="浏览量" type="number"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="waterStation" label-width="70px">
        <el-form-item label="商家地址">
          <el-input v-model="waterStation.address" placeholder="商家地址"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="waterStation" label-width="70px">
        <el-form-item label="距离">
          <el-input v-model="waterStation.len" placeholder="eg:4.2km"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="waterStation" label-width="70px">
        <el-form-item label="商家信息">
          <el-input v-model="waterStation.des" placeholder="商家信息"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="waterStation" label-width="70px">
        <el-form-item label="电话">
          <el-input v-model="waterStation.tel" placeholder="eg:400-100-1000"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="waterStation" label-width="70px">
        <el-form-item label="价格">
          <el-input v-model="waterStation.price" placeholder="eg:58元/桶"></el-input>
        </el-form-item>
      </el-form>
      <el-form :model="waterStation" label-width="70px">
        <el-form-item label="图片">
          <el-input v-model="waterStation.img"></el-input>
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
      waterStation: {
        address: "",
        count: "",
        des: "",
        img: "",
        len: "",
        likeNum: "",
        name: "",
        price: "",
        readNum: "",
        score: "",
        tel: ""
      },
      dialogFormVisible: false
    };
  },
  methods: {
    modify(id) {
      this.dialogFormVisible = true;
      this.axios({
        url: API.findWater,
        params: { id }
      }).then(res => {
        this.waterStation = res.data.data[0];
      });
    },
    addManage() {
      this.dialogFormVisible = false;
      if (this.waterStation.id) {
        this.axios({
          url: API.updateWater,
          params: this.waterStation
        }).then(res => {
          if (res.data.isok) {
            this.$emit("manageAdd");
            this.waterStation = {
              address: "",
              count: "",
              des: "",
              img: "",
              len: "",
              likeNum: "",
              name: "",
              price: "",
              readNum: "",
              score: "",
              tel: ""
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
          url: API.addWater,
          params: this.waterStation
        }).then(res => {
          if (res.data.isok) {
            this.$emit("manageAdd");
            this.waterStation = {
              address: "",
              count: "",
              des: "",
              id: "",
              img: "",
              len: "",
              likeNum: "",
              name: "",
              price: "",
              readNum: "",
              score: "",
              tel: ""
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
</style>