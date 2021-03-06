import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AccelerometerData } from "nativescript-accelerometer";
import { AccelerometerService } from "../accelerometer.service";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    data$: Observable<AccelerometerData>
    constructor(public accService: AccelerometerService) {
        this.data$ = accService.data$;
    }

    ngOnInit(): void {
        this.accService.start();
    }

    toggleUpdates() {
        if (this.accService.isListening()) {
            this.accService.stop();
        } else {
            this.accService.start();
        }
    }
}
