const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/nexusDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const submissionSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Submission = mongoose.model('Submission', submissionSchema);

app.post('/submit-form', (req, res) => {
    const newSubmission = new Submission({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    newSubmission.save((err) => {
        if (!err) {
            res.send('Thank you for your message!');
        } else {
            res.send('There was an error saving your message.');
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
