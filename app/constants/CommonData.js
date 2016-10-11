/**
 * Created by think on 2016/6/28.
 * 公共处理
 */


export function getStatus(status) {

    //-1 无需派单  , 0 派单，1 已接受处理中， 2 等待，3 处理完成，4，关闭
    var statusTyle;
    if (status == -1) {
        statusTyle = '无需派单';
    } else if (status == 0) {
        statusTyle = '派单';
    }
    else if (status == 1) {
        statusTyle = '处理中';
    } else if (status == 2) {
        statusTyle = '等待';
    } else if (status == 3) {
        statusTyle = '处理完成';
    } else if (status == 4) {
        statusTyle = '关闭';
    }
    return statusTyle;
}


