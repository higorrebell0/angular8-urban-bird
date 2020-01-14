import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OffersService } from '../../offers.service';

@Component({
  selector: 'app-how-use',
  templateUrl: './how-use.component.html',
  styleUrls: ['./how-use.component.css'],
  providers: [ OffersService ]
})
export class HowUseComponent implements OnInit {

  public howUse: string;

  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.offersService.getHowUseId(params.id)
      .then((description: string) => { this.howUse = description; });
    });
  }

}
