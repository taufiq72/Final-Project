'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Seed 25 Data IP Intelligence
    await queryInterface.bulkInsert('ip_intelligence', [
      { ip_address: '180.250.10.1', country: 'Indonesia', city: 'Jakarta', isp: 'PT Telekomunikasi Indonesia', risk_score: 10, is_vpn: false, is_tor: false },
      { ip_address: '103.16.198.5', country: 'Indonesia', city: 'Yogyakarta', isp: 'PT Biznet Gio Nusantara', risk_score: 15, is_vpn: false, is_tor: false },
      { ip_address: '202.152.240.12', country: 'Indonesia', city: 'Surakarta', isp: 'PT Indosat Tbk', risk_score: 5, is_vpn: false, is_tor: false },
      { ip_address: '36.64.120.45', country: 'Indonesia', city: 'Bandung', isp: 'PT Telekomunikasi Selular', risk_score: 8, is_vpn: false, is_tor: false },
      { ip_address: '103.247.216.10', country: 'Indonesia', city: 'Yogyakarta', isp: 'Universitas Muhammadiyah Yogyakarta', risk_score: 2, is_vpn: false, is_tor: false },
      { ip_address: '114.122.35.88', country: 'Indonesia', city: 'Medan', isp: 'PT Telkomsel', risk_score: 12, is_vpn: false, is_tor: false },
      { ip_address: '139.192.12.99', country: 'Indonesia', city: 'Surabaya', isp: 'PT XL Axiata Tbk', risk_score: 18, is_vpn: false, is_tor: false },
      { ip_address: '185.220.101.5', country: 'Germany', city: 'Frankfurt', isp: 'Tor Exit Node Provider', risk_score: 95, is_vpn: true, is_tor: true },
      { ip_address: '185.220.101.6', country: 'Germany', city: 'Frankfurt', isp: 'Tor Exit Node Provider', risk_score: 98, is_vpn: true, is_tor: true },
      { ip_address: '104.28.15.2', country: 'United States', city: 'Los Angeles', isp: 'Cloudflare WARP VPN', risk_score: 65, is_vpn: true, is_tor: false },
      { ip_address: '141.98.11.10', country: 'Netherlands', city: 'Amsterdam', isp: 'M247 Europe Server', risk_score: 85, is_vpn: true, is_tor: false },
      { ip_address: '193.56.28.14', country: 'Russia', city: 'Moscow', isp: 'Hostkey LLC', risk_score: 90, is_vpn: true, is_tor: false },
      { ip_address: '45.154.255.8', country: 'Panama', city: 'Panama City', isp: 'NordVPN Infrastructure', risk_score: 70, is_vpn: true, is_tor: false },
      { ip_address: '185.156.173.2', country: 'Seychelles', city: 'Victoria', isp: 'ExpressVPN Node', risk_score: 72, is_vpn: true, is_tor: false },
      { ip_address: '8.8.8.8', country: 'United States', city: 'Mountain View', isp: 'Google LLC', risk_score: 0, is_vpn: false, is_tor: false },
      { ip_address: '1.1.1.1', country: 'Australia', city: 'Sydney', isp: 'Cloudflare Inc.', risk_score: 0, is_vpn: false, is_tor: false },
      { ip_address: '13.228.0.1', country: 'Singapore', city: 'Singapore', isp: 'Amazon.com Inc.', risk_score: 25, is_vpn: false, is_tor: false },
      { ip_address: '20.198.0.1', country: 'Singapore', city: 'Singapore', isp: 'Microsoft Corporation', risk_score: 20, is_vpn: false, is_tor: false },
      { ip_address: '103.10.66.1', country: 'Indonesia', city: 'Semarang', isp: 'PT Fast Food Indonesia Tbk', risk_score: 15, is_vpn: false, is_tor: false },
      { ip_address: '202.80.212.1', country: 'Indonesia', city: 'Jakarta', isp: 'PT Link Net Tbk', risk_score: 10, is_vpn: false, is_tor: false },
      { ip_address: '103.28.12.1', country: 'Indonesia', city: 'Denpasar', isp: 'PT Bali Towerindo Tbk', risk_score: 12, is_vpn: false, is_tor: false },
      { ip_address: '185.220.101.7', country: 'Netherlands', city: 'Amsterdam', isp: 'Tor Relay Node', risk_score: 92, is_vpn: true, is_tor: true },
      { ip_address: '194.26.29.110', country: 'Romania', city: 'Bucharest', isp: 'Scaleway Hosting', risk_score: 88, is_vpn: true, is_tor: false },
      { ip_address: '45.12.253.95', country: 'Ukraine', city: 'Kyiv', isp: 'Shinjiru Hosting', risk_score: 82, is_vpn: true, is_tor: false },
      { ip_address: '103.147.32.1', country: 'Indonesia', city: 'Makassar', isp: 'PT Mora Telematika Indonesia', risk_score: 14, is_vpn: false, is_tor: false }
    ], {});

    // 2. Seed 27 Data Threat Logs
    await queryInterface.bulkInsert('threat_logs', [
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '185.220.101.5', threat_type: 'SSH Bruteforce', description: 'Detected 450 failed SSH login attempts in 10 minutes', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '185.220.101.5', threat_type: 'Credential Stuffing', description: 'Attempted automated login using leaked password lists', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '185.220.101.6', threat_type: 'Tor Exit Proxy', description: 'Identified as active Tor Exit Node used for anonymous scraping', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '185.220.101.6', threat_type: 'DDoS Source', description: 'Participated in UDP flood attack targeting e-commerce API', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '141.98.11.10', threat_type: 'Port Scanning', description: 'Scanned open ports 21, 22, 80, 443 across target subnets', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '141.98.11.10', threat_type: 'Web Spam Bot', description: 'Submitted 120 spam form responses within 1 minute', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '193.56.28.14', threat_type: 'SQL Injection Attempt', description: 'Injected SQL payloads into authentication endpoints', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '193.56.28.14', threat_type: 'Bruteforce Admin', description: 'Targeted /admin/login route with high-frequency POST requests', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '45.154.255.8', threat_type: 'Commercial VPN', description: 'High-risk commercial VPN node used for geo-unblocking', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '185.156.173.2', threat_type: 'VPN Anonymizer', description: 'VPN server associated with automated account creations', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '185.220.101.7', threat_type: 'Tor Relay Node', description: 'Relaying encrypted Tor network traffic', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '194.26.29.110', threat_type: 'Malware C2 Server', description: 'Flagged by Threat Intel as Command and Control server', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '194.26.29.110', threat_type: 'Ransomware Callback', description: 'Communicating with lockbit ransomware binaries', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '45.12.253.95', threat_type: 'Phishing Host', description: 'Hosted fake bank login landing page', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '180.250.10.1', threat_type: 'Low Risk Ping', description: 'Normal residential broadband ISP traffic', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '103.16.198.5', threat_type: 'Low Risk Ping', description: 'Normal commercial fiber ISP traffic', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '202.152.240.12', threat_type: 'Low Risk Mobile', description: 'Indosat Ooredoo Hutchison mobile network traffic', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '36.64.120.45', threat_type: 'Low Risk Mobile', description: 'Telkomsel Flash mobile network traffic', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '103.247.216.10', threat_type: 'Campus Network', description: 'EduNET traffic originating from University IP Block', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '114.122.35.88', threat_type: 'Low Risk Mobile', description: 'Telkomsel Medan mobile network traffic', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '139.192.12.99', threat_type: 'Low Risk Mobile', description: 'XL Axiata Surabaya mobile network traffic', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '13.228.0.1', threat_type: 'Cloud Infrastructure', description: 'AWS ap-southeast-1 datacenter node', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '20.198.0.1', threat_type: 'Cloud Infrastructure', description: 'Microsoft Azure Singapore datacenter node', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '103.10.66.1', threat_type: 'Corporate Network', description: 'Commercial enterprise network connection', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '202.80.212.1', threat_type: 'Residential Broadband', description: 'First Media / Link Net residential subscriber', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '103.28.12.1', threat_type: 'Local ISP', description: 'Bali Towerindo local distribution node', created_at: new Date(), updated_at: new Date() },
      { id: Sequelize.fn('gen_random_uuid'), ip_address: '103.147.32.1', threat_type: 'Local ISP', description: 'Moratelindo Eastern Indonesia fiber network', created_at: new Date(), updated_at: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('threat_logs', null, {});
    await queryInterface.bulkDelete('ip_intelligence', null, {});
  }
};