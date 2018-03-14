# angular
angular

-----------------------------------------------------------------------

指令

ng-app         范围：引入模块
ng-model       双向绑定  数据 <-> UI
ng-bind        输出
ng-事件         click/change/blur/dbclick/moursedown...
ng-init        初始化
ng-controller  控制器

-----------------------------------------------------------------------

ng-show/hide    显示隐藏   block/none
ng-if           元素是否存在

ng-src  --- 不报错
ng-href


ng-style
    <div style="width: 200px; height: 200px;background: #ccc;"></div>
    style={width: '200px', height: '200px', background: '#ccc'};

    style="{{a}}"
    ng-style="json"

ng-class
    <div class="aaa bbb ccc">
    class=['aaa', 'bbb', 'ccc']

    class="{{a}}"
    ng-class="[...]"


ng-cloak
    防止页面在加载时出现闪烁




-----------------------------------------------------------------------

url编码
encodeURIComponent('&')     --> %26
decodeURIComponent('%7B')   --> '{'

'&'.charCodeAt(0)           --> 38(38的十六进制是26)

String.fromCharCode('%7B')  --> '{'
String.fromCharCode('%7D')  --> '}'


