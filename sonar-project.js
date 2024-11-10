/* eslint-disable prettier/prettier */
const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl: 'http://192.168.162.26:9004/',
    token: 'sqa_8fce4be5d49a7eecedaf67c17fecdb74e108cf6a',
    options: {
      'sonar.projectName': 'template-agent-kfk',//TODO cambiar nombre
      'sonar.projectDescription': 'bucket-api-hn',
      'sonar.sources': 'src',
      'sonar.tests': 'src',
      'sonar.inclusions': '**',
      'sonar.test.inclusions':
        'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx,src/**/main.ts,src/**/app.module.ts,',
      'sonar.coverage.exclusions':
        'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx,src/**/*.spec.ts',
    },
  },
  () => {},
);
