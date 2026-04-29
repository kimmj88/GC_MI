import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScreenDto } from './Screen.dto';
import { Screen } from 'src/entities/screen.entity';

@Injectable()
export class ScreenService {
  @InjectRepository(Screen)
  private screenRepository: Repository<Screen>;

  async create(body: ScreenDto): Promise<Screen> {
    return await this.screenRepository.save(body);
  }

  async all(): Promise<Screen[]> {
    const datas = await this.screenRepository.find({
      relations: { seats: true },
    });
    return datas;
  }
}
