const { resolve } = require('path');

const participantTemplate = resolve(`src/templates/participant.js`);
const taskTemplate = resolve(`src/templates/task.js`);

exports.createPages = ({ boundActionCreators } = {}) => {
  const { createPage } = boundActionCreators;
  const participants = [
    {
      name: 'Ashley A.',
      url: 'ashleyl',
    },
    {
      name: 'James G.',
      url: 'jamesg',
    },
    {
      name: 'Claire C.',
      url: 'clairec',
    },
    {
      name: 'Bhakti P.',
      url: 'bhaktip',
    },
    {
      name: 'Jeanine L.',
      url: 'jeaninel',
    },
    {
      name: 'Gabriel G.',
      url: 'gabrielg',
    },
    {
      name: 'Dennis L.',
      url: 'dennisl',
    },
    {
      name: 'Joyce L.',
      url: 'joycel',
    },
    {
      name: 'Clifford L.',
      url: 'cliffordl',
    },
    {
      name: 'Jane B.',
      url: 'janeb',
    },
    {
      name: 'Rolf N.',
      url: 'rolfn',
    },
    {
      name: 'Adeline S.',
      url: 'adelines',
    }
  ];
  const tasks = [
    {
      name: 'HMSA Path to Application',
      url: 'hmsa-path-to-app',
    },
    {
      name: 'Find HMSA Gym Benefits',
      url: 'hmsa-gym-membership',
    },
    {
      name: 'Find a Doctor on hmsa.com',
      url: 'hmsa-find-doctor',
    },
    {
      name: 'Kaiser Permanente Path to Application',
      url: 'kp-path-to-app',
    },
    {
      name: 'Find Kaiser Permanente Gym Benefits',
      url: 'kp-gym-membership',
    },
    {
      name: 'Find a Doctor on kpinhawaii.com',
      url: 'kp-find-doctor',
    }
  ]

  participants.forEach(participant => {
    const path = `/participants/${participant.url}`;
    console.log(`creating page for ${participant.name} @ "${path}"`);
    createPage({
      path,
      component: participantTemplate,
      layout: 'index',
      context: {
        url: participant.url,
      },
    });
  });

  tasks.forEach(task => {
    const path = `/tasks/${task.url}`;
    console.log(`creating page for ${task.name} @ "tasks/${task.url}"`);
    createPage({
      path,
      component: taskTemplate,
      layout: 'index',
      context: {
        url: task.url
      },
    });
  })
};
