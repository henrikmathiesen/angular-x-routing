import { Component } from '@angular/core';

import { OperatingSystemConstant } from './models/operating-system.constant';
import { SomeFormModel } from './models/some-form.model';

@Component({
    templateUrl: './buttons-as-radios.component.html',
})
export class ButtonAsRadiosComponent {
    pageTitle = 'Button as Radios';
    someFormModel: SomeFormModel = {
        operatingSystemOption: null
    }

    logResult() {
        console.log(this.someFormModel);
    }
}
