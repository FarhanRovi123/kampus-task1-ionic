import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Import Add (before/after import please installation axios from cmd)
import axios from 'axios';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  // Variabel GetData for array
  public allData:any = [];
 
 
  constructor() {

    // Form Load GetData
    this.GetData();
  }


  async GetData(){
    const res:any = await axios.get('http://mobileprogramming123.000webhostapp.com/get_data.php');

    console.log(res.data);
    this.allData = res.data.result;
  }


}
