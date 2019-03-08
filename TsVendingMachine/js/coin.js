var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Coin = /** @class */ (function () {
        function Coin(value) {
            this.value = value;
        }
        return Coin;
    }());
    exports.Coin = Coin;
    var Quarter = /** @class */ (function (_super) {
        __extends(Quarter, _super);
        function Quarter() {
            return _super.call(this, .25) || this;
        }
        Quarter.prototype.getImageUrl = function () {
            return "img/Quarter.png";
        };
        return Quarter;
    }(Coin));
    exports.Quarter = Quarter;
    var Dime = /** @class */ (function (_super) {
        __extends(Dime, _super);
        function Dime() {
            return _super.call(this, .25) || this;
        }
        Dime.prototype.getImageUrl = function () {
            return "img/Dime.png";
        };
        return Dime;
    }(Coin));
    exports.Dime = Dime;
    var Half = /** @class */ (function (_super) {
        __extends(Half, _super);
        function Half() {
            return _super.call(this, .5) || this;
        }
        Half.prototype.getImageUrl = function () {
            return "img/Half.png";
        };
        return Half;
    }(Coin));
    exports.Half = Half;
    var Dollar = /** @class */ (function (_super) {
        __extends(Dollar, _super);
        function Dollar() {
            return _super.call(this, 1) || this;
        }
        Dollar.prototype.getImageUrl = function () {
            return "img/Dollar.jpg";
        };
        return Dollar;
    }(Coin));
    exports.Dollar = Dollar;
});
//# sourceMappingURL=coin.js.map