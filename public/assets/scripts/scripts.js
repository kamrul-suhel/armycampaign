"use strict";
"use strict";
"use strict";var game=new Phaser.Game(640,360,Phaser.AUTO),GameState={preload:function(){this.load.image("background","./assets/images/background.png"),this.load.image("chicken","./assets/images/chicken.png"),this.load.image("horse","./assets/images/horse.png"),this.load.image("pig","./assets/images/pig.png")},create:function(){this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.scale.pageAlignHorizontally=!0,this.scale.pageAlignVertically=!0,this.background=this.game.add.sprite(0,0,"background"),this.chicken=this.game.add.sprite(50,50,"chicken"),this.horse=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"horse"),this.pig=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"pig"),this.pig.anchor.setTo(.5),this.pig.scale.setTo(-.2),this.horse.anchor.setTo(.5,.5),this.horse.angle=10},update:function(){this.pig.angle-=1}};game.state.add("Gamestate",GameState),game.state.start("Gamestate");
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycm93LmpzIiwiZmlyc3QtZ2FtZS5qcyIsIm1haW4uanMiLCJzZWNvbmRhcnktc2NyaXB0cy5qcyJdLCJuYW1lcyI6WyJnYW1lIiwiUGhhc2VyIiwiR2FtZSIsIkFVVE8iLCJwcmVsb2FkIiwidGhpcyIsIkdhbWVTdGF0ZSIsImltYWdlIiwibG9hZCIsImNyZWF0ZSIsInNjYWxlIiwic2NhbGVNb2RlIiwiU2NhbGVNYW5hZ2VyIiwiU0hPV19BTEwiLCJwYWdlQWxpZ25WZXJ0aWNhbGx5Iiwic3ByaXRlIiwiY2hpY2tlbiIsImFkZCIsImJhY2tncm91bmQiLCJ3b3JsZCIsImNlbnRlclgiLCJjZW50ZXJZIiwicGlnIiwiYW5jaG9yIiwic2V0VG8iLCJob3JzZSIsImFuZ2xlIiwidXBkYXRlIiwic3RhdGUiLCJzdGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTthQ0FBLElBQUlBLEtBQU8sSUFBSUMsT0FBT0MsS0FBSyxJQUFLLElBQUtELE9BQU9FLE1BQXhDSCxVQUFXQyxDQUdkRyxRQUFTLFdBRFZDLEtBQUlDLEtBQUFBLE1BQVksYUFBQSxrQ0FDZkYsS0FBQUEsS0FBU0csTUFBQSxVQUFVLCtCQUNsQkYsS0FBS0csS0FBS0QsTUFBTSxRQUFBLDZCQUNoQkYsS0FBS0csS0FBS0QsTUFBTSxNQUFBLDRCQUdoQkUsT0FOYyxXQVNkSixLQUFLSyxNQUFNQyxVQUFZVixPQUFPVyxhQUFhQyxTQUEzQ1IsS0FBS0ssTUFBTUMsdUJBQW1CQyxFQUc5QlAsS0FBS0ssTUFBTUkscUJBQXNCLEVBQWpDVCxLQUFLSyxXQUFNSSxLQUFBQSxLQUFBQSxJQUFYQyxPQUFBLEVBQUEsRUFBQSxjQUdBVixLQUFLVyxRQUFVWCxLQUFLTCxLQUFLaUIsSUFBSUYsT0FBTyxHQUFJLEdBQUksV0FENUNWLEtBQUthLE1BQUFBLEtBQWFsQixLQUFLQSxJQUFMZSxPQUFjQSxLQUFPZixLQUFyQm1CLE1BQTJCQyxRQUE3Q2YsS0FBQUwsS0FBQW1CLE1BQUFFLFFBQUEsU0FDQWhCLEtBQUtXLElBQUFBLEtBQVVoQixLQUFLQSxJQUFLaUIsT0FBSUYsS0FBT2YsS0FBckJtQixNQUE2QkMsUUFBNUNmLEtBQUFMLEtBQUFtQixNQUFBRSxRQUFBLE9BRUFoQixLQUFLaUIsSUFBTEMsT0FBZ0J2QixNQUFLaUIsSUFHckJaLEtBQUtpQixJQUFJWixNQUFNYyxPQUFPLElBQXRCbkIsS0FBS2lCLE1BQUlaLE9BQU1jLE1BQWYsR0FBQSxJQUdBbkIsS0FBS29CLE1BQU1DLE1BQVEsSUFDbkJDLE9BeEJjLFdBMkJkdEIsS0FBS2lCLElBQUlJLE9BQVMsSUEzQkoxQixLQUFoQjRCLE1BQUFYLElBQUEsWUFBQVgsV0FnQ0FOLEtBQUs0QixNQUFNQyxNQUFNO0FDbENqQiIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7IiwidmFyIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoNjQwLCAzNjAsIFBoYXNlci5BVVRPKTtcclxuXHJcbnZhciBHYW1lU3RhdGUgPSB7XHJcblx0cHJlbG9hZDogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMubG9hZC5pbWFnZSgnYmFja2dyb3VuZCcsJy4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZycpO1xyXG5cdFx0dGhpcy5sb2FkLmltYWdlKCdjaGlja2VuJywgJy4vYXNzZXRzL2ltYWdlcy9jaGlja2VuLnBuZycpO1xyXG5cdFx0dGhpcy5sb2FkLmltYWdlKCdob3JzZScsICcuL2Fzc2V0cy9pbWFnZXMvaG9yc2UucG5nJyk7XHJcblx0XHR0aGlzLmxvYWQuaW1hZ2UoJ3BpZycsICcuL2Fzc2V0cy9pbWFnZXMvcGlnLnBuZycpO1xyXG5cdH0sXHJcblxyXG5cdGNyZWF0ZTogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XHJcblxyXG5cdFx0dGhpcy5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xyXG5cdFx0dGhpcy5zY2FsZS5wYWdlQWxpZ25WZXJ0aWNhbGx5ID0gdHJ1ZTtcclxuXHJcblx0XHR0aGlzLmJhY2tncm91bmQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCAwLCAnYmFja2dyb3VuZCcpO1xyXG5cdFx0dGhpcy5jaGlja2VuID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoNTAsIDUwLCAnY2hpY2tlbicpO1xyXG5cdFx0dGhpcy5ob3JzZSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgJ2hvcnNlJyk7XHJcblx0XHR0aGlzLnBpZyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgJ3BpZycpO1xyXG5cclxuXHRcdHRoaXMucGlnLmFuY2hvci5zZXRUbyguNSk7XHJcblx0XHR0aGlzLnBpZy5zY2FsZS5zZXRUbygtLjIpO1xyXG5cclxuXHRcdHRoaXMuaG9yc2UuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuXHRcdHRoaXMuaG9yc2UuYW5nbGUgPSAxMDtcclxuXHR9LFxyXG5cclxuXHR1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMucGlnLmFuZ2xlIC09IDFcclxuXHR9XHJcbn1cclxuXHJcbmdhbWUuc3RhdGUuYWRkKCdHYW1lc3RhdGUnLCBHYW1lU3RhdGUpO1xyXG5nYW1lLnN0YXRlLnN0YXJ0KCdHYW1lc3RhdGUnKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7Il19
