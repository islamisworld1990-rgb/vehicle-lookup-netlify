const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json'
  };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers };

  const qp = event.queryStringParameters || {};
  const vehicle = qp.vehicle || qp.v;
  if (!vehicle) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing vehicle query parameter' }) };

  try {
    const enc = encodeURIComponent(vehicle);
    // User provided example APIs — we'll call two example endpoints.
    const url1 = `https://vehicleinfo.xyz/new.php?vehicle=${enc}`;
    const url2 = `https://santosh-vercel.vercel.app/api/vehicle/${enc}`;

    const [r1, r2] = await Promise.all([
      fetch(url1, { method: 'GET' }),
      fetch(url2, { method: 'GET' })
    ]);

    const text1 = await r1.text();
    let api1;
    try { api1 = JSON.parse(text1); } catch(e) { api1 = { raw: text1 }; }

    const text2 = await r2.text();
    let api2;
    try { api2 = JSON.parse(text2); } catch(e) { api2 = { raw: text2 }; }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ api1, api2 })
    };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
