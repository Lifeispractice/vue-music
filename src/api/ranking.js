import Vue from 'vue'
import {commonParams, cb} from './config'
export function getRanking (){
    return Vue.http.jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',{
        params:Object.assign({},commonParams,{
            uin:0,
            format:'jsonp',
            _:1517878864117
        }),
        jsonp:cb
    })
}
export function getChildRanking(id){
    return Vue.http.jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg',{
        params:Object.assign({},commonParams,{
            g_tk:2111403921,
            uin:0,
            tpl:3,
            page:"detail",
            type:"top",
            topid:id,
            _:1517878864117
        }),
        jsonp:cb
    })
}