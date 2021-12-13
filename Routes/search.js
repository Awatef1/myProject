const express = require('express');

const Posts = require('../models/Posts');
const router = express.Router();



router.post('/search', async (req, res) => {
	const { title, query } = req.body;

	try {
		let posts;

		if(title === 'text') {
			
			posts = await Posts.find({ $text: { $search: query } });
				
		}

		if (posts.length === 0) {
			posts = await Posts.find({});
		}

		res.status(200).send({ response: posts });
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: 'Please try again later'});
	}
});

module.exports = router;