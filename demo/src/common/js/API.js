// const baseUrl = '/api';
const baseUrl = '';
// 1.登录
const login = baseUrl + '/login';
// 2.管理员
// 2.查询管理员 /findManage -post
const findManage = baseUrl + '/findManage';
// 1.添加管理员 /addManage -post
const addManage = baseUrl + '/addManage';
// 3.删除管理员 /delManage -post
const delManage = baseUrl + '/delManage';
// 4.更新管理员 /updateManage -post
const updateManage = baseUrl + '/updateManage';
// 5.修改密码 /changePassManage -post
const changePassManage = baseUrl + '/changePassManage';
// 3.上传图片获取token接口-getToken -get
const getToken = baseUrl + '/getToken';
// 4.首页轮播图 
// 1.添加轮播图 /addBanner -get
const addBanner = baseUrl + '/addBanner';
// 2.获取轮播图 /banner -get
const banner = baseUrl + '/banner';
// 3.删除轮播图 /delBanner -get
const delBanner = baseUrl + '/delBanner';
// 5.家教轮播图 
// 1.添加家教轮播图 /addTeacherBanner -get
const addTeacherBanner = baseUrl + '/addTeacherBanner';
// 2.获取轮播图 /teacherBanner -get
const teacherBanner = baseUrl + '/teacherBanner';
// 3.删除轮播图 /delTeacherBanner -get
const delTeacherBanner = baseUrl + '/delTeacherBanner';
// 6.家教类型图 
// 1.添加家教类型 /addTeacherType -get
const addTeacherType = baseUrl + '/addTeacherType';
// 2.获取类型 /teacherType -get
const teacherType = baseUrl + '/teacherType';
// 3.删除类型 /delTeacherType -get
const delTeacherType = baseUrl + '/delTeacherType';
// 4.更新类型 /updateTeacherType -get
const updateTeacherType = baseUrl + '/updateTeacherType';
// 7.家教排行 
// 1.添加家教排行 /addTeacherTop -get
const addTeacherTop = baseUrl + '/addTeacherTop';
// 2.获取排行 /teacherTop -get
const teacherTop = baseUrl + '/teacherTop';
// 3.删除排行 /delTeacherTop -get
const delTeacherTop = baseUrl + '/delTeacherTop';
// 4.更新排行 /updateTeacherTop -get
const updateTeacherTop = baseUrl + '/updateTeacherTop';
// 8.用户管理
// 1.添加用户 /addUser -post
const addUser = baseUrl + '/addUser';
// 2.查询用户 /findUser -post
const findUser = baseUrl + '/findUser';
// 3.删除用户 /delUser -post
const delUser = baseUrl + '/delUser';
// 4.更新用户 /updateUser -post
const updateUser = baseUrl + '/updateUser';
// 5.修改密码 /changePassUser -post
const changePassUser = baseUrl + '/changePassUser';
// 9.水站1.添加水站/addWater -get
const addWater = baseUrl + '/addWater';
// 2.获取水站 /findWater-get
const findWater = baseUrl + '/findWater';
// 3.删除水站 /delWater -get
const delWater = baseUrl + '/delWater';
// 4.更新水站/updateWater -get
const updateWater = baseUrl + '/updateWater';
// 10.水站评论1.添加水站评论/addComment -get
const addComment = baseUrl + '/addComment';
// 2.获取水站评论 /findComment-get
const findComment = baseUrl + '/findComment';
// 3.删除评论 /delComment -get
const delComment = baseUrl + '/delComment';
// 11.维修1.添加维修/addRepair -get
const addRepair = baseUrl + '/addRepair';
// 2.获取维修列表 /findRepair-get
const findRepair = baseUrl + '/findRepair';
// 3.删除维修 /delRepair -get
const delRepair = baseUrl + '/delRepair';
// 4.更新维修/updateRepair -get
const updateRepair = baseUrl + '/updateRepair';
// 12.维修评论1.添加维修评论/addRepairComment -get
const addRepairComment = baseUrl + '/addRepairComment';
// 2.获取维修评论 /findRepairComment-get
const findRepairComment = baseUrl + '/findRepairComment';
// 3.删除维修评论 /delRepairComment -get
const delRepairComment = baseUrl + '/delRepairComment';
// 13.家政轮播图 1.添加家政轮播图 /addHomeBanner -get
const addHomeBanner = baseUrl + '/addHomeBanner';
// 2.获取轮播图 /homeBanner -get
const homeBanner = baseUrl + '/homeBanner';
// 3.删除轮播图 /delHomeBanner -get
const delHomeBanner = baseUrl + '/delHomeBanner';
// 13.家政员工信息
// 1.添加员工信息/addHomeWorker -get
const addHomeWorker = baseUrl + '/addHomeWorker';
// 2.获取员工信息 /findHomeWorker-get
const findHomeWorker = baseUrl + '/findHomeWorker';
// 3.删除员工 /delHomeWorker -get
const delHomeWorker = baseUrl + '/delHomeWorker';
// 4.修改员工信息/updateHomeWorker -get
const updateHomeWorker = baseUrl + '/updateHomeWorker';
// 5.获取资格证书接口 /getQualification -get请求
const getQualification = baseUrl + '/getQualification';
// 6.获取家政服务类型 /getHomeType -get请求
const getHomeType = baseUrl + '/getHomeType';
// 14. 退出登录 /exit -get请求
const exit = baseUrl + '/exit';
export default {
    login,
    findManage,
    addManage,
    delManage,
    updateManage,
    changePassManage,
    getToken,
    addBanner,
    banner,
    delBanner,
    addTeacherBanner,
    teacherBanner,
    delTeacherBanner,
    addTeacherType,
    teacherType,
    delTeacherType,
    updateTeacherType,
    addTeacherTop,
    teacherTop,
    delTeacherTop,
    updateTeacherTop,
    addUser,
    findUser,
    delUser,
    updateUser,
    changePassUser,
    addWater,
    findWater,
    delWater,
    updateWater,
    addComment,
    findComment,
    delComment,
    addRepair,
    findRepair,
    delRepair,
    updateRepair,
    addRepairComment,
    findRepairComment,
    delRepairComment,
    addHomeBanner,
    homeBanner,
    delHomeBanner,
    addHomeWorker,
    findHomeWorker,
    delHomeWorker,
    updateHomeWorker,
    getQualification,
    getHomeType,
    exit
}