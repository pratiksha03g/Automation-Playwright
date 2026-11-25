function required(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function getDemoBlazeCredentials() {
  return {
    username: required('DEMOBLAZE_USERNAME'),
    password: required('DEMOBLAZE_PASSWORD'),
  };
}

module.exports = { getDemoBlazeCredentials };