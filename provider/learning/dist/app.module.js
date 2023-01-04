"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const db_service_1 = require("./db.service");
const config_service_1 = require("./config.service");
const hd_module_1 = require("./hd/hd.module");
const t1_module_1 = require("./t1/t1.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [hd_module_1.HdModule, t1_module_1.T1Module],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            config_service_1.SelectService,
            config_service_1.AppConfig,
            {
                provide: 'DbService',
                inject: ['AppConfig'],
                useFactory(appConfig) {
                    return new db_service_1.DbService(appConfig.dbConfig);
                },
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map