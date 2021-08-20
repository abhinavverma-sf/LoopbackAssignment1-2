import {inject,Getter} from '@loopback/core';
import {DefaultCrudRepository,repository,HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Customer, CustomerRelations, User} from '../models';
import { UserRepository } from './user.repository';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.customerid,
  CustomerRelations
> {
  public readonly users: HasManyRepositoryFactory<User, typeof Customer.prototype.customerid>;
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,@repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Customer, dataSource);
    this.users = this.createHasManyRepositoryFactoryFor('users', userRepositoryGetter,);
    this.registerInclusionResolver('users', this.users.inclusionResolver);
  }
}
