const User = require('../model/user.model');

exports.user_details = async function (req, res) {

    const product = await User.findOne({ "patient_id": req.body.patient_id }, function (err, user) {


        if (err) {
            console.log('err', err)
            return err;
        }

        if (!user) {
            res.send({ "status": 0, "output": 'no data found' })
        }
        else {
            res.send({ "status": 1, "output": user })

        }

    })
};


exports.user_delete = async function (req, res) {
    await User.remove({}, function (err) {
        if (err) {
            console.log('err', err)
            return err;
        }
        res.send('Deleted successfully!');
    })
};

exports.findAll = (req, res) => {
    User.find()
        .then(notes => {
            console.log(notes)
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};