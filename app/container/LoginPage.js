/**
 * Created by terryxu on 16/6/22.
 */
import React,{Component,PropTypes} from "react";
import { bindActionCreators } from  'redux';
import { connect } from  'react-redux';
import {browserHistory,Link,IndexLink} from 'react-router';
import * as Actions from '../actions/index.js';
import * as Common from '../common/Common.js';
import * as Global from '../constants/Global.js';
import * as ConstData from '../constants/ConstData';


class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            address: '',
            map: null,

        }
    }

    render() {

        return (
            <div>
                <div className="map_style" id="map">
                </div>
                <input type="button" style={{'marginTop':'20px','marginLeft':'20px'}} className="back_level"
                       onClick={this.customCluster.bind(this)} value="backToLevel"/>
            </div>

        )
    }

    componentDidMount() {
        var _this = this
        /*============== 百度地图API功能===========*/
        var map = (new BMap.Map("map", {minZoom: 3, maxZoom: 18, enableMapClick: false}))
        this.state.map = map  // 创建Map实例
        map.centerAndZoom("上海", 13);      // 初始化地图,用城市名设置地图中心点
        map.enableScrollWheelZoom(true);  //滚轮控制放大缩小
        map.setMapStyle({
            styleJson: ConstData.MapStyle
        });   //颜色风格
        var geolocation = new BMap.Geolocation();//自动定位
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                var mk = new BMap.Marker(r.point);
                var gc = new BMap.Geocoder();
                gc.getLocation(r.point, function (rs) {
                    var addComp = rs.addressComponents;
                    //_this.setState({
                    //    address : addComp.city + addComp.district + addComp.street + addComp.streetNumber
                    //})
                    _this.state.address = addComp.city + addComp.district + addComp.street + addComp.streetNumber;
                });
                mk.disableMassClear();
                map.addOverlay(mk);
                //map.panTo(r.point);
                _this.customCluster();

            }
            else {
                alert('failed' + this.getStatus());
            }
        }, {enableHighAccuracy: true});

    }

    /*===============  展示区  =================*/
    customCluster() {
        this.clearOverlay();
        var data = ConstData.county;
        let add = data.areaSsStatDataList;
        var myGeo = new BMap.Geocoder();
        var map = this.state.map;
        map.centerAndZoom("上海市徐汇区", 12);
        for (let i = 0; i < add.length; i++) {
            myGeo.getPoint(add[i].areaName, (point)=> {
                //document.getElementById("result").innerHTML +=  add[i].name + ":" + point.lng + "," + point.lat + "</br>";
                var address = new BMap.Point(point.lng, point.lat);
                var marker = new BMap.Marker(address);
                map.addOverlay(marker);
                var label = new BMap.Label(add[i].areaName + '</br>' + add[i].ssCount,
                    {offset: new BMap.Size(-10, 0)})
                label.setStyle({
                    height: '25px',
                    fontSize: '12px',
                    backgroundColor: '#cf8b44',
                    borderColor: "#cf8b44",
                    color: "white",
                    textAlign: 'center'
                });

                marker.setLabel(label);
                label.addEventListener('click', ()=> {
                    this.districtClick(add[i].areaNum, add[i].areaName, address);
                });
                marker.addEventListener('click', ()=> {
                    this.districtClick(add[i].areaNum, add[i].areaName, address);
                });
            })
        }


    }

    /*===============  展示街道  =================*/
    districtClick(num, name, point) {
        var map = this.state.map
        var data;
        this.clearOverlay();
        var street = ConstData.street;
        for (let i = 0; i < street.length; i++) {
            if (street[i].areaNum == num)
                data = street[i];
        }
        map.centerAndZoom(point, 14);
        if (data.sdSsDataStatList.length != 0) {
            for (let i = 0; i < data.sdSsDataStatList.length; i++) {
                let subDis = data.sdSsDataStatList[i];
                var lng = subDis.gcsLl.split(',')[0]
                var lat = subDis.gcsLl.split(',')[1];
                var address = new BMap.Point(lng, lat);
                var marker = new BMap.Marker(address);
                map.addOverlay(marker);
                var label = new BMap.Label(subDis.sdName + '</br>' + subDis.ssCount,
                    {offset: new BMap.Size(-10, 0)})
                label.setStyle({
                    height: '25px',
                    fontSize: '12px',
                    backgroundColor: '#cf8b44',
                    borderColor: "#cf8b44",
                    color: "white",
                    textAlign: 'center'
                });

                marker.setLabel(label);
                label.addEventListener('click', ()=> {
                    this.subDistrictClick(subDis.sdNum);
                });
                marker.addEventListener('click', ()=> {
                    this.subDistrictClick(subDis.sdNum);
                });
            }
        }


    }

    /*===============  展示点  =================*/
    subDistrictClick(num) {
        this.clearOverlay();
        this.getList(num);

    }

    /*===============  清除覆盖物  =================*/

    clearOverlay() {
        var map = this.state.map;
        map.clearOverlays();
    }

    /*===============  获取点  =================*/

    getList(subDistrict) {

        var point = [];
        var addPoints = [];
        var map = this.state.map;
        var markerArray = ConstData.markerArray;
        var data;
        for (let i = 0; i < markerArray.length; i++) {
            if (markerArray[i].sdNum == subDistrict)
                data = markerArray[i];
        }
        for (let i = 0; i < data.scenicSiteList.length; i++) {
            /*======================经纬度及经典ID放入Point数组========================*/
            if (data.scenicSiteList[i].gcsLl) {
                point = data.scenicSiteList[i].gcsLl.split(',');
                point = point.concat(data.scenicSiteList[i].id);
            }
            /*======================[点]全局变量数组的创建========================*/
            let type = data.scenicSiteList[i].type;
            var imgUrl = '/images/iconPic.png'

            let myIcon = new BMap.Icon(imgUrl, new BMap.Size(32, 32));
            let marker = new BMap.Marker(new BMap.Point(point[0], point[1]), {icon: myIcon});
            addPoints = addPoints.concat(marker);
            map.addOverlay(marker);            // 将标注添加到地图中
            this.addClickHandle(marker,data.scenicSiteList[i].id,data.scenicSiteList[i])

        }
        map.centerAndZoom(addPoints[0].point, 16);


    }

    addClickHandle(marker, id,scenicSite) {
        var data = {"scenicSite":""};
        data.scenicSite = scenicSite;
        console.log(scenicSite);
        // 百度地图API功能
        var _this = this;
        marker.addEventListener("click", function () {
            var tar = this;


            let logo;
            logo = 'lishi_icon_jianzhu.png'

            var iconUrl = (data.scenicSite.iconUrl) ? ConstData.IMG_HTTP_URL + data.scenicSite.iconUrl : ConstData.IMG_HTTP_URL + '/images/amap/shbwg01.png';
            let name = data.scenicSite.name.length > 10 ? data.scenicSite.name.substr(0, 8) + '...' : data.scenicSite.name
            let profile = data.scenicSite.profile ? (data.scenicSite.profile.substr(0, 25) + '...') : '无';
            let likeCount = data.scenicSite.likeCount ? data.scenicSite.likeCount : '0';
            let fbCount = data.scenicSite.fbCount ? data.scenicSite.fbCount : 0;
            let countyNum = data.scenicSite.area;

            let latlng = data.scenicSite.gcsLl.split(',');
            _this.state.endPoint = latlng[1] + ',' + latlng[0];
            _this.setState({
                destination: data.scenicSite.name
            });
            let url = 'http://api.map.baidu.com/direction?origin=latlng:' + _this.state.startPoint + '|name:我的位置&destination=latlng:' + _this.state.endPoint + '|name:' + _this.state.destination + '&mode=driving&region=上海&output=html&src=上海矢木网络科技有限公司'

            /*================点击导航触发事件================*/
            var sContent = "<div class='info_box' >" + "<a ><img src='" + iconUrl + "'/></a>"
                + "<div class='leading_btn' id='navi'><a ontouchend=\"location.href='" + url + "'\">导航</a></div>"
                + "<div class='details_box fixed'><h3><img src='" + ConstData.IMG_HTTP_URL + "/images/amap/" + logo + "'/>"
                + name
                + "</h3><p>" + profile
                + "...</p><div class='msg_box fixed'><ul><li><img src='" + ConstData.IMG_HTTP_URL + "/images/amap/bg_talk.png'/><span>"
                + fbCount + "</span></li><li><img src='" + ConstData.IMG_HTTP_URL + "/images/amap/bg_heart.png'/><span id='like" + id + "id'>"
                + likeCount + "</span></li></ul></div><a>详情</a></div><input class='close_btn' type='button' /></div>";
            var map = _this.state.map;
            var infoBox = new BMapLib.InfoBox(map, sContent, {
                boxStyle: {
                    background: "#16b0b7", width: "300px", height: "260px"
                }
                , closeIconMargin: "2px 2px 0 0"
                , closeIconUrl: ConstData.IMG_HTTP_URL + "/images/amap/x.png"
                , enableAutoPan: true
                , offset: new BMap.Size(12, 12)
            });  // 创建信息窗口对
            if (_this.state.infoBox)
                _this.state.infoBox.close();
            _this.setState({infoBox: infoBox});
            infoBox.open(marker);

            var point = data.scenicSite.gcsLl.split(',');
            var BPoint = new BMap.Point(point[0], point[1]);
            _this.setState({destination: data.scenicSite.name, destinationPoint: BPoint});
            //_this.showNavi();
            //map.panTo(marker.point);
            //console.log(marker.point)


        });
    }


}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage)