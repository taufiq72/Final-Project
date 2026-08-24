const { IpIntelligence, ThreatLog } = require('../models');

exports.getAllIp = async (req, res) => {
  try {
    const data = await IpIntelligence.findAll({ include: [{ model: ThreatLog, as: 'threat_logs' }] });
    res.json({ total_records: data.length, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getIpDetail = async (req, res) => {
  try {
    const data = await IpIntelligence.findByPk(req.params.ip, { include: [{ model: ThreatLog, as: 'threat_logs' }] });
    if (!data) return res.status(404).json({ error: 'Data IP tidak ditemukan' });
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createIp = async (req, res) => {
  try {
    const newIp = await IpIntelligence.create(req.body);
    res.status(201).json({ message: 'Data IP berhasil ditambahkan', data: newIp });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateIp = async (req, res) => {
  try {
    await IpIntelligence.update(req.body, { where: { ip_address: req.params.ip } });
    res.json({ message: 'Data IP berhasil diperbarui' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteIp = async (req, res) => {
  try {
    await IpIntelligence.destroy({ where: { ip_address: req.params.ip } });
    res.json({ message: `Data IP ${req.params.ip} berhasil dihapus` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};