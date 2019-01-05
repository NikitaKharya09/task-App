import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from "rxjs/Observable";

@Injectable()
export class AppService  { 
    _url = "https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks";
    _urlBase = "https://firestore.googleapis.com/v1beta1";
    constructor(private _http: HttpClient){

    }

    getData(): Observable<Object> {
        return this._http.get(this._url);
    }

    removeRow (postCont: any): Observable<Object> {
        var delurl = this._urlBase + '/' + postCont.name;
        return this._http.delete(delurl);
    }
    submit (title: string, description: string): Observable<Object> {
        var obj = {
            "fields": {
                "title": {
                    "stringValue": title
                },
                "description": {
                    "stringValue": description
                }
            }
        };
        return this._http.post(this._url, obj);
    };
 }