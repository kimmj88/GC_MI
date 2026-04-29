// create-nest-entity.js
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2); // ['my_entity']
const name = args[0];

if (!name) {
  console.error(
    '❌ 엔티티 이름이 필요합니다. 예: npm run generate:create -- my_entity',
  );
  process.exit(1);
}

// snake_case -> PascalCase
const pascalName = name
  .split('_')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join('');

// snake_case -> camelCase
const camelName = name
  .split('_')
  .map((word, idx) =>
    idx === 0
      ? word.toLowerCase()
      : word.charAt(0).toUpperCase() + word.slice(1),
  )
  .join('');

const baseDir = `src/${name}`;
fs.mkdirSync(baseDir, { recursive: true });

const controller = `
import { Controller } from '@nestjs/common';
import { BaseController } from '@common/domain/baseController';
import { ${pascalName}Service } from './${name}.service';
import { ${pascalName}Dto } from './${pascalName}.dto';
import { ${name.toUpperCase()} } from '@common/domain/api';

@Controller('${name}')
export class ${pascalName}Controller extends BaseController<${pascalName}Service, ${pascalName}Dto> {
  constructor(private readonly ${camelName}Service: ${pascalName}Service) {
    super(${camelName}Service, ${name.toUpperCase()});
  }
}
`;

const service = `
import { ${pascalName} } from '@entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ${pascalName}Dto } from './${pascalName}.dto';

@Injectable()
export class ${pascalName}Service {
  @InjectRepository(${pascalName})
  private ${camelName}Repository: Repository<${pascalName}>;

  async create(${camelName}Req: ${pascalName}Dto): Promise<${pascalName}> {
    return await this.${camelName}Repository.save({});
  }
}
`;

const moduleFile = `
import { Module } from '@nestjs/common';
import { ${pascalName}Controller } from './${name}.controller';
import { ${pascalName}Service } from './${name}.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { PassportModule } from '@nestjs/passport';
import { ProfileModule } from '@domain/profile/profile.module';
import { ${pascalName} } from '@entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([${pascalName}]),
      HttpModule,
      PassportModule,
      ProfileModule,
    ],
  controllers: [${pascalName}Controller],
  providers: [${pascalName}Service],
  exports: [${pascalName}Service],
})
export class ${pascalName}Module {}
`;

const dto = `
import { IsNumber, IsString } from 'class-validator';

export class ${pascalName}Dto {
  @IsNumber()
  id?: number;
}
`;

fs.writeFileSync(path.join(baseDir, `${name}.controller.ts`), controller);
fs.writeFileSync(path.join(baseDir, `${name}.service.ts`), service);
fs.writeFileSync(path.join(baseDir, `${name}.module.ts`), moduleFile);
fs.writeFileSync(path.join(baseDir, `${name}.dto.ts`), dto);

console.log(`✅ ${name} 모듈 생성 완료`);
