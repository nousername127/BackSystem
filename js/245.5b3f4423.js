"use strict";(self["webpackChunkback_system"]=self["webpackChunkback_system"]||[]).push([[245],{19245:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"studentList"},[e("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline,size:"small"}},[e("el-form-item",{attrs:{label:"姓名"}},[e("el-input",{attrs:{placeholder:"请输入姓名查询"},model:{value:t.formInline.name,callback:function(e){t.$set(t.formInline,"name",e)},expression:"formInline.name"}})],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.find}},[t._v("查询")])],1),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:t.reset}},[t._v("重置")])],1)],1),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.compData,border:""}},[e("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),e("el-table-column",{attrs:{prop:"sex_text",label:"性别",align:"center"}}),e("el-table-column",{attrs:{prop:"age",label:"年龄",align:"center"}}),e("el-table-column",{attrs:{prop:"number",label:"学号",align:"center"}}),e("el-table-column",{attrs:{prop:"class",label:"班级",align:"center"}}),e("el-table-column",{attrs:{prop:"status_text",label:"状态",align:"center"}}),e("el-table-column",{attrs:{prop:"address",label:"地址",align:"center"}}),e("el-table-column",{attrs:{prop:"phone",label:"联系方式",align:"center"}}),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"danger",size:"min",icon:"el-icon-delete"},on:{click:function(e){return t.del(a.row)}}})]}}])})],1),e("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[5,10,50,100],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)},l=[],r=a(38898),s={data(){return{tableData:[],total:0,pageSize:10,currentPage:1,formInline:{name:""}}},created(){this.getData()},computed:{compData(){return this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)}},methods:{getData(t){(0,r.qH)(t).then((t=>{console.log(t),200===t.data.status&&(this.tableData=t.data.data,this.tableData.forEach((t=>{1===t.sex?t.sex_text="男":t.sex_text="女","1"===t.state?t.status_text="已入学":"2"===t.status?t.status_text="未入学":t.status_text="休学中"})),this.total=t.data.total)}))},del(t){console.log(t),(0,r.nJ)(t.id).then((t=>{200===t.data.status&&(this.$message({message:"删除数据成功",type:"success"}),this.getData())}))},handleSizeChange(t){console.log(`每页 ${t} 条`),this.pageSize=t,this.currentPage=1},handleCurrentChange(t){console.log(`当前页: ${t}`),this.currentPage=t},find(){this.getData(this.formInline)},reset(){this.formInline={},this.getData()}}},o=s,i=a(1001),u=(0,i.Z)(o,n,l,!1,null,null,null),c=u.exports},38898:function(t,e,a){a.d(e,{Hm:function(){return i},kf:function(){return o},nJ:function(){return s},qH:function(){return r},x4:function(){return l}});var n=a(37182);function l(t){return(0,n.Z)({method:"post",url:"/login",data:t})}function r(t){return(0,n.Z)({method:"get",url:"/students",params:t})}function s(t){return(0,n.Z)({method:"delete",url:`/students/${t}`})}function o(){return(0,n.Z)({method:"get",url:"/dataview"})}function i(){return(0,n.Z)({method:"get",url:"/travel"})}}}]);
//# sourceMappingURL=245.5b3f4423.js.map