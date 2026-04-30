import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Like, Repository } from 'typeorm';
import { ScreeningDto } from './Screening.dto';
import { Screening } from 'src/entities/screening.entity';

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

  async list(body: ScreeningDto): Promise<Screening[]> {
    const data: Screening[] = await this.screeningRepository.find({
      where: { movie: { title: ILike(`%${body.title}%`) } },
      relations: { movie: true, screen: true },
    });

    return data;
  }
}
