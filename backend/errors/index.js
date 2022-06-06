class ErrorManager extends Error {}

class InvalidBalance extends ErrorManager {
    constructor() {
        super();
        this.message = "invalid balance";
        this.errorCode = 400;
    }
}

class InvalidAddress extends ErrorManager {
    constructor() {
        super();
        this.message = "Address not found!";
        this.errorCode = 404;
    }
}
class Unauthorized extends ErrorManager {
    constructor() {
        super();
        this.message = "Unauthorized - Wallet Address or Password is wrong";
        this.errorCode = 401;
    }
}

class InvalidBody extends ErrorManager {
    constructor() {
        super();
        this.message = "Invalid body";
        this.errorCode = 400;
    }
}

class ExistingWallet extends ErrorManager {
    constructor() {
        super();
        this.message = "Wallet Existed";
        this.errorCode = 400;
    }
}

module.exports = {
    ErrorManager,
    InvalidBalance,
    InvalidAddress,
    InvalidBody,
    ExistingWallet,
    Unauthorized,
};
