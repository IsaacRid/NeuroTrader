const users = require(`./controllers/users.server.controllers`)

module.exports = function (app) {
    app.route("/api/users/register")
    app.post(users.register)
    app.route("/api/users/login")
    app.post(users.login)
    app.route("/api/users/logout")
    app.post(users.logout)
    app.route("/api/users/me")
    app.get(users.getProfile)
}