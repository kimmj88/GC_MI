import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Between,
  FindOptionsOrderValue,
  ILike,
  Like,
  Repository,
} from 'typeorm';
import { ScreeningDto, ScreeningSearchDto } from './Screening.dto';
import { Screening } from 'src/entities/screening.entity';
import { ResponseSearchDto } from '@common/dto/searchDTO';
import { $paginateArray } from '@util/paginateArray';

@Injectable()
export class ScreeningService {
  @InjectRepository(Screening)
  private screeningRepository: Repository<Screening>;

  async create(body: ScreeningDto): Promise<Screening> {
    return await this.screeningRepository.save(body);
  }

  async all(): Promise<Screening[]> {
    const datas = await this.screeningRepository.find({
      relations: { movie: true },
    });
    return datas;
  }

  //## 영화 목록 조회 ##
  //## 상영 시간 목록 조회 ##
  async list(body: ScreeningDto): Promise<Screening[]> {
    const start = new Date(body.start_time);
    const end = new Date(body.end_time);

    return await this.screeningRepository.find({
      where: {
        movie: { title: ILike(`%${body.title}%`) },
        start_time: Between(start, end),
      },
      relations: { movie: true, screen: true },
    });
  }

  //## 영화 목록 조회 페이지 네이션##
  async search(
    body: Partial<ScreeningSearchDto>,
  ): Promise<ResponseSearchDto | undefined> {
    const order: Record<string, FindOptionsOrderValue> = {};

    if (body.order && body.sort) {
      order[body.sort] = body.order.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
    }

    const datas: Screening[] = await this.screeningRepository.find({
      where: { movie: { title: ILike(`%${body.title}%`) } },
      relations: { movie: true, screen: true },
      order,
    });

    const result: ResponseSearchDto = {
      datas: $paginateArray(datas, body.rownum, body.page),
      totalCount: datas.length,
    };

    return result;
  }
}
