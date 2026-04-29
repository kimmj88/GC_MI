import { Body, Controller, Get, Param, Post, Res, Sse } from '@nestjs/common';
import { BaseController } from '@common/domain/baseController';
import { AccountDto } from './account.dto';
import { ACCOUNT } from '@common/domain/api';
import { AccountService } from './account.service';
import { Response } from 'express';

@Controller(ACCOUNT)
export class AccountController extends BaseController<
  AccountService,
  AccountDto
> {
  constructor(private readonly accountService: AccountService) {
    super(accountService, ACCOUNT);
  }
}
