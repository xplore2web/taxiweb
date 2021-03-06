import {Injectable} from '@angular/core';
import {Hero} from 'app/_models/hero';
import {HEROES} from 'app/_models/mock-heroes';

@Injectable()
export class LoginService {

    getLoginDetails(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    constructor() {}

}
