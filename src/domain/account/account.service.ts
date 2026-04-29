import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FindOptionsOrderValue,
  ILike,
  Repository,
  UpdateResult,
} from 'typeorm';

import { Account } from 'src/entities/account.entity';
import { AccountDto } from '@domain/account/account.dto';

import { Observable, Subject, filter, map } from 'rxjs';

@Injectable()
export class AccountService {
  private account$: Subject<any> = new Subject();
  private observer = this.account$.asObservable();

  constructor(
    @InjectRepository(Account) private accountRepository: Repository<Account>,
  ) {}

  //Default Service
  all(): Promise<Account[]> {
    return this.accountRepository.find({});
  }

  async create(body: AccountDto): Promise<Account> {
    const data = await this.accountRepository.save(body);

    return data;
  }

  //Optional Service
  async login(body: AccountDto): Promise<boolean> {
    const existingAccount = await this.accountRepository.findOne({
      where: { email: body.email, password: body.password },
    });

    if (!existingAccount) {
      return false;
    }

    return true;
  }
}
