import {FormControl} from '@angular/forms';
import * as _ from 'lodash';
import {isArray, isObject} from 'util';

export interface IAtValidatorError {
    type: string;
    valid: boolean;
    value: any;
    msg: string;
}

export class AtValidators {

    public static SHIFT_CHARACTERS = '\'";:.,_<>\/?\!@#\$%\^&\*\|\(\){}\[\\\]\+\-\='; // \'";:.,<>/?!@#$%^&*|(_){}[]-=+
    public static PUNCTUATION_CHARACTERS = '’\',.;"\!?\¡¿′_\-\~'; // ’',.;"!?¡¿′_-~°
    public static CURRENCY_CHARACTERS = '¤¢$€£¥₩₪';
    public static MATH_CHARACTERS = '\(\){}\[\\\]\^<>\=\+\-\*\/';

    /**
     * Validator that requires controls to have a non-empty value
     * @param msg Error message. Use %fieldLabel%, %fieldValue% as replacement pattern in error message.
     * @returns  null|{atValidatorsRequired: IAtValidatorError}
     */
    static required(msg: string = '%fieldLabel% is required') {
        return function validate(control: FormControl) {
            const err = {
                atValidatorsRequired: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: msg
                } as IAtValidatorError
            };
            if (control.value) {
                if (isObject(control.value) || isArray(control.value)) {
                    if (!_.isEmpty(control.value)) {
                        return null;
                    } else {
                        return err;
                    }
                } else {
                    return null;
                }
            } else {
                return err;
            }
        }
    }

    /**
     * Validator that requires controls to have a value of a minimum length.
     * @param length Minimun length of field value.
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %length% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static minLength(length: number, msg = '%fieldLabel% field must be greater than %length% characters length') {
        return function validate(control: FormControl) {
            if (!control.value) {
                return null
            }
            if (control.value && control.value.length >= length) {
                return null;
            } else {
                return {
                    atValidatorsExactLength: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: msg.replace('%length%', length.toString())
                    }as IAtValidatorError
                };
            }
        }
    }

    /**
     * Validator that requires controls to have a value of a maximum length.
     * @param length Minimum length of field value.
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %length% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static maxLength(length: number, msg = '%fieldLabel% field must be less than %length% characters length') {
        return function validate(control: FormControl) {
            if (!control.value) {
                return null
            }
            if (control.value && control.value.length <= length) {
                return null;
            } else {
                return {
                    atValidatorsExactLength: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: msg.replace('%length%', length.toString())
                    } as IAtValidatorError
                };
            }
        }
    }

    /**
     * Validator that requires controls to have a value of an exact length.
     * @param length Length of field.
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %length% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static exactLength(length: number, msg = '%fieldLabel% field must be %length% characters length') {
        return function validate(control: FormControl) {
            if (!control.value) {
                return null
            }
            if (control.value && control.value.length === length) {
                return null;
            } else {
                return {
                    atValidatorsExactLength: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: msg.replace('%length%', length.toString())
                    }as IAtValidatorError
                };
            }
        }
    }

    /**
     * Validator that requires controls to have a value between a minimum and maximun length.
     * @param min Minimum value.
     * @param max Maximum value.
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %length% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static rangeLength(min: number, max: number, msg = '%fieldLabel% field must be between %min% and %max% characters length') {
        return function validate(control: FormControl) {
            if (!control.value) {
                return null
            }
            if (control.value && control.value.length <= max && control.value.length >= min) {
                return null;
            } else {
                return {
                    atValidatorsRangeLength: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: msg.replace('%min%', min.toString()).replace('%max%', max.toString())
                    }as IAtValidatorError
                };
            }
        }
    }

    /**
     * Validator that requires controls to have a numerical value.
     * @param type The number type. Allows 'int' | 'unsignedInt' | 'float'. Defaults to 'float'
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %length% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static number(type: 'int' | 'unsignedInt' | 'float' = 'float', msg: string | null = null) {
        return function validate(control: FormControl) {
            if (!control.value) {
                return null
            }
            let REGEXP: RegExp;

            switch (type) {
                case 'int':
                    REGEXP = /^([-]?[1-9]\d*|0)$/;
                    msg = msg ? msg : '%fieldLabel% field only allows integers with sign';
                    break;
                case 'unsignedInt':
                    REGEXP = /^([1-9]\d*|0)$/;
                    msg = msg ? msg : '%fieldLabel% field only allows integers without sign';
                    break;
                default:
                    REGEXP = /[-]?([0-9]*\.[0-9]+|[0-9]+)/;
                    msg = msg ? msg : '%fieldLabel% field only allows floating numbers';
                    break;
            }

            return REGEXP.test(control.value) ? null : {
                atValidatorsNumber: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: msg.replace('%type%', type)
                }as IAtValidatorError
            };
        }
    }

    /**
     * Validator that requires controls to have a minimun value.
     * @param value The value to compare
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %length% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static min(value: number, msg = '%fieldLabel% field must be greater than or equal to %value%') {
        return function validate(control: FormControl) {
            if (!control.value) {
                return null
            }
            if (parseFloat(control.value) >= value) {
                return null
            } else {
                return {
                    atValidatorsMin: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: msg.replace('%value%', value.toString())
                    }as IAtValidatorError
                };
            }
        }
    }

    /**
     * Validator that requires controls to have a maximun value.
     * @param value The value to compare
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %length% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static max(value: number, msg = '%fieldLabel% field must be less than or equal to %value%') {
        return function validate(control: FormControl) {
            if (!control.value) {
                return null
            }
            if (parseFloat(control.value) <= value) {
                return null
            } else {
                return {
                    atValidatorsMax: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: msg.replace('%value%', value.toString())
                    }as IAtValidatorError
                };
            }
        }
    }

    /**
     * Validator that requires controls to have a value in a range.
     * @param min The minimum value
     * @param max The maximum value
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %min% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static range(min: number, max: number, msg = '%fieldLabel%  field must be between %min% and %max%') {
        return function validate(control: FormControl) {
            if (!control.value) {
                return null
            }
            if (parseFloat(control.value) <= max && parseFloat(control.value) >= min) {
                return null
            } else {
                return {
                    atValidatorsRange: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: msg.replace('%min%', min.toString()).replace('%max%', max.toString())
                    }
                };
            }
        }
    }

    /**
     * Validator that requires controls to have an alphanumeric value.
     * @param allow By default this validator only allows numbers and letters. Use this parameter to allow more characters.
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %allow% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static alphanumeric(allow: string | null = null, msg = '%fieldLabel% field only allows alphanumeric characters') {
        return function validate(control: FormControl) {
            if (!control.value) {
                return null
            }
            const REGEXP = new RegExp('^[A-Za-z0-9' + allow + ']*$');

            return REGEXP.test(control.value) ? null : {
                atValidatorsAlphanumeric: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: msg.replace('%allow%', allow)
                }
            };
        }
    }

    /**
     * Validator that performs URL validation.
     * @param msg Error message. Use %fieldLabel% and %fieldValue% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static url(msg = '%fieldLabel% field is invalid') {
        return function validate(control: FormControl) {
            if (!control.value) {
                return null
            }
            const REGEXP = new RegExp(
                "^" +
                // protocol identifier
                "(?:(?:https?|ftp)://)" +
                // user:pass authentication
                "(?:\\S+(?::\\S*)?@)?" +
                "(?:" +
                // IP address exclusion
                // private & local networks
                "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
                "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
                "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
                // IP address dotted notation octets
                // excludes loopback network 0.0.0.0
                // excludes reserved space >= 224.0.0.0
                // excludes network & broacast addresses
                // (first & last IP address of each class)
                "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
                "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
                "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
                "|" +
                // host name
                "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
                // domain name
                "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
                // TLD identifier
                "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
                // TLD may end with dot
                "\\.?" +
                ")" +
                // port number
                "(?::\\d{2,5})?" +
                // resource path
                "(?:[/?#]\\S*)?" +
                "$", "i"
            );

            return REGEXP.test(control.value) ? null : {
                atValidatorsUrl: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: msg
                }
            };
        }
    }

    /**
     * Validator that performs Email validation.
     * @param msg Error message. Use %fieldLabel% and %fieldValue% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static email(msg = '%fieldLabel% field is invalid') {
        return function validate(control: FormControl) {
            if (!control.value) {
                return null
            }
            const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            return EMAIL_REGEXP.test(control.value) ? null : {
                atValidatorsEmail: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: msg
                }
            };
        }

    }

    /**
     * Validator that check if current form field matches other field.
     * @param otherFieldName the name of the other field inside the form group.
     * @param msg Error message. Use %fieldLabel%, %fieldValue%, %otherFieldName% and %otherFieldLabel% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static matchOtherField(otherFieldName: string, otherFieldLabel: string, msg = '%fieldLabel% field doesn\'t match with %otherFieldLabel% field') {

        let thisControl: FormControl;
        let otherControl: FormControl;

        return function validate(control: FormControl) {

            if (!control.parent) {
                return null;
            }

            // Initializing the validator.
            if (!thisControl) {
                thisControl = control;
                otherControl = control.parent.get(otherFieldName) as FormControl;
                if (!otherControl) {
                    throw new Error('matchOtherField(): The other field was not found in parent group');
                }
                otherControl.valueChanges.subscribe(() => {
                    thisControl.updateValueAndValidity();
                });
            }

            if (!otherControl) {
                return null;
            }

            if (otherControl.value !== thisControl.value) {
                return {
                    atValidatorsMatchOtherField: {
                        type: 'AtValidatorsErr',
                        valid: false,
                        value: control.value,
                        msg: msg.replace('%otherFieldName%', otherFieldName)
                            .replace('%otherFieldLabel%', otherFieldLabel)
                    }
                };
            }

            return null;

        }

    }

    /**
     * Validator that requires controls to exclude certain characters.
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %characters% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static exclude(characters: string | null = null, msg = '%fieldLabel% field doesn\'t allow any of this character(s): "%characters%" ') {
        return function validate(control: FormControl) {
            if (!control.value) {
                return null
            }
            const REGEXP = new RegExp('[' + characters + ']');

            return REGEXP.test(control.value) ? {
                atValidatorsAlphanumeric: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: msg.replace('%characters%', characters)
                }
            } : null;
        }
    }

    /**
     * Validator that requires controls to include at least one characters.
     * @param msg Error message. Use %fieldLabel%, %fieldValue% and %characters% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static include(characters: string | null = null, msg = '%fieldLabel% field must include "%characters%" character(s)') {
        return function validate(control: FormControl) {
            const REGEXP = new RegExp('.*[' + characters + '].*');
            if (!control.value) {
                return null
            }
            return REGEXP.test(control.value) ? null : {
                atValidatorsRejectOnly: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: msg.replace('%characters%', characters)
                }
            };
        }
    }

    /**
     * Validator that requires a control to match a regex to its value.
     * @param msg Error message. Use %fieldLabel% and %fieldValue% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static regExp(regexp: RegExp, msg = '%fieldLabel% is invalid') {
        return function validate(control: FormControl) {
            if (!control.value) {
                return null
            }

            return regexp.test(control.value) ? null : {
                atValidatorsRegExp: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: msg
                }
            };
        }
    }

    /**
     * Validator that uses a custom function to check if FormControl is valid.
     * @param {(formCtrl: FormControl) => string} fn Function that returns an string if formCtrl is invalid and null otherwise.
     * The returned string will be used as an error message, you can use %fieldLabel% and %fieldValue% as replacement pattern in error message.
     * @returns null|{atValidatorsRequired: IAtValidatorError}
     */
    static custom(fn: (formCtrl: FormControl) => (string | null)) {
        return function validate(control: FormControl) {
            if (!control.value) {
                return null
            }

            const res = fn(control);
            return !res ? null : {
                atValidatorsCustom: {
                    type: 'AtValidatorsErr',
                    valid: false,
                    value: control.value,
                    msg: res
                }
            };
        }
    }
}
