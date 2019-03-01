import { EventType } from './enums';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpObserve } from '@angular/common/http/src/client';
import { Observable } from 'rxjs';

export interface IEventObject {
    type: EventType | ResponseType;
    data?: any;
}

export interface ISessionData {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    userData: IUserData;
}

export interface IUserData {
    id: string;
    role: string;
    expirationDate: Date;
    firstName: string;
    lastName: string;
    profileImageUrl: string;
    fullName: string;
}

export interface IImage extends IEntity {
    fileName: string;
    url: string | Blob | File;
    thumbnails: string[];
}

export interface IEntity {
    id?: string;
    name?: string;
}

export interface BreadcrumbItem {
    id?: string;
    label: string;
    route: string;
}

export interface IEntityList<T> {
    count: number
    items: Array<T>
}

export interface IHttpClientRequestOptions {
    body?: any
    headers?: HttpHeaders | {
        [header: string]: string | string[]
    }
    observe?: HttpObserve
    params?: HttpParams | {
        [param: string]: string | string[]
    }
    reportProgress?: boolean
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text'
    withCredentials?: boolean
}

export interface IUploader {
    progress: Observable<IUploadProgress>
    response: Observable<any>
    abort: Function
    send: Function
    pending: boolean
}

export interface IUploadProgress {
    total: number
    loaded: number
}
