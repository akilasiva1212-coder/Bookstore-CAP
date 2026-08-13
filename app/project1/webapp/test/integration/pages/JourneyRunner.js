sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project1/test/integration/pages/BooksList.gen",
	"project1/test/integration/pages/BooksObjectPage.gen",
	"project1/test/integration/pages/ChaptersObjectPage.gen"
], function (JourneyRunner, BooksListGenerated, BooksObjectPageGenerated, ChaptersObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project1') + '/test/flpSandbox.html#project1-tile',
        pages: {
			onTheBooksListGenerated: BooksListGenerated,
			onTheBooksObjectPageGenerated: BooksObjectPageGenerated,
			onTheChaptersObjectPageGenerated: ChaptersObjectPageGenerated
        },
        async: true
    });

    return runner;
});

