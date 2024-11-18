const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

function getWelcomeMessage() {
  return 'Welcome to our Service';
}

app.get('/Welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetingMessage(username) {
  return 'Hello' + ' ' + username + '!';
}

app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

function checkPassword(password) {
  if (password.length > 15) {
    return 'Password is Strong';
  } else {
    return 'Password is Week';
  }
}

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

function getThSum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}

app.get('/Sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(getThSum(num1, num2));
});

function getSubscriptionStatus(username, subscribed) {
  if (subscribed === 'true') {
    return username + ' ' + 'is subscribed';
  } else {
    return username + ' ' + 'is not subscribed';
  }
}

app.get('/subscription-statue', (req, res) => {
  let username = req.query.username;
  let subscribed = req.query.subscribed;
  res.send(getSubscriptionStatus(username, subscribed));
});

function getDiscountedPrice(price, discount) {
  let finalPrice = price - (price * discount) / 100;
  return finalPrice.toString();
}

app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(getDiscountedPrice(price, discount));
});

function getPersonalizedMessage(age, gender, name) {
  return 'Hello,' + ' ' + name + '! You are a ' + age + ' year old ' + gender;
}

app.get('/personalized-greeting', (req, res) => {
  let age = req.query.age;
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getPersonalizedMessage(age, gender, name));
});

function getFinalPrice(price, discount, tax) {
  let discountedPrice = price - (price * discount) / 100;
  let finalPrice = discountedPrice + discountedPrice * (tax / 100);
  return finalPrice.toString();
}

app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(getFinalPrice(price, discount, tax));
});

function getTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}

app.get('/exercice-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(getTotalExerciseTime(running, cycling, swimming).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
