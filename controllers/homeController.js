// @desc    Welcome message
// @route   GET /
// @access  Public
const welcomeMessage = (req, res) => {
    res.status(200).json({
            message: "Welcome to the Server"
        })
}

module.exports = {welcomeMessage}