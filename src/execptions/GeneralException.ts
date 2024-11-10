

export class GeneralException extends Error {

    message: string;


    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;

        this.message = message

        Object.setPrototypeOf(this, new.target.prototype);
    }
}