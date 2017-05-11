
var map = new BMap.Map("myMap");
var point = new BMap.Point(120.016789, 30.294284);
map.centerAndZoom(point, 15);
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.MapTypeControl());
//滚轮控制地图大小


// marker.enableDragging(); //开启拖拽功能
// marker.addEventListener("dragend", function(e) {

//     alert("当前位置：" + e.point.lng + ", " + e.point.lat);
// });


var school_info = [
    [120.119816, 31.296393, "恕园2号楼", "2.jpg"],
    [120.219816, 32.296393, "恕园14号楼", "14.jpg"],
    [120.319816, 33.296393, "恕园23号楼", "23.jpg"],
    [120.019816, 30.296393, "恕园33号楼", "33.jpg"],
];



var opts = {
    width: 250, // 信息窗口宽度    
    height: 200, // 信息窗口高度    
}

for (var i = 0; i < school_info.length; i++) {
    var marker = new BMap.Marker(new BMap.Point(school_info[i][0], school_info[i][1]));
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.style.width = "250px";
    img.style.height = "150px";
    img.src = school_info[i][3];
    div.append(img);
    div.append(school_info[i][2]);
    map.addOverlay(marker);

    OnClick(div, marker);


}

function OnClick(div, marker) {
    marker.addEventListener("click", function(e) {
        var infoWindow = new BMap.InfoWindow(div, opts);
        map.openInfoWindow(infoWindow, e.target.getPosition());
    });
}