import { defaults } from 'lodash'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injector, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { AppConfig } from '../core/app-config';
import { SessionService } from '../core/session.service';
import { IEntityList, IHttpClientRequestOptions, IUploader } from 'src/types';
import { sendFormData } from 'src/utils';

@Injectable()
export class BaseApi<T> {

    protected appConfig: AppConfig = this.injector.get(AppConfig)
    protected baseUrl: string
    protected httpClient: HttpClient = this.injector.get(HttpClient)
    protected sessionService: SessionService = this.injector.get(SessionService)

    constructor(
        protected injector: Injector,
    ) { }

    setBaseUrl(url: string) {
        if (url.match(/^https?:\/\//)) {
            this.baseUrl = url
            return
        }
        this.baseUrl = this.appConfig.apiUrl + url
    }

    query(params: {
        skip?: number,
        take?: number,
        sorts?: string[],
        query?: string,
    }) {
        params = defaults(params, {
            skip: 0,
            take: 10,
            sorts: ['-updatedDate']
        })
        return this.get('?skip?take?sorts?query', params) as Observable<IEntityList<T>>
    }

    getOne(id: string) {
        return this.get('/:id', {
            id
        }) as Observable<T>
    }

    create(data: any) {
        return this.post('/', undefined, data) as Observable<T>
    }

    update(data: any) {
        return this.put(`/:id`, {
            id: data.id
        }, data)
    }

    remove(id: string) {
        return this.delete('/:id', {
            id
        })
    }

    protected get(url: string, params?) {
        url = this.createUrl(url, params)
        return this.httpClient.get(url)
    }

    protected post(url: string, params?: any, body?: any) {
        url = this.createUrl(url, params)
        return this.httpClient.post(url, JSON.stringify(body))
    }

    protected put(url: string, params?: any, body?: any) {
        url = this.createUrl(url, params)
        return this.httpClient.put(url, JSON.stringify(body))
    }

    protected delete(url: string, params?: any, body?: any) {
        url = this.createUrl(url, params)
        return this.httpClient.delete(url)
    }

    protected request(method: string, url: string, params?: any, options?: IHttpClientRequestOptions) {
        url = this.createUrl(url, params)
        return this.httpClient.request(method, url, options)
    }

    protected createUrl(
        pattern: string,
        params: Object = {},
    ): string {
        const serializeArray = (key, arr) => arr.map(it => `${key}=${it}`).join('&')
        const query = (key: string) => {
            if (typeof params[key] === 'undefined' || params[key] === null) {
                return ''
            }
            if (params[key] instanceof Array) {
                return `&${serializeArray(key, params[key])}`
            }
            if (params[key] instanceof Date) {
                return `&${key}=${params[key].toISOString()}`
            }
            return `&${key}=${encodeURIComponent(params[key])}`
        }
        const str = pattern.replace(/([:\?])(\w+)/g, (_match, indicator, key) => {
            if (indicator === ':') {
                return params[key] === null ? ' ' : params[key]
            }
            if (indicator === '?') {
                return query(key)
            }
            return ''
        })
        return this.baseUrl + str.replace(/\&/, '?')
    }

    protected sendForm(url, formData): IUploader {
        const endpoint = this.baseUrl + url
        const accessToken = this.sessionService.accessToken
        const headers = {
            authorization: `Bearer ${accessToken}`,
        }
        return sendFormData(endpoint, formData, headers)
    }

}
