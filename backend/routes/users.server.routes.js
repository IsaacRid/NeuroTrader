const users = require(`./controllers/users.server.controllers`)

module.exports = function (app) {
    app.route("/api/users/register")
        .post(users.register)
    app.route("/api/users/login")
        .post(users.login)
    app.route("/api/users/logout")
        .post(users.logout)
    app.route("/api/users/me")
        .get(users.getProfile)
}