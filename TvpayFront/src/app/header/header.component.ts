import { Component, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService){}

  
  @Output() featureSelected = new EventEmitter<string>();

  onFetchData(){
    this.dataStorageService.fetchpayments().subscribe();
  }
  
  onSelect(feature: string){
    //this.featureSelected.emit(feature);
  }

}
