var pool = require('../routes/pgSql.js');
exports.inf = function(req, res){
	var sql = 'SELECT * FROM my WHERE age = $1'
	pool.connect((err, client, done) => {
		if (err) {
			return console.error('数据库连接错误: ' + err)
		}
		client.query(sql, [ 23 ], (err, result)=> {
			done();
			if(err) {
				console.error('查询出错:' + err);
			}
			res.send(result);
		})
	})
}