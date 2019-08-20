const express = require('express');

const router = express.Router();

const sessionnumber = require('../../session');
//get session value from session file 
router.get('/',function (req, res){ res.json(sessionnumber)
});
router.get('/:viewid', function(req, res) {
  const getview = sessionnumber.some(session => session.viewid === parseInt(req.params.viewid));

  if (getview) {
    res.json(sessionnumber.filter(session => session.viewid === parseInt(req.params.viewid)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.viewid}` });
  }
});