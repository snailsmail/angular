window.onload = function () {
  let aEle = document.getElementsByTagName('*');

  let arrApp = Array.from(aEle).filter(ele => ele.getAttribute('ng-app') != undefined);

  //处理ng-app
  arrApp.forEach(app => {
    let $scope = {};

    function findDirective(directive) {
      let arr = [];
      Array.from(app.getElementsByTagName('*')).forEach(ele => {
        let str = ele.getAttribute(directive);

        if (str) {
          arr.push({name: str, ele});
        }
      });

      return arr;
    }

    //找到所有的ng-model
    let models = findDirective('ng-model');

    //数据 -> html
    function apply() {
      for (let name in $scope) {
        models.forEach(model => {
          if (model.name == name) {
            model.ele.value = $scope[name];
          }
        });

        binds.forEach(bind => {
          let str = bind.name;

          for (let name in $scope) {
            str = str.replace(new RegExp(name, 'g'), `$scope.${name}`);
          }

          try {
            bind.ele.innerHTML = eval(str);
          } catch (e) {
            bind.ele.innerHTML = '';
          }
        });
      }
    }

    //html -> 数据
    models.forEach(model => {
      model.ele.oninput = function () {
        $scope[model.name] = this.value;

        apply();
      }
    });

    //ng-bind
    let binds = findDirective('ng-bind');

  });
}