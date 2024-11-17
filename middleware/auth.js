const jwt = require('jsonwebtoken');

exports.authenticate = (role) => (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (verified.role !== role) throw 'Unauthorized role';
        req.user = verified;
        next();
    } catch (err) {
        res.status(401).send('Invalid Token');
    }
};
