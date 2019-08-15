/*
 * @Description: 
 * @Version: 
 * @Author: xinmou_su
 * @Date: 2019-08-15 14:24:09
 * @LastEditors: xinmou_su
 * @LstEditTime: Do not Edit
 */
import React, { Component } from 'react';
import {fetch} from 'whatwg-fetch'
import * as data from '../mock'
// const data = Mock.mock({
//     'data|20':[{
//       'goodsId|+1':1,
//       'goodsName':"@ctitle(10)",
//       'goodsTel':/^1(5|3|7|8|[0-9]{9}$)/,
//       'goodsAddress':'@county(true)',
//       "goodsLogo":"@Image('200X100', 'EasyMock')"
//     }]
// })
   
// Mock.mock(/\/shopList/, "post", function(params) {
//     console.log('fecth data:', params)
//     return  data
// })
export class Data extends Component{
    constructor(props) {
        super(props)
        this.state = {data:{}}
    }
    componentDidMount() {
        fetch('http://localhost:3000/shopList',{
            method:"POST",
            body: JSON.stringify(data), // must match 'Content-Type' header
            headers:{
                'Accept': 'application/json',
        　　　　 'Content-Type': 'application/json',
            }
        })
        .then((res) => {
            let data
            return data = res.json()
        }).then((res) => {
            console.log("state:", res)
            this.setState({data: res.data[0]})
        })
    }
    render() {
        console.log(this.state.data)
        return (
            <div style={{width:'500px', height:'200px', backgroundColor:'gray'}}>
                {this.state.data.goodsId}
            </div>
        )
    }
}

