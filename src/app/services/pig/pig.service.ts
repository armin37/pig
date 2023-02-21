import {Injectable} from '@angular/core';
import {ReportModel} from "../../models/report.model";

@Injectable({
  providedIn: 'root'
})
export class PigService {
  private _lastReportId = 1;
  private _reportedAddresses: string[] = [''];
  private _reports: ReportModel[] = [];

  constructor() {
    const reports = localStorage.getItem('reports');
    if (reports) {
      this.reports = JSON.parse(reports);
      this.lastReportId = this.reports.length + 1;
      this.reports.forEach(r => {
        r.time = new Date(r.time);
        if (!this._reportedAddresses.includes(r.location.locationName)) {
          this._reportedAddresses.push(r.location.locationName);
        }
      })
    }
  }


  get reportedAddresses(): any[] {
    return this._reportedAddresses;
  }

  addNewAddress(address: string) {
    this._reportedAddresses.push(address);
  }

  get reports(): ReportModel[] {
    return this._reports;
  }

  set reports(value: ReportModel[]) {
    this._reports = value;
  }

  addNewReport(report: ReportModel) {
    //new Item
    if (!report.id) {
      report.id = this.lastReportId;
      this._reports.push(report);
    } //editing Item
    else {
      let index = this.reports.findIndex(a => a.id === report.id);
      this.reports[index] = report;
    }
    this.saveReports();
  }

  saveReports() {
    localStorage.setItem('reports', JSON.stringify(this.reports));
  }

  get lastReportId(): number {
    return this._lastReportId++;
  }

  set lastReportId(value: number) {
    this._lastReportId = value;
  }
}
