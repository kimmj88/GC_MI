import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FindOptionsOrderValue,
  ILike,
  Repository,
  UpdateResult,
} from 'typeorm';

import { Account } from 'src/entities/account.entity';
import { AccountDto, AccountSearchDto } from '@domain/account/account.dto';
import { ResponseSearchDto } from '@common/dto/searchDTO';
import { $paginateArray } from '@util/paginateArray';
import { makeCondition } from '@util/makeQuery';

import { Observable, Subject, filter, map } from 'rxjs';
import { getAccountPayload } from '@util/decode-token.util';

@Injectable()
export class AccountService {
  private account$: Subject<any> = new Subject();
  private observer = this.account$.asObservable();

  constructor(
    @InjectRepository(Account) private accountRepository: Repository<Account>,
  ) {}

  all(): Promise<Account[]> {
    return this.accountRepository.find({});
  }

  list(accountReq: AccountDto): Promise<Account[]> {
    return this.accountRepository.find({
      where: [
        { name: ILike(`%${accountReq.name}%`) },
        { email: ILike(`%${accountReq.email}%`) },
      ],
    });
  }
}
