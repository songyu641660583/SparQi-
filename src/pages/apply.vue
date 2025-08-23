<template>
  <div class="apply-page" v-loading="loading" element-loading-text="正在提交申请...">
    <div class="apply-title">穿戴设备申请表</div>
    <el-form label-position="top" label-width="80px" :model="form" :rules="formRules" ref="formRef">
      <el-form-item label="申请人组织" prop="organization">
        <el-input v-model="form.organization" placeholder="请输入您的公司、机构或学校名称"></el-input>
      </el-form-item>
       <el-form-item label="申请人手机号" prop="mobile">
        <el-input v-model="form.mobile" placeholder="请输入您的手机号"></el-input>
      </el-form-item>
       <el-form-item label="申请人邮箱" prop="email">
        <el-input v-model="form.email" placeholder="请输入您的邮箱"></el-input>
      </el-form-item>
      <el-form-item label="申请目的" prop="objective">
        <el-checkbox-group v-model="form.objective">
          <el-checkbox :label="objectiveEnums[0].value" name="objective">{{ objectiveEnums[0].label }}</el-checkbox>
          <el-checkbox :label="objectiveEnums[1].value" name="objective">{{ objectiveEnums[1].label }}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="项目范围" prop="range">
        <el-checkbox-group v-model="form.range" style="display: flex; align-items: center;flex-wrap: wrap;">
          <el-checkbox :label="rangeEnums[0].value" name="range">{{ rangeEnums[0].label }}</el-checkbox>
          <el-checkbox :label="rangeEnums[1].value" name="range">{{ rangeEnums[1].label }}</el-checkbox>
          <el-checkbox :label="rangeEnums[2].value" name="range">{{ rangeEnums[2].label }}</el-checkbox>
          <el-checkbox :label="rangeEnums[3].value" name="range">{{ rangeEnums[3].label }}</el-checkbox>
          <el-input v-if="form.range.includes(4)" v-model="rangeOtherValue" placeholder="请输入其他项目范围"
            style="width: 160px;margin-left: 10px"></el-input>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="项目简介" prop="desc">
        <el-input resize="none" :rows="4" v-model="form.desc" type="textarea"
          placeholder="由于样品有限，请简要描述您的项目目标、项目内容以及计划如何使用我们的产品，方便我们评估"></el-input>
      </el-form-item>
      <el-form-item label="项目计划书上传链接(可选)">
        <el-input v-model="form.planLink" placeholder="https://..."></el-input>
      </el-form-item>
      <div class="tips">
        上传项目计划书可以让我们更好的评估您的需求与相关产品的适配度，可上传至云盘（如Google Drive、OneDrive、阿里云盘等），并粘贴分享链接
      </div>
      <el-form-item label="申请产品" prop="product" style="margin-top: 20px;">
        <el-checkbox-group v-model="form.product" @change="handleProductChange">
          <div class="product-flex-container">
            <div class="product-flex">
              <el-checkbox :label="productEnums[0].value" name="product"><span class="label-text-span">{{
                productEnums[0].label }}</span></el-checkbox>
              <el-input-number size="small" :min="0" :max="9999" :step="1" :disabled="products[0].disabled"
                v-model="products[0].value"></el-input-number>
            </div>
            <div class="product-flex">
              <el-checkbox :label="productEnums[1].value" name="product"><span class="label-text-span">{{
                productEnums[1].label }}（预计上市时间2025年10月）</span></el-checkbox>
              <el-input-number size="small" :min="0" :max="9999" :step="1" :disabled="products[1].disabled"
                v-model="products[1].value"></el-input-number>
            </div>
          </div>
          <div class="product-flex-container" style="margin-top: 20px;">
            <div class="product-flex">
              <el-checkbox :label="productEnums[2].value" name="product"><span class="label-text-span">{{
                productEnums[2].label }}（预计上市时间2025年10月）</span></el-checkbox>
              <el-input-number size="small" :min="0" :max="9999" :step="1" :disabled="products[2].disabled"
                v-model="products[2].value"></el-input-number>
            </div>
              <div class="product-flex">
              <el-checkbox :label="productEnums[3].value" name="product"><span class="label-text-span">{{
                productEnums[3].label }}（预计上市时间2025年10月）</span></el-checkbox>
              <el-input-number size="small" :min="0" :max="9999" :step="1" :disabled="products[3].disabled"
                v-model="products[3].value"></el-input-number>
            </div>
          </div>
          <div class="product-flex-container" style="margin-top: 20px;">
          
            <div class="product-flex">
              <el-checkbox :label="productEnums[4].value" name="product"><span class="label-text-span">{{
                productEnums[4].label }}（预计上市时间2026年3月）</span></el-checkbox>
              <el-input-number size="small" :min="0" :max="9999" :step="1" :disabled="products[4].disabled"
                v-model="products[4].value"></el-input-number>
            </div>
            <div class="product-flex" style="flex: auto;justify-content: flex-start;">
              <el-checkbox :label="productEnums[5].value" name="product"><span class="label-text-span">{{
                productEnums[5].label }}</span></el-checkbox>
              <el-input-number size="small" :min="0" :max="9999" :step="1" :disabled="products[5].disabled"
                v-model="products[5].value"></el-input-number>
              <el-input v-if="form.product.includes(6)" v-model="productOtherValue" placeholder="请填写设备描述"
                style="width: 160px;margin-left: 10px"></el-input>
            </div>
          </div>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="期望交付日期" prop="date">
        <el-date-picker type="date" placeholder="请选择您期望交付的日期" v-model="form.date" style="width: 100%"></el-date-picker>
      </el-form-item>
    </el-form>
    <div class="apply-submit">
      <el-button class="sub-btn" type="primary" round @click="submitForm" v-loading="loading">提交申请</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import api from '@/api'
import { ElMessage } from 'element-plus'

const loading = ref(false);

const productOtherValue = ref("");
const rangeOtherValue = ref("")

const objectiveEnums = [
  { label: "科研", value: 1 },
  { label: "商业", value: 2 },
];

const rangeEnums = [
  { label: "具身智能", value: 1 },
  { label: "人机交互", value: 2 },
  { label: "健康医疗", value: 3 },
  { label: "其他", value: 4 },
];

const productEnums = [
  { label: "戒指Touch", value: 1 },
  { label: "戒指Listener", value: 2 },
  { label: "肌电腕带", value: 3 },
  { label: "贴片", value: 4 },
  { label: "眼镜", value: 5 },
  { label: "其他", value: 6 },
];

const form = ref({
  organization: "",
  mobile: "",
  email: "",
  planLink: "",
  desc: "",
  date: "",
  objective: [],
  range: [],
  product: [],
});
const products = ref([{
  disabled: true,
  value: 0
}, {
  disabled: true,
  value: 0
}, {
  disabled: true,
  value: 0
}, {
  disabled: true,
  value: 0
}, {
  disabled: true,
  value: 0
}, {
  disabled: true,
  value: 0
}]); // 数组用于存储每种产品的数量
const formRef = ref();
const formRules = {
  organization: [
    { required: true, message: "请输入您的公司、机构或学校名称", trigger: "blur" },
  ],
    mobile: [
    { required: true, message: "请输入您的手机号", trigger: "blur" },
  ],
  email: [
    { required: true, message: "请输入您的邮箱", trigger: "blur" },
  ],
  desc: [{ required: true, message: "请输入项目简介", trigger: "blur" }],
  objective: [{ required: true, message: "请选择申请目的", trigger: "change" }],
  product: [{ required: true, message: "请选择申请产品", trigger: "change" }],
  range: [{ required: true, message: "请选择项目范围", trigger: "change" }],
  date: [{ type: "date", required: true, message: "请选择日期", trigger: "change" }],
};
const submitForm = async () => {
  formRef.value.validate(async (valid: any) => {
    if (valid) {
      const productsValues = form.value.product.map(item => {
        let result = {
          ...productEnums[item - 1],
          quantity: products.value[item - 1].value
        }
        if (productEnums[item - 1].label === '其他' && productOtherValue.value) {
          result.label = productOtherValue.value
        }
        return result
      });
      const rangeValues = form.value.range.map(item => {
        let result = {
          ...rangeEnums[item - 1]
        }
        if (rangeEnums[item - 1].label === '其他' && rangeOtherValue.value) {
          result.label = rangeOtherValue.value
        }
        return result
      });
      const params = {
        ...form.value,
        product: productsValues,
        range: rangeValues
      }
      loading.value = true
      try {

        const data = new FormData();
        data.append('data', JSON.stringify(params));
        const res: any = await api.home.submit(data)
        loading.value = false

        ElMessage({
          message: '申请成功',
          type: 'success',
        })
      } catch (err) {
        loading.value = false
      }
    } else {
      console.log("error submit!!");
      return false;
    }
  });
};
const handleProductChange = (value: any) => {
  console.log(value);

  if (value.includes(productEnums[0].value)) {
    products.value[0].disabled = false;
  }
  if (value.includes(productEnums[1].value)) {
    products.value[1].disabled = false;
  }
  if (value.includes(productEnums[2].value)) {
    products.value[2].disabled = false;
  }
  if (value.includes(productEnums[3].value)) {
    products.value[3].disabled = false;
  }
  if (value.includes(productEnums[4].value)) {
    products.value[4].disabled = false;
  }
  if (value.includes(productEnums[5].value)) {
    products.value[5].disabled = false;
  }



  if (!value.includes(productEnums[0].value)) {
    products.value[0].disabled = true;
  }
  if (!value.includes(productEnums[1].value)) {
    products.value[1].disabled = true;
  }
  if (!value.includes(productEnums[2].value)) {
    products.value[2].disabled = true;
  }
  if (!value.includes(productEnums[3].value)) {
    products.value[3].disabled = true;
  }
  if (!value.includes(productEnums[4].value)) {
    products.value[4].disabled = true;
  }
  if (!value.includes(productEnums[5].value)) {
    products.value[5].disabled = true;
  }
}
</script>
<style lang="scss">
.el-checkbox__inner {
  width: 16px !important;
  height: 16px !important;
  border-radius: 4px !important;
}

.el-input__inner,
.el-input {
  height: 42px !important;
}

.el-input__wrapper {
  height: 42px !important;
  border-radius: 8px !important;
}

.el-form-item__label {
  color: rgba(0, 0, 0, 0.64);
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;

  /* 100% */
  &::before {
    color: rgba(0, 0, 0, 0.64) !important;
  }
}

.el-input--small {
  height: 30px !important;

  .el-input__wrapper {
    height: 30px !important;
    border-radius: 2px !important;
  }

  .el-input__inner,
  .el-input {
    height: 30px !important;
  }

  .el-input-number.is-controls-right .el-input__wrapper {
    padding: 0 !important;
  }
}

@media (min-width: 768px) and (max-width: 1200px) {}
</style>
<style lang="scss" scoped>
$contentWidth: 1200px;

.label-text-span {
  margin-right: 5px;
}

.product-flex {
  display: flex;
  align-items: center;
}

.product-flex-container {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.apply-page {
  margin: 100px auto;

  width: $contentWidth;
  align-self: stretch;
  padding: 0 48px 48px;
  position: relative;
  background: white;
  box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border-radius: 24px;
  border-bottom: 1px rgba(255, 255, 255, 0.12) solid;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 64px;
  --el-color-primary: #06b1b1;
  --el-color-primary-light-3: #61c8c8;
  --el-color-primary-dark-2: #06b1b1;

  .tips {
    margin-top: -8px;
    color: rgba(0, 0, 0, 0.24);
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    /* 100% */
  }

  .apply-title {
    line-height: 120px;
    text-align: center;
    color: #000;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
  }

  .apply-submit {
    width: 220px;
    margin: 64px auto;

    .sub-btn {
      width: 220px;
      height: 56px;
      border-radius: 200px;
    }
  }
}

@media (max-width: 768px) {
  .product-flex-container {
    flex-wrap: wrap;
  }

  .apply-page {
    margin: 1.20rem auto;
    width: 98%;
    padding: 0.7rem 0.7rem 1rem;
    box-shadow: 0px 0.12rem 0.32rem rgba(0, 0, 0, 0.08);
    border-radius: 0.24rem;
    border-bottom: 0.01rem rgba(255, 255, 255, 0.12) solid;
    gap: 64px;

    .tips {
      font-size: 0.5rem;
      line-height: 0.82rem;
      /* 100% */
    }

    .apply-title {
      line-height: 1.60rem;
      text-align: center;
      color: #000;
      text-align: center;
      font-size: 1.0rem;
      font-weight: 700;
    }

    .apply-submit {
      width: 6.90rem;
      margin: 1.64rem auto;

      .sub-btn {
        width: 6.90rem;
        height: 1.96rem;
        border-radius: 2rem;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .apply-page {
    margin: 1.20rem auto;
    width: 98%;
    padding: 0 0.48rem 0.48rem;
    box-shadow: 0px 0.12rem 0.32rem rgba(0, 0, 0, 0.08);
    border-radius: 0.24rem;
    border-bottom: 0.01rem rgba(255, 255, 255, 0.12) solid;
    gap: 64px;

    .tips {
      font-size: 0.22rem;
      line-height: 0.2rem;
      /* 100% */
    }

    .apply-title {
      line-height: 1.60rem;
      text-align: center;
      color: #000;
      text-align: center;
      font-size: 0.60rem;
      font-weight: 700;
    }

    .apply-submit {
      width: 2.20rem;
      margin: 0.64rem auto;

      .sub-btn {
        width: 2.20rem;
        height: 0.56rem;
        border-radius: 2rem;
      }
    }
  }
}
</style>
