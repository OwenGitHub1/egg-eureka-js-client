/**
 * Created with JetBrains WebStorm 8.
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
const Eureka = require('eureka-js-client').Eureka;

module.exports = app => {
	app.addSingleton('eureka', createEurekaClient);
};

function createEurekaClient (config, app) {
	return new Eureka(config);
}
