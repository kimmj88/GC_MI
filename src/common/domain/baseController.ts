import { ResponseSearchDto, SearchQueryDto } from '@common/dto/searchDTO';
import {
  Get,
  Post,
  Body,
  Res,
  UseGuards,
  Query,
  Req,
  Inject,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import {
  ALL,
  CREATE,
  CREATE_MANY,
  DELETE,
  FIND,
  LIST,
  SEARCH,
  UPDATE,
} from '@common/domain/api';
import { FileInterceptor } from '@nestjs/platform-express';

interface BaseService<T = any> {
  // list?(body: T): Promise<T>;
  // find?(id: number): Promise<T>;
  // findOne?(body: T): Promise<T>;
  // search?(query: any): Promise<any>;
  // create(body: T): Promise<T>;
  // createMany?(body: T[]): Promise<T>;
  // delete?(body: T): Promise<boolean>;
  // update?(body: T): Promise<T>;
  all?(query: any): Promise<T>;
}

export abstract class BaseController<T1 extends BaseService<any>, T2> {
  constructor(
    protected readonly service: T1,
    public domainName: string,
  ) {}

  @Get(ALL)
  async all(@Query() query: SearchQueryDto, @Res() res: Response) {
    const result = await this.service.all(query);
    return res.status(200).json({
      datas: result,
    });
  }

  // @Post(CREATE)
  // async create(
  //   @Body() body: T2,
  //   @UploadedFile() file: Express.Multer.File,
  //   @Req() req: Request,
  //   @Res() res: Response,
  // ) {
  //   return res.status(200).json({
  //     datas: await this.service.create(body),
  //   });
  // }

  // @Post(DELETE)
  // async delete(@Body() body: T2, @Res() res: Response) {
  //   return res.status(201).json({
  //     result: await this.service.delete(body),
  //   });
  // }

  // @UseInterceptors(FileInterceptor('file'))
  // @Post(UPDATE)
  // async update(
  //   @Body() body: T2,
  //   @UploadedFile() file: Express.Multer.File,
  //   @Req() req: Request,
  //   @Res() res: Response,
  // ) {
  //   return res.status(200).json({
  //     rows: await this.service.update(body),
  //   });
  // }

  // @Get(SEARCH)
  // async search(
  //   @Query() query: SearchQueryDto,
  //   @Req() req: Request,
  //   @Res() res: Response,
  // ) {
  //   const defaultQeury: SearchQueryDto = {
  //     sortBy: 'created_at',
  //     orderBy: 'desc',
  //   };

  //   const mergedQuery = {
  //     ...defaultQeury,
  //     ...query,
  //   };

  //   const result = (await this.service.search({
  //     value: mergedQuery.keyword,
  //     page: mergedQuery.page,
  //     rownum: mergedQuery.itemsPerPage,
  //     sort: mergedQuery.sortBy,
  //     order: mergedQuery.orderBy,
  //     group: mergedQuery.group,
  //     category: mergedQuery.category,
  //     project: mergedQuery.project,
  //     state: mergedQuery.state,
  //     account: mergedQuery.account,
  //     result: mergedQuery.result,
  //   })) as ResponseSearchDto;

  //   return res.json({
  //     datas: result.datas,
  //     totalCount: result.totalCount,
  //   });
  // }

  // @Get(FIND)
  // async find(@Query('id') id: number, @Res() res: Response) {
  //   const result = await this.service.find(id);
  //   return res.json({
  //     datas: result,
  //   });
  // }

  // @Post(LIST)
  // async list(@Body() body: T2, @Res() res: Response) {
  //   const result = await this.service.list(body);
  //   return res.json({
  //     datas: result,
  //   });
  // }

  // @UseGuards(AuthGuard('token'))
  // @Post(CREATE_MANY)
  // async createMany(@Body() body: T2[], @Res() res: Response) {
  //   const result = await this.service.createMany(body);
  //   return res.json({
  //     datas: result,
  //   });
  // }
}
