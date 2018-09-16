import { toDate } from "@angular/common/src/i18n/format_date";

export class DishComment {
    text_comment:  string;
    rate: string;
    commenter: string;
};

export const COMMENTS: DishComment[]=[
    {
        text_comment:  'Sample comment 1',
        rate: '3',
        commenter: 'John Doe',
    },
    {
        text_comment:  'Test comment 2',
        rate: '5',
        commenter: 'Jane Doe',
    },
    {
        text_comment:  'Awsome food!',
        rate: '5',
        commenter: 'Happy Doe',
    }
];    