/*
 * @Description: 
 * @Version: 
 * @Author: xinmou_su
 * @Date: 2019-08-15 16:23:07
 * @LastEditors: xinmou_su
 * @LstEditTime: Do not Edit
 */
import Mock from "mockjs"
const data = Mock.mock({
    'data|20':[{
      'goodsId|+1':1,
      'goodsName':"@ctitle(10)",
      'goodsTel':/^1(5|3|7|8|[0-9]{9}$)/,
      'goodsAddress':'@county(true)',
      "goodsLogo":"@Image('200X100', 'EasyMock')"
    }]
})
   
export default Mock.mock(/\/shopList/, "post", function(params) {
    console.log('fecth data:', params)
    return  data
})