import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//Entities
import { Account } from 'src/entities/account.entity';

//Service
import { AccountService } from '@domain/account/account.service';
import { AccountController } from '@domain/account/account.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  providers: [AccountService],
  exports: [AccountService],
  controllers: [AccountController],
})
export class AccountModule {}
