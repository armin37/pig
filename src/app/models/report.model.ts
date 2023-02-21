export interface ReportModel {
  id: number,
  pid: number,
  breed: string,
  name: string,
  phone: string,
  location: Location
  time: Date,
  note: string,
  status: string
}

export interface Location {
  locationName: string,
  longitude: number,
  latitude: number
}
