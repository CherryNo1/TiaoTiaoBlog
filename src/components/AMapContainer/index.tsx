// import React from 'react'
// import AMapLoader from "@amap/amap-jsapi-loader";
// export default function AMapContainer() {
//     AMapLoader.load({
//         key: "dbd62eef550f4a59eb311446a61ce6aa", // 申请好的Web端开发者Key，首次调用 load 时必填
//         version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
//     }).then((AMap) => {
//         const map = new AMap.Map("AMapContainer", {
//             //设置地图容器id
//             viewMode: "3D", //是否为3D地图模式
//             zoom: 12, //初始化地图级别
//             // center: [116.39, 39.9], //初始化地图中心点位置
//         });
//         //标记点
//         var marker = new AMap.Marker({
//             position: new AMap.LngLat(116.39, 39.9),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
//         });

//         console.log(marker);
//         // //添加插件
//         // AMap.plugin(["AMap.ToolBar", "AMap.Scale", "AMap.HawkEye"], function () {
//         //     //异步同时加载多个插件
//         //     map.addControl(new AMap.HawkEye()); //显示缩略图
//         //     map.addControl(new AMap.Scale()); //显示当前地图中心的比例尺
//         //     map.add(marker)
//         // });
//     }).catch((e) => {
//         console.log(e);
//     });
//     return (
//         <div id="AMapContainer"></div>
//     )
// }
import {
    Map,
    APILoader,
    ScaleControl,
    ToolBarControl,
    ControlBarControl,
    Geolocation,
    Marker
} from "@uiw/react-amap";

function Demo() {
    return (
        <div style={{ width: "100%", height: "300px" }}>
            <Map zoom={4}></Map>
            <ScaleControl offset={[16, 30]} position="LB" />
            <ToolBarControl offset={[16, 10]} position="RB" />
            <ControlBarControl offset={[16, 180]} position="RB" />
            <Geolocation
                maximumAge={100000}
                borderRadius="5px"
                position="RB"
                offset={[16, 80]}
                zoomToAccuracy={true}
                showCircle={true}
            />
            <Marker
                title="北京市"
                // offset={new AMap.Pixel(-13, -30)}
                label={{
                    // 设置文本标注偏移量
                    offset: new AMap.Pixel(20, 20),
                    // 设置文本标注内容
                    content: 'sss',
                    // 设置文本标注方位
                    direction: "right"
                }}
                position={[117.283042, 31.86119]}
            >
                <div style={{ backgroundColor: "#333", width: 200, color: "white" }}>
                    我是 marker 的 label 标签
                </div>
            </Marker>
        </div >
    );
}

export default function App() {
    return (
        //高德api申请的key
        <APILoader akay="a7a90e05a37d3f6bf76d4a9032fc9129">
            <Demo />
        </APILoader>
    );
}
