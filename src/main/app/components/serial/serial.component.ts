import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: 'serial.component.html'
})
export class SerialComponent {

  public title = 'this is the title for serial';
  public serialId = new BehaviorSubject<string>(null);

  constructor(private _state: ActivatedRoute) {
    let serialId = _state.snapshot.params['serial'];
    console.info(`Serial id: ${serialId}`);
    this.serialId.next(serialId);
  }

}
