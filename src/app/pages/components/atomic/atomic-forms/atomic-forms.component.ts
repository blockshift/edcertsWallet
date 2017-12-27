import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AtValidators} from '@atomic/core';

@Component({
    selector: 'app-aviator-forms',
    templateUrl: './atomic-forms.component.html'
})
export class AtomicFormsComponent implements OnInit {
    formFieldEx: FormGroup;
    formValidatorsEx: FormGroup;

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.formFieldEx = this.formBuilder.group({
            code: [null, [
                AtValidators.required(),
                AtValidators.minLength(3)
            ]],
            name: [null, [
                AtValidators.required(),
                AtValidators.maxLength(100)
            ]],
            websiteUrl: [null, [
                AtValidators.maxLength(70)
            ]],
            emailAddress: [null, [
                AtValidators.email(),
                AtValidators.maxLength(45)
            ]],
            officePhone: [null, [
                AtValidators.required(),
                AtValidators.maxLength(16)
            ]]
        });

        this.formValidatorsEx = this.formBuilder.group({
            required: [null, [
                AtValidators.required('This field is required, you can\'t leave it blank')
            ]],
            email: [null, [
                AtValidators.email()
            ]],
            url: [null, [
                AtValidators.url()
            ]],
            int: [null, [
                AtValidators.number('int')
            ]],
            unsignedInt: [null, [
                AtValidators.number('unsignedInt')
            ]],
            float: [null, [
                AtValidators.number('float')
            ]],
            min: [null, [
                AtValidators.number('float'),
                AtValidators.min(12)
            ]],
            max: [null, [
                AtValidators.number('int'),
                AtValidators.max(25)
            ]],
            range: [null, [
                AtValidators.number('unsignedInt'),
                AtValidators.range(5, 10)
            ]],
            minLength: [null, [
                AtValidators.alphanumeric(),
                AtValidators.minLength(6)
            ]],
            maxLength: [null, [
                AtValidators.alphanumeric(),
                AtValidators.maxLength(12)
            ]],
            rangeLength: [null, [
                AtValidators.alphanumeric(),
                AtValidators.rangeLength(6, 20)
            ]],
            exactLength: [null, [
                AtValidators.number(),
                AtValidators.exactLength(10)
            ]],
            alpha: [null, [
                AtValidators.alphanumeric('_-'),
            ]],
            exclude: [null, [
                AtValidators.exclude('+-'),
            ]],
            include: [null, [
                AtValidators.required(),
                AtValidators.rangeLength(6, 20),
                AtValidators.include('A-Z', '%fieldLabel% field must include at least one upper character'),
                AtValidators.include(AtValidators.SHIFT_CHARACTERS, '%fieldLabel% field must include at least one special character'),
            ]],
            custom: [null, [
                AtValidators.custom(this.customValidator),
            ]],
            password: [null, [
                AtValidators.required(),
            ]],
            repeatPassword: [null, [
                AtValidators.required(),
                AtValidators.matchOtherField('password', 'Password'),
            ]],

        });
    }

    private customValidator(control: FormControl) {

        if (!control.value) {
            return null
        }

        if (control.value === 'yes' || control.value === 'no') {
            return null;
        } else {
            return '%fieldLabel% only supports yes or no strings'
        }

    }
}
