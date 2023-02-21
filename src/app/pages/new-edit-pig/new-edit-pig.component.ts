import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {MAP_CENTER, MAP_ZOOM} from "../../env";
import {Map} from "mapbox-gl";
import {Location, ReportModel} from "../../models/report.model";
import {PigService} from "../../services/pig/pig.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-new-edit-pig',
  templateUrl: './new-edit-pig.component.html',
  styleUrls: ['./new-edit-pig.component.scss'],
  providers: [MessageService]
})
export class NewEditPigComponent implements OnInit, AfterViewInit {
  map: Map;
  reportId;
  mapCenter = MAP_CENTER;
  mapZoom = MAP_ZOOM;
  markerPosition = MAP_CENTER;
  form: FormGroup;
  addressList: string[] = [];
  statusList = ['READY FOR PICKUP', 'RETRIEVED'];
  breedList = ['', 'Pot-bellied', 'Unknown'];
  newAddress = '';
  showAddressDialog = false;
  authorized;

  constructor(private fb: FormBuilder,
              private pigService: PigService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.reportId = this.activatedRoute.snapshot.paramMap.get('id');
    this.authorized = window.history.state.authorized;
    //if reportId is not undefined means edit which only Mr Hoggett is capable of
    if (this.reportId && !this.authorized) {
      this.router.navigateByUrl('/');
      return;
    }
    this.initForm();
    this.updateAddressList();
  }

  ngAfterViewInit(): void {
  }

  updateAddressList() {
    this.addressList = this.pigService.reportedAddresses;
  }

  initForm() {
    let data: ReportModel | undefined;
    if (this.reportId) {
      data = this.pigService.reports.find(a => a.id === +this.reportId);
      console.log(data)
    }
    if (data) {
      this.mapCenter = {lat: data.location.latitude, lon: data.location.longitude}
      this.markerPosition = {lat: data.location.latitude, lon: data.location.longitude}
    }
    this.form = this.fb.group({
      id: [data ? data.id : undefined],
      pid: [data ? data.pid : 0, Validators.required],
      breed: [data ? data.breed : '', Validators.required],
      name: [data ? data.name : '', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      phone: [data ? data.phone : '', Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)])],
      locationName: [data ? data.location.locationName : '', Validators.required],
      longitude: [data ? data.location.longitude : 0, Validators.compose([Validators.required, Validators.min(-180), Validators.max(180)])],
      latitude: [data ? data.location.latitude : 0, Validators.compose([Validators.required, Validators.min(-90), Validators.max(90)])],
      time: [data ? data.time : '', Validators.required],
      note: [data ? data.note : ''],
      status: data ? data.status : 'READY FOR PICKUP'
    })
  }

  submit() {
    if (this.form.invalid) {
      this.messageService.add({severity: 'warn', summary: 'Error', detail: 'Form is not valid'});
      return
    }
    let location: Location = {
      locationName: this.form.controls['locationName'].value,
      longitude: this.form.controls['longitude'].value,
      latitude: this.form.controls['latitude'].value
    }
    let data: ReportModel = {
      id: this.form.controls['id'].value,
      pid: this.form.controls['pid'].value,
      breed: this.form.controls['breed'].value,
      name: this.form.controls['name'].value,
      phone: this.form.controls['phone'].value,
      location,
      time: new Date(this.form.controls['time'].value),
      note: this.form.controls['note'].value,
      status: this.form.controls['status'].value
    };
    this.pigService.addNewReport(data);
    this.router.navigateByUrl('/pigs-list')
  }

  addNewAddress() {
    if (this.newAddress) {
      this.pigService.addNewAddress(this.newAddress);
      this.updateAddressList();
      this.showAddressDialog = false;
      this.newAddress = '';
    }
  }

  setCenter(event) {
    this.markerPosition = this.map.getCenter();
    this.form.controls['longitude'].setValue(this.map.getCenter().lng);
    this.form.controls['latitude'].setValue(this.map.getCenter().lat);
  }

  loadMap(map) {
    this.map = map;
  }
}
