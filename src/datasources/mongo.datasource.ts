import { inject } from '@loopback/core';
import { juggler, AnyObject } from '@loopback/repository';

const { env } = process;
const config = {
  connector: 'mongodb',
  database: env.DB_NAME || 'shem',
  host: env.DB_HOST || 'localhost',
  name: 'mongo',
  password: env.DB_PASSWORD || '',
  port: Number(env.DB_PORT || 27017),
  url: env.DB_URL || '',
  user: env.DB_USER || ''
};

export class MongoDataSource extends juggler.DataSource {
  static dataSourceName = 'mongo';

  constructor(
    @inject('datasources.config.mongo', { optional: true })
    dsConfig: AnyObject = config
  ) {
    super(dsConfig);
  }
}
