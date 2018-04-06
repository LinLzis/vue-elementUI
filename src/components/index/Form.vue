<template>
  <div>
    <h1>Sign Up</h1>

    <el-form :model="userForm" :rules="userRules" ref="userForm" class="form-container" label-position="left" label-width="150px">
      <el-form-item label="First Name" prop="fisrtName">
        <el-input v-model="userForm.fisrtName"></el-input>
      </el-form-item>
      <el-form-item label="Last Name" prop="lastName">
        <el-input v-model="userForm.lastName"></el-input>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="userForm.email"></el-input>
      </el-form-item>
      <el-col :span="12">
        <el-form-item label="Country" prop="country">
          <el-select placeholder="Choose your country" v-model="userForm.country">
            <el-option label="China" value="China"></el-option>
            <el-option label="France" value="France"></el-option>
            <el-option label="UK" value="UK"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="11" :offset="1">
        <el-form-item label="City" prop="city">
          <el-input v-model="userForm.city"></el-input>
        </el-form-item>
      </el-col>
      <el-form-item label="Age" prop="age">
        <el-input type="number" v-model="userForm.age"></el-input>
      </el-form-item>
      <el-form-item label="Sex" prop="sex">
        <el-radio-group v-model="userForm.sex">
          <el-radio label="Male"></el-radio>
          <el-radio label="Female"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Birth" prop="birth">
        <el-date-picker type="date" placeholder="Choose your birth" v-model="userForm.birth" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="Accept AD" prop="accept">
        <el-switch v-model="userForm.accept"></el-switch>
      </el-form-item>
      <el-form-item label="Motto" prop="motto">
        <el-input type="textarea" v-model="userForm.motto"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="24" align="center">
          <el-button type="primary" @click="submitForm('userForm')">Submit</el-button>
        </el-col>
      </el-row>
    </el-form>
    <br><br><br><br><br><br><br><br>

  </div>
</template>

<script>

  export default {
    components: {},
    data(){
      return {
        defaultActive: 1,
        userForm: {
          fisrtName: '',
          lastName: '',
          email: '',
          country: '',
          city: '',
          age: '',
          sex: '',
          birth: '',
          accept: true,
          motto: ''
        },
        userRules: {
          fisrtName: [
            { required: true, message: '请填写名', trigger: 'blur' }
          ],
          lastName: [
            { required: true, message: '请填写姓', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请填写邮箱', trigger: 'blur' }
          ],
          country: [
            { required: true, message: '请选择国籍', trigger: 'change' }
          ],
          city: [
            { required: true, message: '请填写籍贯', trigger: 'blur' }
          ],
          age: [
            { required: true, message: '请填写年龄', trigger: 'blur', pattern: /^[0-9]{1,2}$/,}
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'blur' }
          ],
          birth: [
            { type: 'date', required: true, message: '请选择出生日期', trigger: 'change' }
          ],
          accept: [
            { required: true, trigger: 'change'}
          ],
          motto: [
            { required: true, message: '请填写座右铭', trigger: 'blur' }
          ],
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      switchNextStep(){
        this.defaultActive < 3 ? this.defaultActive++ : this.defaultActive = 1;
      },
      switchLastStep(){
        this.defaultActive > 1 ? this.defaultActive-- : this.defaultActive = 3;
      }
    }
  }

</script>

<style scoped>
  .form-container{
    margin: 0 auto;
    padding: 15px 40px;
    width: 50%;
    text-align: left;
  }
</style>
