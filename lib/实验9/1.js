/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-05 10:49:49
 * @version $Id$
 */

/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 14:13:29
 * @version $Id$
 */

var map = new BMap.Map("myMap"); 
 var point = new BMap.Point(116.404, 39.915);
 map.centerAndZoom(point, 15);   
 map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.setCurrentCity("北京"); 

var marker = new BMap.Marker(point);// 创建标注    
map.addOverlay(marker);

var myIcon = new BMap.Icon("marker.png", new BMap.Size(20, 34));       
var marker = new BMap.Marker(point);    
map.addOverlay(marker);     

marker.addEventListener("click", function(){    
 alert("您点击了标注");    
});
marker.enableDragging();    
marker.addEventListener("dragend", function(e){    
 alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
})

var opts = {
  width: 250, // 信息窗口宽度    
  height: 100, // 信息窗口高度    
  title: "Hello" // 信息窗口标题   
}
var infoWindow = new BMap.InfoWindow("World", opts); // 创建信息窗口对象    
map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口


/*var local = new BMap.LocalSearch(map, {
  pageCapacity: 8,
  renderOptions: {
    map: map,
    panel: "result"
  }
});
local.search("中关村");*/

map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);
var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "result"
  }
});
transit.search("杭州市余杭区余杭塘路2318号", "杭州汽车西站");
