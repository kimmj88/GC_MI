import { IsNumber, IsString } from 'class-validator';

export class RequestSearchDto {
  @IsString()
  value: string;

  @IsString()
  created_at: string;

  @IsString()
  sort: string;

  @IsString()
  order: string;

  @IsNumber()
  rownum: number;

  @IsNumber()
  page: number;
}

export class ResponseSearchDto {
  datas: any[];
  totalCount: number;
}

export class SearchQueryDto {
  keyword?: string;
  page?: number;
  itemsPerPage?: number;
  sortBy?: string;
  orderBy?: string;
  group?: string;
  category?: string;
  project?: string;
  state?: string;
  account?: string;
  result?: string;
}
