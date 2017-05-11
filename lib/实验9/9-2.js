var p;
var map = new BMap.Map("myMap");
var point = new BMap.Point(120.016789, 30.294284);
var marker = new BMap.Marker(point); // 创建标注    
map.addOverlay(marker); //添加覆盖物*/

map.centerAndZoom(point, 15);
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.MapTypeControl());
//滚轮控制地图大小

marker.enableDragging(); //开启拖拽功能
marker.addEventListener("dragend", function(e) {

    alert("当前位置：" + e.point.lng + ", " + e.point.lat);
});

var local = new BMap.LocalSearch(map, {
    renderOptions: {
        map: map,
        autoViewport: true,
    }
});

local.searchNearby("宾馆", point);

map.centerAndZoom(new BMap.Point(120.016789, 30.294284), 14);


var transit = new BMap.TransitRoute(map, {
    renderOptions: {
        map: map,
        panel: "result"
    }
});


function search(e){
	transit.search(point, $("#HZNU-TO-Hotel-end").val());

}
