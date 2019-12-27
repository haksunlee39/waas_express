const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', {name: req.cookies.name || 'notLoginned'});
});

router.post('/', function(req, res, next) {
  if(req.body.id === 'waas' && req.body.pw === 'team') {
    res.cookie('name', 'waas', {
      maxAge: 30000   // 30000밀리초 → 30초
    })
  }
  if(req.body.id === 'haksun' && req.body.pw === 'chocolate') {
    res.cookie('name', 'haksun', {
      maxAge: 30000   // 30000밀리초 → 30초
    })
  }
  return res.status(302).redirect("/login");
});

router.post('/logout', function(req, res, next) {
    req.cookies.name = undefined;
    return res.status(302).redirect("/login");
})

router.get('/isLogin', function(req, res, next) {
  if(req.cookies.name === undefined) {
    return res.status(401).send("unauthorized");
  }
  else {
    // todo(12-27): login한 ID로 cookie값을 설정, ID가 waas가 아닌경우 403 Forbidden 공지
    if(!(req.cookies.name === 'waas')) {
      return res.status(403).send("forbidden");
    }
    else
    {
      return res.status(200).send("waas team");
    }
  }
})

module.exports = router;
