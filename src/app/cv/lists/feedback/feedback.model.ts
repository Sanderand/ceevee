import { Field } from '../../../shared/models/field.model';

export const FeedbackFields: Array<Field> = [{
	key: 'name',
	label: 'Name',
	type: 'text',
	placeholder: 'John Doe'
}, {
	key: 'relationship',
	label: 'Relationship',
	type: 'text',
	placeholder: 'Manager'
}, {
	key: 'comment',
	label: 'Comment',
	type: 'textarea',
	placeholder: 'Lorem ipsum dolor sit amet.'
}];
