const { User } = require('../models')
class SessionController {
    async store(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if(!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        if(!(await user.checkPassword(password))) {
            return res.status(401).json({ message: 'Incorrect email or password' });
        }

        return res.json({ user, token: user.generateToken() });
    }
}

module.exports = new SessionController();