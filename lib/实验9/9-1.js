
var p;
var map = new BMap.Map("myMap");
var myGeo = new BMap.Geocoder();


map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.MapTypeControl());
//滚轮控制地图大小

myGeo.getPoint("西湖风景区", function(point) {
    if (point) {
        p = point;
        map.centerAndZoom(point, 15);

        var marker = new BMap.Marker(p); // 创建标注    
        map.addOverlay(marker);
        marker.enableDragging();
        marker.addEventListener("dragend", function(e) {
            alert("当前位置：" + e.point.lng + ", " + e.point.lat);
        });

    }
}, "杭州市");


var local = new BMap.LocalSearch(map, {
  renderOptions: {
   
    map: map,
    autoViewport: true,
     panel: "result"
  }
});
local.searchNearby("宾馆", "西湖风景区");


