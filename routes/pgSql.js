var pg = require('pg');
var config = {
	user: 'postgres',
	database: 'own',
	password: 'sxl19951234',
	port: '5432',
	// 拓展
	max: 20, // 连接池最大连接数
	idleTimeoutMillis: 30000 // 最大空闲时间
}

var pool = new pg.Pool(config)

exports.pool