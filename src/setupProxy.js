const proxy=require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/product',{target:'http://localhost:3001'})),
    app.use(proxy('/reviews/:id',{target:'http://localhost:3002'})),
    app.use(proxy('/:id',{target:'http://localhost:3002/reviews'}))
}