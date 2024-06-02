const express = require('express')

class Result {
    message;
    isSuccess;
    error;
    data;
    constructor(message, data, isSuccess = false, error = null) {
        this.message = message;
        this.data = data;
        this.isSuccess = isSuccess;
        this.error = error;
    }
}

module.exports = Result;
