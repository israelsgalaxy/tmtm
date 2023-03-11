const express = require('express')
const login = require('./login')
const UserDetails = require('../models/userDetails')

const router = express.Router()
router.use(login);

function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect("/auth/google");
}

// home page route
router.get('/', ensureAuthenticated, (req, res) => {
  res.send('Server running!')
})

// get all destinations route
router.get('/points', ensureAuthenticated, async (req, res) => {
  const userEmail = req.user.email
  
  let points = await UserDetails.find({ email: { $not: { $eq: userEmail }}}, "destination telegramUserName").exec()

  res.json(points)
})

// user details creation route
router.post('/create_details', ensureAuthenticated, (req, res) => {
  const userEmail = req.user.email
  const userDetails = req.body

  const details = new UserDetails({ email: userEmail, ...userDetails });
  
	details.save((error) => {
		if (error) {
			return res.send(error);
    }
    
		res.json({ message: 'Details saved successfully' });
	});
});

// user details modification route
router.post('/modify_details', ensureAuthenticated, async (req, res) => {
  const userEmail = req.user.email
  const detailsUpdate = req.body

  let result = await UserDetails.updateOne({ email: userEmail }, { ...detailsUpdate })

  if (!result.acknowledged) {
    return res.send(error);
  }
	
  res.json({ message: 'Details updated successfully' });
});

module.exports = router