import { Field } from '../../shared/models/field.model';

export const DetailsFields: Array<Field> = [{
  key: 'name',
  label: 'Name',
  placeholder: 'Name',
  type: 'text'
}, {
  key: 'address',
  label: 'Address',
  placeholder: 'Address',
  type: 'text'
}, {
  key: 'email',
  label: 'Email',
  placeholder: 'Email',
  type: 'email'
}, {
  key: 'url',
  label: 'Url',
  placeholder: 'Url',
  type: 'url'
}, {
  key: 'tel',
  label: 'Tel',
  placeholder: 'Tel',
  type: 'text'
}];