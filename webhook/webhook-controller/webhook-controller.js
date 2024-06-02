const Result = require("../webhook-models/result");


class WebhookController {
    async websiteWebhook(req, res) {
        try {
            // Assuming you have some logic here
            const data = req.body;
            console.log(data);
            const message = "Webhook processed successfully";
            const result = new Result(message, data, true);
            return res.status(200).json(result);
        } catch (error) {
            const result = new Result("An error occurred", null, false, error.message);
            return res.status(500).json(result);
        }
    }
}

module.exports = new WebhookController();
