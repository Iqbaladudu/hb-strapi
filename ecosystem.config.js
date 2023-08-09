module.exports = {
  apps : [{
    name: 'halobeasiswa',
    script: 'yarn',
    args: 'develop',
    watch: true,
    env: {
      'NODE_ENV': 'development'
    },
    env_production: {
      'NODE_ENV': 'production',
    }
  }],
};
