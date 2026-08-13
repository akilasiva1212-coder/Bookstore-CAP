using BookstoreService as service from '../../srv/service';
annotate service.Chapters with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Example',
            ID : 'Example',
            Target : '@UI.FieldGroup#Example',
        },
    ],
    UI.FieldGroup #Example : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : book.Chapters.number,
                Label : 'Number',
            },
            {
                $Type : 'UI.DataField',
                Value : book.Chapters.pages,
                Label : 'Pages',
            },
            {
                $Type : 'UI.DataField',
                Value : book.Chapters.title,
                Label : 'Title',
            },
        ],
    },
);

