import { Injectable } from '@angular/core';
import { socialNetworks, data } from '../../src/app/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getSocialNetworks() {
    return socialNetworks;
  }

  getUsers() {
    return Object.values(data);
  }

  getUserById(userId: string) {
    const key = `U${userId}` as keyof typeof data;
    return data[key];
  }

  updateAmount(userId: string, amount: number) {
    const key = `U${userId}` as keyof typeof data;
    const user = data[key];
    if (user) {
      user.amountAvailable -= amount;
    }
  }
}
