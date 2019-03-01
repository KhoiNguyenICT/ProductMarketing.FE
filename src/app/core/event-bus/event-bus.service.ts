import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IEventObject, EventType } from 'src/types';
import { filter } from 'rxjs/operators';

@Injectable()
export class EventBusService {
    private _event = new Subject<IEventObject>();

    emit(event: IEventObject) {
        this._event.next(event);
    }

    on(eventType: (EventType)): Observable<IEventObject> {
        return this._event.pipe(filter(t => t.type === eventType));
    }

}
