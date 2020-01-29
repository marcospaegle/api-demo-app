var express = require('express');
var router = express.Router();

const posts = [
  { title: 'Leverage agile frameworks', body: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.' },
  { title: 'Are you busy this weekend?', body: 'I have a new project with a tight deadline it looks a bit empty, try to make everything bigger can you turn it around in photoshop so we can see more of the front it looks a bit empty, try to make everything bigger that\'s great, but can you make it work for ie 2 please or what you\'ve given us is texty, we want sexy mmm, exactly like that, but different.' },
  { title: 'This is not the hill i want to die on', body: 'This is not the hill i want to die on we need to dialog around your choice of work attire put it on the parking lot we just need to put these last issues to bed please use "solutionise" instead of solution ideas! :) we need a recap by eod, cob or whatever comes first. It just needs more cowbell. Rock Star/Ninja obviously so beef up, and hit the ground running, nor globalize, so powerpoint Bunny. This medium needs to be more dynamic driving the initiative forward, not the long pole in my tent pull in ten extra bodies to help roll the tortoise, nor drop-dead date, but table the discussion . Tbrand terrorists define the underlying principles that drive decisions and strategy for your design language.' }
];

/* GET get all posts. */
router.get('/', function(req, res, next) {
  res.json([
    {
      type: 'post',
      id: '1',
      attributes: {
        title: posts[0].title,
        body: posts[0].body,
      },
    },
    {
      type: 'post',
      id: '2',
      attributes: {
        title: posts[1].title,
        body: posts[1].body,
      },
    },
    {
      type: 'post',
      id: '3',
      attributes: {
        title: posts[2].title,
        body: posts[2].body,
      },
    },
  ]);
});

/* GET get post by id. */
router.get('/:id', function(req, res, next) {
  res.json({
    data: posts[0],
  });
});

/* POST add a post. */
router.post('/', function(req, res, next) {
  res.status(404).json({
    errors: [
      {
        status: '404',
        source: {
          pointer: '/api/v1/posts',
        },
        title: 'Unvalible',
        detail: 'Not implementend yet'
      },
    ],
  });
});

/* PATCH update a post. */
router.patch('/:id', function(req, res, next) {
  res.status(404).json({
    errors: [
      {
        status: '404',
        source: {
          pointer: '/api/v1/posts',
        },
        title: 'Unvalible',
        detail: 'Not implementend yet'
      },
    ],
  });
});

/* DELETE delete a post. */
router.delete('/:id', function(req, res, next) {
  res.status(404).json({
    errors: [
      {
        status: '404',
        source: {
          pointer: '/api/v1/posts',
        },
        title: 'Unvalible',
        detail: 'Not implementend yet'
      },
    ],
  });
});

module.exports = router;
