import { Component, OnInit } from '@angular/core';
import { Park } from './../../models/park';
import { ParkService } from './../../services/park.service';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.scss'],
})
export class ParksComponent implements OnInit {
  constructor(private parkServ: ParkService) {}

  // Fields
  parks: Park[] = [];
  newPark: Park = new Park();
  editPark: Park = null;
  createPark: Park = null;
  start = null;
  selected: Park = null;
  addNew = null;

  ngOnInit(): void {
    this.start = true;
    this.reload();
  }
  reload() {
    this.parkServ.index().subscribe(
      (data) => {
        this.parks = data;
      },
      (err) => {
        console.error('Reload got an error: ' + err);
      }
    );
  }
  displayTable() {
    this.selected = null;
    this.addNew = null;
    this.start = true;
  }
  addNewVol() {
    this.parkServ.create(this.newPark).subscribe(
      (data) => {
        this.newPark = new Park();
        this.reload();
      },
      (err) => {
        console.error('Error in vol add new' + err);
      }
    );
    this.start = true;
    this.addNew = null;
  }
  updateVol() {
    this.parkServ.update(this.editPark).subscribe(
      (data) => {
        this.reload();
      },
      (err) => {
        console.error('Error in vol component update' + err);
      }
    );
    this.start = true;
    this.editPark = null;
    this.selected = null;
  }
  setEditVol() {
    this.editPark = Object.assign({}, this.selected);
  }

  deleteVol(id: string) {
    this.parkServ.destroy(id).subscribe(
      (data) => {
        this.reload();
      },
      (err) => {
        console.error('Error in vol componenet.delete' + err);
      }
    );
    this.start = true;
    this.selected = null;
  }
}
