const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });
    res.status(201).json({ message: 'User berhasil mendaftar', userId: user.id, email: user.email });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Email atau password salah' });
    }
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
    res.json({ message: 'Login berhasil', token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};