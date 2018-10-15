import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';

const { env } = process;
const config = {
  connector: 'mongodb',
  database: env.MONGO_DATABASE || '',
  host: env.MONGO_HOST || '',
  name: 'mongo',
  password: env.MONGO_PASSWORD || '',
  port: Number(env.MONGO_PORT || 27017),
  url: env.MONGO_URL || '',
  user: env.MONGO_USER || ''
};

export class MongoDataSource extends juggler.DataSource {
  static dataSourceName = 'mongo';

  constructor(
    @inject('datasources.config.mongo', { optional: true })
    dsConfig: object = config
  ) {
    super(dsConfig);
  }
}
