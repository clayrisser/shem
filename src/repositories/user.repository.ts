import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { inject } from '@loopback/core';
import { User } from '../models';

const { env } = process;
const datasource = env.DATASOURCE || 'memory';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(
    @inject(`datasources.${datasource}`) dataSource: juggler.DataSource
  ) {
    super(User, dataSource);
  }
}
