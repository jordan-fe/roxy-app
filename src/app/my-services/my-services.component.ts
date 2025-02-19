import { Component } from '@angular/core';
import {PeigneIconComponent} from './peigne-icon/peigne-icon.component';
import {BathIconComponent} from './bath-icon/bath-icon.component';
import {HairSprayIconComponent} from './hair-spray-icon/hair-spray-icon.component';
import {ScissorsIconComponent} from './scissors-icon/scissors-icon.component';
import {NailTrimmerIconComponent} from './nail-trimmer-icon/nail-trimmer-icon.component';
import {HairClipperIconComponent} from './hair-clipper-icon/hair-clipper-icon.component';
import {CotonSwabsIconComponent} from './coton-swabs-icon/coton-swabs-icon.component';
import {RazorIconComponent} from "./razor-icon/razor-icon.component";
import {ScissorsSimpleIconComponent} from "./scissors-simple-icon/scissors-simple-icon.component";
import {EpilatorIconComponent} from "./epilator-icon/epilator-icon.component";
import {PoodleIconComponent} from "./poodle-icon/poodle-icon.component";
import {TweezersIconComponent} from "./tweezers-icon/tweezers-icon.component";

@Component({
  selector: 'app-my-services',
    imports: [
        PeigneIconComponent,
        BathIconComponent,
        HairSprayIconComponent,
        ScissorsIconComponent,
        NailTrimmerIconComponent,
        HairClipperIconComponent,
        CotonSwabsIconComponent,
        RazorIconComponent,
        ScissorsSimpleIconComponent,
        EpilatorIconComponent,
        PoodleIconComponent,
        TweezersIconComponent
    ],
  templateUrl: './my-services.component.html',
  standalone: true,
  styleUrl: './my-services.component.scss'
})
export class MyServicesComponent {

}
