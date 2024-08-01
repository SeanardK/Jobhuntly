import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateItemDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  @Min(0)
  @Max(1000)
  readonly quantity: number | string;
}
