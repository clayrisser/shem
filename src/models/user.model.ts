import { Entity, model, property } from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true
  })
  id?: string;

  @property({
    type: 'string',
    required: true
  })
  username: string;

  @property({
    type: 'string',
    required: true
  })
  email: string;

  @property({
    type: 'string',
    required: true
  })
  firstName: string;

  @property({
    type: 'string',
    required: true
  })
  lastName: string;

  @property({
    type: 'string',
    required: true
  })
  displayName: string;

  @property({
    type: 'string'
  })
  phoneNumber?: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}
