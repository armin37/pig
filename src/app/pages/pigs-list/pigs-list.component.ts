import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http/http.service";
import {ReportModel} from "../../models/report.model";
import {PigService} from "../../services/pig/pig.service";
import {MessageService} from "primeng/api";
import {Md5} from 'ts-md5';
import {PASSWORD} from '../../env';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pigs-list',
  templateUrl: './pigs-list.component.html',
  styleUrls: ['./pigs-list.component.scss'],
  providers: [MessageService]
})
export class PigsListComponent implements OnInit {
  pigsList: ReportModel[] = [];
  selectedReportId;
  password;
  showPasswordDialog;
  mod: 'edit' | 'delete';

  constructor(private httpService: HttpService,
              private pigService: PigService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadSubmittedPigs();
  }

  loadSubmittedPigs() {
    this.pigsList = this.pigService.reports;
    // this.httpService.sendRequest().subscribe(res => console.log(res));
  }

  editDeleteReport() {
    const hashedPass = Md5.hashStr(this.password);
    if (hashedPass !== PASSWORD) {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'Incorrect password'});
      return;
    }
    if (this.mod === 'edit') {
      this.router.navigate([`/pig/${this.selectedReportId}`], {state: {authorized: 'true'}});
    } else if (this.mod === 'delete') {
      let index = this.pigService.reports.findIndex(a => a.id === this.selectedReportId);
      if (index > -1) {
        this.pigService.reports.splice(index, 1);
        this.pigService.saveReports();
        this.selectedReportId = undefined
        this.showPasswordDialog = false;
      }
    }
  }

}
